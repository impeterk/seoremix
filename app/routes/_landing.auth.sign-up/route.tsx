import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useFetcher, useLocation } from "@remix-run/react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AtSign, Info } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import InviteForm from "./InviteForm";

export default function SingUpPage() {
  const location = useLocation();
  const fetcher = useFetcher();
  const token = new URLSearchParams(location.search).get("token") || true;
  return token !== "false" ? (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <fetcher.Form
          className="grid gap-4"
          method="POST"
          action="/auth/sign-up?intent=verify-token"
        >
          <div className="">
            <Label>Invite Token</Label>
            <Input
              name="token"
              placeholder="your invite token"
              type="text"
              required
            />
          </div>
          <Button disabled={fetcher.state !== "idle"}>Verify Token</Button>
        </fetcher.Form>
      </CardContent>
      <CardFooter>
        <Button asChild variant={"secondary"} className="w-full">
          <Link to={{ search: "?token=false" }}>I do not have token</Link>
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <InviteForm />
  );
}

export async function action({ request }: ActionFunctionArgs) {
  console.log({ request });
  const intent = new URL(request.url).searchParams.get("intent");
  console.log({ intent });
  return null;
}
