import { createContext } from "react";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
  );
}

export const SupabaseContext = createContext(createClient());
