import { createHonoServer } from "react-router-hono-server/node";

export const app = await createHonoServer({
  port: 3030,
});
