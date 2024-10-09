import type { ActionFunctionArgs } from "@remix-run/node";

import { createThemeAction } from "remix-themes";

import { themeSessionResolver } from "../sessions.server";

export const action = async (args: ActionFunctionArgs) => {
  return createThemeAction(themeSessionResolver)(args);
};
