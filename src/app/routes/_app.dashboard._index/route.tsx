import { type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import BreadCrumbs from "src/app/components/admin-panel/breadcrumbs";
import { ContentLayout } from "src/app/components/admin-panel/content-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/app/components/ui/card";
import {
  createSSRClient,
  getUserFromAuth,
  requireAuth,
} from "src/app/lib/supabase/server";

import { columns } from "./columns";
import DomainsTable from "./domains-table";

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = createSSRClient(request);
  const { id } = await requireAuth(request);
  const user = await getUserFromAuth(request, id);
  const { data: domains } = await supabase.from("domains").select("*");
  return { domains, user };
}

export const handle = {
  breadcrumb: () => <Link to="/dashboard">Dashboard</Link>,
};

export default function DashboardPage() {
  const { user, domains } = useLoaderData<typeof loader>();
  const breadcrumbs = [{ path: "/", name: "Dashboard", active: true }];
  return (
    <ContentLayout title="Domain Dashboard">
      <BreadCrumbs list={breadcrumbs} />
      <Card>
        <CardHeader>
          <CardTitle>{user.active_org} Domains</CardTitle>
        </CardHeader>
        <CardContent>
          <DomainsTable data={domains!} columns={columns} />
        </CardContent>
      </Card>
      <pre>{JSON.stringify(domains, null, 2)}</pre>
    </ContentLayout>
  );
}
