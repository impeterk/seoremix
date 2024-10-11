import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import AdminPanelLayout from "~/components/admin-panel/admin-panel-layout";
import { getUserFromAuth, requireAuth } from "~/db/supabase.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await requireAuth(request);
  const data = await getUserFromAuth(request, user.id);
  return json({ user: data });
};

export default function DashboardLayout() {
  return (
    <AdminPanelLayout>
      <Outlet />
    </AdminPanelLayout>
  );
}
