import { Form, Link } from "@remix-run/react";

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

export default function SingUpPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <Form className="grid gap-4">
          <div className="">
            <Label>Invite Token</Label>
            <Input
              name="token"
              placeholder="your invite token"
              type="text"
              required
            />
          </div>
          <Button type="submit">Verify Token</Button>
        </Form>
      </CardContent>
      <CardFooter>
        <Form className="w-full" method="GET">
          <input hidden value="true" name="no-token" />
          <Button variant={"secondary"} className="w-full">
            I do not have token
          </Button>
        </Form>
      </CardFooter>
    </Card>
  );
}
