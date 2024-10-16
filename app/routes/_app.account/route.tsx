import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { ContentLayout } from "~/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { createSSRClient } from "~/db/supabase.server";

import NavBar from "./nav-bar";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const { supabase } = createSSRClient(request);
  const user = context.user;

  const { data: orgData } = await supabase
    .from("orgs")
    .select("*, users:users_orgs(users(role,display_name,email))")
    .eq("name", user.active_org)
    .single();

  return defer({ user, orgData });
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
