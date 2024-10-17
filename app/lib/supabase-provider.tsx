import { ReactNode, createContext } from "react";

import { createClient } from "@/db/supabase.client";

export const SupabaseContext = createContext(createClient());
export default function SupabaseProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SupabaseContext.Provider>{children}</SupabaseContext.Provider>;
}
