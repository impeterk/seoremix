import { SheetMenu } from "~/components/admin-panel/sheet-menu";
import { UserNav } from "~/components/admin-panel/user-nav";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <SheetMenu />
          <div className="hidden lg:block">
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
}
