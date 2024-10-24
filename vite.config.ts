import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";

import { devServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals({ nativeFetch: true });

export default defineConfig({
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
  plugins: [
    devServer(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
      },
    }),
    tsconfigPaths(),
  ],
});
