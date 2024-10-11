import { Outlet, useParams } from "@remix-run/react";

import BreadCrumbs from "src/app/components/admin-panel/breadcrumbs";
import { ContentLayout } from "src/app/components/admin-panel/content-layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/app/components/ui/card";

export default function ScanPage() {
  const { domainId, scanId } = useParams();

  const breadcrumbs = [
    { path: "/dashboard", name: "Dashboard", active: false },
    { name: domainId!, path: "../", active: false },
    { name: scanId!, active: true },
  ];

  return (
    <ContentLayout title="Scan Overview">
      <BreadCrumbs list={breadcrumbs} />
      <Card>
        <CardHeader>
          <CardTitle>URL Result</CardTitle>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
