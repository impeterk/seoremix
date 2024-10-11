import type { LucideIcon } from "lucide-react";
import {
  Bookmark,
  Building2,
  FilePlus2,
  LayoutGrid,
  Settings,
  Tag,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  submenus?: Submenu[];
  end?: boolean;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/new-domain",
          label: "New Domain",
          icon: FilePlus2,
        },
        {
          href: "/categories",
          label: "Categories",
          icon: Bookmark,
        },
        {
          href: "/tags",
          label: "Tags",
          icon: Tag,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/account/org",
          label: "Organization",
          icon: Building2,
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings,
          end: true,
        },
      ],
    },
  ];
}
