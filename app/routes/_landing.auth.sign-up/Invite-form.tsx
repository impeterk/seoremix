import { Link, useFetcher } from "@remix-run/react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Mail } from "lucide-react";

export default function InviteForm() {
  const fetcher = useFetcher<any>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Queue</CardTitle>
        <Alert variant={"default"}>
          <Info className="size-4" />
          <AlertDescription className="text-xs font-light">
            Our product is currently <b>invite only</b>. You can enter your
            e-mail address to get a chance to get invited. You will also receive
            ocasional (once a month) newsletter about new features
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent>
        <small>{fetcher.data?.data.message}</small>
        <fetcher.Form className="grid gap-4" action="/invite" method="POST">
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" required icon={<Mail />} />
          </div>
          <Button disabled={fetcher.state !== "idle"}>
            Sign Up for Registration
          </Button>
        </fetcher.Form>
      </CardContent>
      <CardFooter className="flex-col justify-center gap-2">
        <Link to={{ search: "" }}>
          <small> I have my token</small>
        </Link>
      </CardFooter>
    </Card>
  );
}
