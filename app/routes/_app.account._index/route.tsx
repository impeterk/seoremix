import { type LoaderFunctionArgs } from "@remix-run/node";
import {
  Await,
  type ClientLoaderFunctionArgs,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import { Suspense } from "react";

import { User2 } from "lucide-react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { createSSRClient, requireAuth } from "~/db/supabase.server";

export const handle = {
  title: () => "Account",
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createSSRClient(request);
  const authUser = await requireAuth(request);
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", authUser.id)
    .single();

  const { data: orgs } = await supabase
    .from("users_orgs")
    .select("*")
    .eq("user_id", user.id);
  return { user, orgs };
};

export default function AccountPage() {
  const { user, orgs } = useLoaderData<typeof loader>();
  return (
    <>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data}>
          {({ user, orgData }) => (
            <>
              <pre>{JSON.stringify(user, null, 2)}</pre>
              <pre>{JSON.stringify(orgData, null, 2)}</pre>
            </>
          )}
        </Await>
      </Suspense> */}
      <section className="grid grid-cols-[auto_1fr] items-center gap-12">
        <div className="relative">
          <Avatar className="size-24 outline outline-border">
            <AvatarFallback className="bg-inherit">
              <User2 className="size-16 text-secondary-foreground" />
            </AvatarFallback>
          </Avatar>
          <Badge
            variant={"outline"}
            className="absolute -right-10 bottom-0 -translate-x-full translate-y-2 bg-background capitalize"
          >
            {user.role}
          </Badge>
        </div>

        <section className="grid">
          <div>
            <Label className="text-xs text-muted-foreground">Name</Label>

            <h4 className="text-xl font-semibold tracking-tight text-foreground">
              {user.display_name}
            </h4>
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">email</Label>
            <h4 className="text-xl font-semibold tracking-tight text-foreground">
              {user.email}
            </h4>
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">
              Active Organization
            </Label>
            <Select defaultValue={user.active_org} disabled={orgs?.length < 2}>
              <SelectTrigger className="max-w-60">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {orgs?.map((org) => (
                    <SelectItem key={org.org_id} value={org.org_name}>
                      {org.org_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
      </section>
    </>
  );
}
