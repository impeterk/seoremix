import {
  type ActionFunctionArgs,
  type LoaderFunction,
  type LoaderFunctionArgs,
  json,
} from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { type FormEvent } from "react";

import { Building2, Compass, FilePlus2, Info } from "lucide-react";

import BreadCrumbs from "~/components/admin-panel/breadcrumbs";
import { ContentLayout } from "~/components/admin-panel/content-layout";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { newDomainSchema } from "~/db/schemas/domains";
import { createSSRClient } from "~/db/supabase.server";

export const loader: LoaderFunction = async ({
  request,
  context,
}: LoaderFunctionArgs) => {
  return context.user;
};

const breadcrumbs = [
  {
    path: "/dashboard",
    name: "Dashboard",
    active: false,
  },
  {
    path: "new-domain",
    name: "New Domain",
    active: true,
  },
];

export async function action({ request }: ActionFunctionArgs) {
  const { supabase } = createSSRClient(request);
  const formData = await request.formData();
  // console.log({ formData });
  const validSchema = newDomainSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validSchema.success) {
    console.error(validSchema.error.flatten());
    return json({ errors: validSchema.error.flatten().fieldErrors });
  }

  const {
    data: [{ id: domain_id }],
  } = await supabase
    .from("domains")
    .insert([{ base_url: validSchema.data.domain }])
    .select();
  const { data: domains_orgs } = await supabase
    .from("domains_orgs")
    .insert([{ org_name: validSchema.data.organization, domain_id }]);
  const { data: domains_users } = await supabase
    .from("domains_users")
    .insert([{ user_id: validSchema.data.userId, domain_id }]);

  return json({ domain_id, domains_orgs, domains_users });
}

export default function NewDomainPage() {
  return (
    <ContentLayout title="New Domain">
      <BreadCrumbs list={breadcrumbs} />
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Add new Domain</CardTitle>
          <CardDescription>
            This domain will be added to your organization
          </CardDescription>
          <CardContent>
            <NewDomainForm />
          </CardContent>
        </CardHeader>
      </Card>
    </ContentLayout>
  );
}

// TODO: Implement Conform form validation - (maybe TanStack form)
function NewDomainForm() {
  const user = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("userId", user.id);
    formData.append("status", "added");
    fetcher.submit(formData, { method: "POST" });
  };

  return (
    <fetcher.Form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label>Base Domain</Label>
        <Input name="domain" type="text" icon={<Compass />} />
      </div>
      <div>
        <Label>Organization</Label>
        <input
          readOnly
          hidden
          name="organization"
          value={String(user.active_org)}
        />
        <Input
          disabled
          name="or"
          type="text"
          value={String(user.active_org)}
          icon={<Building2 />}
        />
        <Label className="mt-1 inline-flex items-center text-xs text-muted-foreground">
          <Info className="mr-1 size-4 flex-none text-warning" />
          <span>
            To register new domain under <b>different</b> Organization, please
            change you current organization under your{" "}
            <Link
              to="/account"
              className="text-primary underline underline-offset-1"
            >
              account page
            </Link>
          </span>
        </Label>
        {fetcher.data && <pre>{JSON.stringify(fetcher.data, null, 2)}</pre>}
      </div>
      <Button>
        <FilePlus2 className="mr-2 size-4" /> Add Domain
      </Button>
    </fetcher.Form>
  );
}
