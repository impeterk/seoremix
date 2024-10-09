import type { MetaFunction } from "@remix-run/node";
import { Link, useRouteLoaderData } from "@remix-run/react";

import { BarChart, Search, Zap } from "lucide-react";

import { Button } from "~/components/ui/button";

import { SingInForm } from "../_landing.auth._index/sign-in-form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const user = useRouteLoaderData("routes/_landing");
  return (
    <main className="flex-1">
      <section className="w-full bg-gradient-to-b from-indigo-50 to-white py-12 dark:from-indigo-950 dark:to-black md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Dive Deep into Your SEO Performance
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  SEO Sonar sends out powerful signals to detect and analyze
                  your website's SEO health, helping you surface hidden
                  opportunities and navigate to the top of search results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button className="border border-primary">
                    Start Scanning
                  </Button>
                </Link>
                <Link to="#">
                  <Button variant={"outline"}>Learn More</Button>
                </Link>
              </div>
            </div>
            <SingInForm />
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
