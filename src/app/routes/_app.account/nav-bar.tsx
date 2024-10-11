import { NavLink } from "@remix-run/react";

import { Building2, User2 } from "lucide-react";
import { Button } from "src/app/components/ui/button";
import { cn } from "src/app/lib/utils";

export default function NavBar() {
  return (
    <nav className="inline-flex h-9 items-center justify-start gap-1 rounded-lg bg-secondary p-1 transition-all">
      <NavLink to="/account" end>
        {({ isActive }) => (
          <Button
            className={cn(
              "h-7 px-3 py-1 text-sm font-medium ring-offset-background transition-all",
              isActive
                ? "bg-secondary-foreground text-background hover:bg-secondary-foreground hover:text-background"
                : ""
            )}
            variant={"ghost"}
            size={"sm"}
          >
            <User2 className="mr-1 size-4" />
            Account
          </Button>
        )}
      </NavLink>

      <NavLink to="/account/org" end>
        {({ isActive }) => (
          <Button
            className={cn(
              "h-7 px-3 py-1 text-sm font-medium ring-offset-background transition-all",
              isActive
                ? "bg-secondary-foreground text-background hover:bg-secondary-foreground hover:text-background"
                : ""
            )}
            variant={"ghost"}
            size={"sm"}
          >
            <Building2 className="mr-1 size-4" />
            Organization
          </Button>
        )}
      </NavLink>
    </nav>
  );
}
