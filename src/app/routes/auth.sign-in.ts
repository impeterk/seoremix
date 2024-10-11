import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { createSSRClient } from "src/app/lib/supabase/server";

export async function action({ request }: ActionFunctionArgs) {
  const { supabase, headers } = createSSRClient(request);
  const formData = await request.formData();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signInWithPassword(data);

  // await new Promise((res) => setTimeout(res, 3000));
  if (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }

  return redirect("/dashboard", { headers });
}
