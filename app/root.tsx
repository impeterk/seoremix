import type {
  ErrorResponse,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import RemixTopLoader from "remix-toploader";

import { themeSessionResolver } from "./sessions.server";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "SEO Sonar",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "48x48",
    },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export function BaseLayout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <RemixTopLoader color="hsl(var(--primary))" showSpinner={false} />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
// Theme provider for whole app
export function Layout() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <BaseLayout>
        <App />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const routeError = useRouteError();

  if (isRouteErrorResponse(routeError)) {
    const response = routeError as ErrorResponse;
    return (
      <>
        <h1>{response.status}</h1>
        <p>{response.statusText}</p>
      </>
    );
  }
  const error = routeError as Error;
  return (
    <>
      <h1>ERROR!</h1>
      <p>{error.message}</p>
      <pre>{error.stack}</pre>
    </>
  );
}
