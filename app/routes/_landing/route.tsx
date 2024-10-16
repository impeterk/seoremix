import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { getUser } from "~/db/supabase.server";

import { Footer } from "./footer";
import { Header } from "./header";

export async function loader({ request, context }: LoaderFunctionArgs) {
  return context.user;
}
export default function LandingLayout() {
  const user = useLoaderData<typeof loader>();
  return (
    <>
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header user={user} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
