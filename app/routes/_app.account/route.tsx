import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { ContentLayout } from "~/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { createSSRClient, requireAuth } from "~/db/supabase.server";

import NavBar from "./nav-bar";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createSSRClient(request);
  const user = await requireAuth(request);
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", user.id)
    .single();

  const { data: orgData } = await supabase
    .from("orgs")
    .select("*, users:users_orgs(users(role,display_name,email))")
    .eq("name", data.active_org)
    .single();

  return defer({ user: data, orgData });
};

export default function AccountLayout() {
  return (
    <ContentLayout title="Settings">
      <Card>
        <CardHeader>
          <NavBar />
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
