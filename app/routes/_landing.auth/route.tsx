import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  if (context.user) throw redirect("/dashboard", 302);
  return null;
};

export default function AuthPage() {
  return (
    <>
      <section className="container pt-8">
        <div className="mx-auto max-w-md">
          <Outlet />
        </div>
      </section>
    </>
  );
}
