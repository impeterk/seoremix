import { Form, useActionData, useNavigation } from "@remix-run/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Building2,
  IdCard,
  KeySquare,
  Mail,
  RectangleEllipsis,
} from "lucide-react";

export function RegisterForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const data = useActionData<any>();
  if (!data?.token) {
    throw new Error("Missing valid token");
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Register User</CardTitle>
          <CardDescription>{data.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form className="grid gap-4" method="POST">
            <input hidden name="intent" readOnly value="register-user" />
            <div>
              <Label>Token</Label>
              <Input
                name="token"
                placeholder="your invite token"
                type="text"
                readOnly
                value={data.token}
                required
                disabled
                className="disabled:cursor-default"
                icon={<RectangleEllipsis />}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                placeholder="my-email@email.com"
                readOnly
                disabled
                required
                value={data.email}
                type="email"
                className="disabled:cursor-default"
                icon={<Mail />}
              />
            </div>
            <div>
              <Label>Organization</Label>
              <Input
                name="org"
                readOnly
                disabled
                value={data.org}
                type="text"
                required
                className="disabled:cursor-default"
                icon={<Building2 />}
              />
            </div>
            <div>
              <Label>Display Name</Label>
              <Input
                name="display_name"
                type="text"
                icon={<IdCard />}
                minLength={5}
                maxLength={40}
                required
                placeholder="Your Display Name"
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                required
                placeholder="*******"
                name="password"
                type="password"
                icon={<KeySquare />}
              />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input
                required
                placeholder="*******"
                name="confirm-password"
                type="password"
                icon={<KeySquare />}
              />
            </div>
            <Button disabled={isSubmitting}>Register</Button>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
