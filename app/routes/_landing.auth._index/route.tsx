import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/react";

import { createSSRClient } from "~/db/supabase.server";

import { SingInForm } from "./sign-in-form";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createSSRClient(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log({ user });

  // if (user) return redirect("/dashboard", 302);
  return null;
};

export default function AuthPage() {
  return (
    <section className="container pt-8">
      <div className="mx-auto max-w-md">
        <SingInForm />
      </div>
    </section>
  );
}
