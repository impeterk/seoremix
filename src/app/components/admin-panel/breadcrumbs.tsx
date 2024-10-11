import { Link } from "@remix-run/react";

import { Fragment } from "react/jsx-runtime";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export type Entry = {
  path?: string;
  name: string;
  active: boolean;
};

export default function BreadCrumbs({ list }: { list: Entry[] }) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {list.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {item.active ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link relative="path" to={item.path!}>
                    {item.name}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            <BreadcrumbSeparator
              className={index == list.length - 1 ? "hidden" : ""}
            />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
