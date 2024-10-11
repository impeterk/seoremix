import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { createSSRClient } from "src/app/lib/supabase/server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = createSSRClient(request);
  await supabase.auth.signOut();
  return redirect("/", 302);
}
