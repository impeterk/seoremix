import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, useActionData, useLocation } from "@remix-run/react";

import InviteForm from "./InviteForm";
import { RegisterForm } from "./register-form";

export function loader({ request }: LoaderFunctionArgs) {
  let token = new URL(request.url).searchParams.get("token");
  if (token) return token;

  return null;
}

export default function SingUpPage() {
  const location = useLocation();
  let state = new URLSearchParams(location.search).get("state") || "register";
  const data = useActionData();
  return (
    <>
      {state === "register" && <RegisterForm />}
      {state === "no-token" && <InviteForm />}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

// TODO: Register User with action and navigate to /account to add display_name
export async function action({ request }: ActionFunctionArgs) {
  /* TODO: Validate token on registration
         Create new user in database
         FIXME: Handle errors */
  return json({
    token: "valid",
    email: "user@email.com",
    org: "My_Org",
    state: "register-user",
  });
}
