import { Form, Link, useNavigation } from "@remix-run/react";

import { ReloadIcon } from "@radix-ui/react-icons";
import { KeySquare, LogIn, Mail } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function SingInPage() {
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
      <CardFooter className="flex-col justify-center gap-2">
        <div className="flex w-full items-center gap-2">
          <div className="h-[1.5px] w-full bg-border"></div>
          <p className="shrink-0 text-sm">or</p>
          <div className="grow-1 h-[1.5px] w-full bg-border"></div>
        </div>
        <Button asChild variant={"link"}>
          <Link to="/auth/sign-up">Start with New Account?</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
