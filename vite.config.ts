import { vitePlugin as remix } from "@remix-run/dev";

import { devServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    devServer(),
    remix({
      appDirectory: "src/app",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
