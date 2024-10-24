import { Form, Link, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";

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
import { ReloadIcon } from "@radix-ui/react-icons";
import { RectangleEllipsis } from "lucide-react";

export function ValidateTokenForm({ token }: { token?: string }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const submit = useSubmit();
  // submits form when token is provided from URL
  const formRef = useRef(null);
  useEffect(() => {
    if (token) {
      submit(formRef.current);
    }
  }, [token]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Validate Token</CardTitle>
        </CardHeader>
        <CardContent>
          <Form className="grid gap-4" method="POST" ref={formRef}>
            <input hidden name="intent" readOnly value="validate-token" />
            <div>
              <Label>Token</Label>
              <Input
                name="token"
                placeholder="your invite token"
                type="text"
                defaultValue={token}
                required
                icon={<RectangleEllipsis />}
              />
            </div>
            <Button disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Validating Token
                </>
              ) : (
                <>Validate</>
              )}
            </Button>
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
