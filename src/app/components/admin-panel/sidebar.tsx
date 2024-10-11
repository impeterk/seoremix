import { Link } from "@remix-run/react";

import { Radar } from "lucide-react";
import { Menu } from "src/app/components/admin-panel/menu";
import { Button } from "src/app/components/ui/button";
import { cn } from "src/app/lib/utils";

export function Sidebar() {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0",
        "w-72"
      )}
    >
      <div className="grid h-14 place-items-center">
        <Button variant="link" asChild>
          <Link to="/dashboard" className="flex items-center gap-2">
            <Radar className="mr-1 h-6 w-6" />
            <h1 className="text-lg font-bold">SEO Sonar</h1>
          </Link>
        </Button>
      </div>
      <div className="relative flex h-full max-h-[calc(100%-3.5rem)] flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        <Menu isOpen={true} />
      </div>
    </aside>
  );
}
