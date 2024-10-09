import { Link } from "@remix-run/react";

import type { User } from "@supabase/supabase-js";
import { Radar } from "lucide-react";

import ThemeSwitch from "~/components/theme-switch";
import { Button } from "~/components/ui/button";

export const Header = ({ user }: { user: User | null }) => {
  return (
    <header className="bg-indigo-50/50 text-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl font-semibold"
        >
          <Radar className="text-primary" />
          SEO Sonar
        </Link>
        <div className="flex items-center gap-6">
          <Button asChild variant={"default"}>
            <Link to={user ? "/dashboard" : "/auth"}>
              {user ? "Dashboard" : "Get Started"}
            </Link>
          </Button>
          {/* <DashboardGetStarted /> */}
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
