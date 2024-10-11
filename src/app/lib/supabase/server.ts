import { redirect } from "@remix-run/node";

import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from "@supabase/ssr";
import type { User } from "@supabase/supabase-js";
import "dotenv/config";

export function createSSRClient(request: Request) {
  const headers = new Headers();

  const supabase = createServerClient(
    process.env.SUPABASE_URL as string,
    process.env.DB_ANON_KEY as string,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get("Cookie") ?? "");
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            headers.append(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            );
          });
        },
      },
    }
  );
  return { supabase, headers };
}

export async function requireAuth(request: Request): Promise<User> {
  const { supabase } = createSSRClient(request);
  console.log("require Auth");
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw redirect("/auth", 302);
  }
  return user;
}

export async function getUser(request: Request) {
  const { supabase } = createSSRClient(request);
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();
  return authUser;
}

export async function getUserFromAuth(request: Request, auth_id: string) {
  const { supabase } = createSSRClient(request);
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", auth_id)
    .single();
  return data;
}