import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import type {
  MetaFunction} from "@remix-run/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import "@fontsource/geist-mono/latin.css";
import "@fontsource/geist-sans/latin.css";
import clsx from "clsx";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import TopLoader from "./components/ui/top-loader";
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
  ];
};
export function BaseLayout({ children }: { children: React.ReactNode }) {
  TopLoader();
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
