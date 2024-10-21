import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { KeySquare, Mail, RectangleEllipsis } from "lucide-react";
import { Label } from "recharts";

export function RegisterForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const data = useActionData();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Register User</CardTitle>
        </CardHeader>
        <CardContent>
          <Form className="grid gap-4" method="POST">
            <div>
              <Label>Token</Label>
              <Input
                name="token"
                placeholder="your invite token"
                type="text"
                required
                icon={<RectangleEllipsis />}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                name="email"
                placeholder="my-email@email.com"
                type="email"
                icon={<Mail />}
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
              <Label>Confirm Passoword</Label>
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
        <CardFooter>
          <Button asChild variant={"secondary"} className="w-full">
            <Link to={{ search: "?state=no-token" }}>I do not have token</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
