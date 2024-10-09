import { useLoaderData, useParams } from "@remix-run/react";

import BreadCrumbs from "~/components/admin-panel/breadcrumbs";
import { ContentLayout } from "~/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { HistoryCard } from "./history-card";
import { PriorityCard } from "./priority-card";
import { RecommenedCard } from "./recommend-card";
import { columns } from "./scans/columns";
import type { Payment } from "./scans/table";
import ScansTable from "./scans/table";
import { SummaryCard } from "./summary-card";

export function loader() {
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
  ];
  return data;
}

export default function DomainPage() {
  const data = useLoaderData<typeof loader>();
  const { domainId } = useParams();
  const breadcrumbs = [
    { path: "/dashboard", name: "Dashboard", active: false },
    { name: domainId!, active: true },
  ];

  return (
    <ContentLayout title={"Domain Overview"}>
      <BreadCrumbs list={breadcrumbs} />
      <Card>
        <CardHeader>
          <CardTitle>Domain stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-12">
          <section className="grid-row-1 grid grid-flow-row gap-8 md:grid-cols-3">
            <SummaryCard />
            <PriorityCard />
            <RecommenedCard />
          </section>
          <HistoryCard />
          <Card>
            <CardHeader className="rounded-t-xl bg-card-foreground/80 text-card">
              <CardTitle>Scan Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ScansTable columns={columns} data={data} />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
