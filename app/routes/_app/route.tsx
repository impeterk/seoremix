import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import AdminPanelLayout from "~/components/admin-panel/admin-panel-layout";
import { requireAuth } from "~/db/supabase.server";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return requireAuth(context);
};

export default function DashboardLayout() {
  return (
    <AdminPanelLayout>
      <Outlet />
    </AdminPanelLayout>
  );
}
