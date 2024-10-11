import { NavLink } from "@remix-run/react";

import { Ellipsis, LogOut } from "lucide-react";
import { CollapseMenuButton } from "src/app/components/admin-panel/collapse-menu-button";
import { Button } from "src/app/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/app/components/ui/tooltip";
import { getMenuList } from "src/app/lib/menu-list";
import { cn } from "src/app/lib/utils";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const menuList = getMenuList();

  return (
    <nav className="h-full w-full">
      <ul className="flex min-h-[calc(100vh-48px-36px-16px-32px)] flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
            {(isOpen && groupLabel) || isOpen === undefined ? (
              <p className="max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground">
                {groupLabel}
              </p>
            ) : !isOpen && isOpen !== undefined && groupLabel ? (
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger className="w-full">
                    <div className="flex w-full items-center justify-center">
                      <Ellipsis className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{groupLabel}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <p className="pb-2"></p>
            )}
            {menus.map(
              (
                {
                  href,
                  label,
                  icon: Icon,
                  active = false,
                  submenus,
                  end = false,
                },
                index
              ) =>
                !submenus || submenus.length === 0 ? (
                  <div className="w-full" key={index}>
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <NavLink to={href} end={end}>
                            {({ isActive }) => (
                              <Button
                                variant={isActive ? "secondary" : "ghost"}
                                className="mb-1 h-10 w-full justify-start"
                              >
                                <span
                                  className={cn(isOpen === false ? "" : "mr-4")}
                                >
                                  <Icon size={18} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Button>
                            )}
                          </NavLink>
                        </TooltipTrigger>
                        {isOpen === false && (
                          <TooltipContent side="right">{label}</TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  </div>
                )
            )}
          </li>
        ))}
        <li className="flex w-full grow items-end">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <form className="w-full">
                  <Button
                    variant="outline"
                    className="mt-5 h-10 w-full justify-center"
                    formAction="/auth/sign-out"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        isOpen === false ? "hidden opacity-0" : "opacity-100"
                      )}
                    >
                      Sign out
                    </p>
                  </Button>
                </form>
              </TooltipTrigger>
              {isOpen === false && (
                <TooltipContent side="right">Sign out</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  );
}
