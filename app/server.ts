// app/server.ts
import { createHonoServer } from "react-router-hono-server/node";

export const server = await createHonoServer({
  port: 3000,
});
