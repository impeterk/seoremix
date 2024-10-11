import { Link } from "@remix-run/react";

import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronRight, Globe } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import type { Domain } from "./domains-table";

export const columns: ColumnDef<Domain>[] = [
  {
    accessorKey: "favicon",
    enableResizing: false,
    size: 0,
    header: () => null,
    cell: ({ row }) => {
      const favicon = row.original?.favicon;
      return (
        <div className="flex items-center justify-center">
          {favicon ? (
            <img
              src={favicon}
              className="size-10 rounded-lg border"
              alt={`${row.original.base_url} favicon`}
            />
          ) : (
            <Globe />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "base_url",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Domain
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("base_url")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const domain = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(domain.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    id: "link",
    cell: ({ row }) => {
      const link = row.original.id;
      return (
        <div className="flex justify-center">
          <Button asChild size={"sm"} className="">
            <Link to={`/dashboard/${link}`}>
              <ChevronRight className="mr-1 size-4" />
              Inspect
            </Link>
          </Button>
        </div>
      );
    },
  },
];
