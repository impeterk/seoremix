import { Await, useRouteLoaderData } from "@remix-run/react";
import { Suspense } from "react";

import { type loader } from "../_app.account/route";

export const handle = {
  title: () => "Account",
};

export default function AccountPage() {
  const data = useRouteLoaderData<typeof loader>("routes/_app.account");
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data}>
        {({ user, orgData }) => (
          <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <pre>{JSON.stringify(orgData, null, 2)}</pre>
          </>
        )}
      </Await>
    </Suspense>
  );
}
