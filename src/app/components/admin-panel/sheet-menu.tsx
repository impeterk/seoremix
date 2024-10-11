import { Link } from "@remix-run/react";

import { MenuIcon, Radar } from "lucide-react";
import { Menu } from "src/app/components/admin-panel/menu";
import { Button } from "src/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "src/app/components/ui/sheet";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex h-full w-[80vw] flex-col px-3 sm:w-72"
        side="left"
      >
        <SheetHeader>
          <Button
            className="flex items-center justify-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link to="/dashboard" className="flex items-center gap-2">
              <Radar className="mr-1 h-6 w-6" />
              <SheetTitle className="text-lg font-bold">SEO Sonar</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
