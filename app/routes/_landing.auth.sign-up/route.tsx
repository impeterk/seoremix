import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  json,
  redirect,
  useActionData,
  useLoaderData,
  useLocation,
} from "@remix-run/react";

import InviteForm from "./Invite-form";
import { RegisterForm } from "./register-form";
import { ValidateTokenForm } from "./validate-token-form";

export function loader({ request }: LoaderFunctionArgs) {
  let token = new URL(request.url).searchParams.get("token");

  if (token) return json({ token });

  return null;
}

export default function SingUpPage() {
  const loaderData = useLoaderData<typeof loader>();
  const location = useLocation();
  let state =
    new URLSearchParams(location.search).get("state") || "validate-token";
  const data = useActionData<any>();
  if (data?.state) {
    state = data.state;
  }
  return (
    <>
      {state === "validate-token" && (
        <ValidateTokenForm token={loaderData?.token} />
      )}
      {state === "register-user" && <RegisterForm />}
      {state === "no-token" && <InviteForm />}
    </>
  );
}

// TODO: Register User with action and navigate to /account to add display_name
export async function action({ request }: ActionFunctionArgs) {
  await new Promise((res) => setTimeout(res, 3000));
  let formData = await request.formData();
  let intent = String(formData.get("intent"));
  let token = String(formData.get("token"));
  if (!intent) {
    console.error("🔴 missing intent");
    throw new Error("Something went wrong");
  }

  switch (intent) {
    case "validate-token":
      // TODO: Logic for validating token and returning user
      return {
        token_valid: "valid",
        token,
        email: "user@email.com",
        org: "My_Org",
        state: "register-user",
      };
    case "register-user":
      // TODO: Create new user in DB
      throw redirect("/auth", 302);
    default:
      // TODO: Handle error case
      return { error: "Something went wrong" };
  }

  /* TODO: Validate token on registration
         Create new user in database
         FIXME: Handle errors */
}
