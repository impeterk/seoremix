import { Form, useNavigation } from "@remix-run/react";

import { ReloadIcon } from "@radix-ui/react-icons";
import { KeySquare, LogIn, Mail } from "lucide-react";
import { Button } from "src/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/app/components/ui/card";
import { Input } from "src/app/components/ui/input";
import { Label } from "src/app/components/ui/label";

export function SingInForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/auth/sign-in";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Log in with your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <Form className="space-y-2" method="post">
          <div className="w-full">
            <Label htmlFor="email">E-mail</Label>
            <Input
              name="email"
              type="text"
              icon={<Mail />}
              placeholder="email@example.com"
            />
          </div>
          <div className="w-full pb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              icon={<KeySquare />}
              placeholder="********"
            />
          </div>
          <Button
            formAction="/auth/sign-in"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <LogIn className="mr-2 size-4" />
            )}
            Log In
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
