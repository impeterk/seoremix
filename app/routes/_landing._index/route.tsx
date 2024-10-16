import { Link, useRouteLoaderData } from "@remix-run/react";

import { BarChart, Search, Zap } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function Index() {
  const user = useRouteLoaderData("routes/_landing");
  return (
    <main className="flex-1">
      <section className="w-full bg-gradient-to-b from-indigo-50 to-white py-12 dark:from-indigo-950 dark:to-black md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid place-items-center">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="grid place-items-center gap-6 text-pretty">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Dive Deep
                  <span className="ml-4 text-primary">
                    <ScubaIcon />
                  </span>
                  <br />
                  into Your SEO Performance
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  SEO Sonar sends out powerful signals to detect and analyze
                  your website's SEO health, helping you surface hidden
                  opportunities and navigate to the top of search results.
                </p>
              </div>
              <div className="flex flex-col gap-6 min-[400px]:flex-row">
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button className="border border-primary">
                    Start Scanning
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant={"outline"}>Learn More</Button>
                </Link>
              </div>
            </div>
            {/* <SingInForm /> */}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 py-12 dark:bg-gray-950 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose SEO Sonar?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Search className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Deep SEO Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Uncover hidden SEO issues and opportunities with our advanced
                scanning technology.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <BarChart className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Track your SEO performance with up-to-the-minute data and
                actionable insights.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Competitive Edge</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stay ahead of the competition with cutting-edge SEO strategies
                and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ScubaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="inline"
    >
      <path
        fill="currentColor"
        d="m5.25 18l.775-4.45q.075-.6.475-1.062t1.025-.613L17 9l1.925-3.85q.025-.05.2-.275L21.5 2.5q.2-.2.488-.213t.537.238q.2.2.225.488t-.175.487L20.5 5.9l-1.4 4.275q-.05.15-.15.288t-.225.237L14 14l-5.85 1.85l-1.1 3q-.025.075-.063.15t-.087.125L4.6 22.2q-.25.35-.65.4t-.75-.2t-.4-.65T3 21zM3 15q-.825 0-1.412-.587T1 13t.588-1.412T3 11t1.413.588T5 13t-.587 1.413T3 15m5.9-4.9q-.6.175-1.137-.137T7.05 9.05t.138-1.15t.912-.7l3.575-.95q.4-.125.75.1t.475.625l.275.95q.125.4-.1.75t-.625.475z"
      ></path>
    </svg>
  );
}
