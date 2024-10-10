import { serve } from "@hono/node-server";
import * as build from "@remix-run/dev/server-build";
import { Hono } from "hono";
import { remix } from "remix-hono/handler";

const server = new Hono();

server.all(
  "*",
  remix({
    build,
    getLoadContext(c) {
      return c.env;
    },
  })
);

export default serve(server);
