// vite.config.ts
import { vitePlugin as remix } from "file:///C:/Users/storm/Documents/Code/seoremix/node_modules/.pnpm/@remix-run+dev@2.13.1_@remix-run+react@2.13.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_a3a7xseibevfm3j5pt5bhkfygu/node_modules/@remix-run/dev/dist/index.js";
import { devServer } from "file:///C:/Users/storm/Documents/Code/seoremix/node_modules/.pnpm/react-router-hono-server@0.2.0_@remix-run+node@2.13.1_typescript@5.6.3__hono@4.6.5_remix-hono_6wnp26nlkkotwnxqljjion6g7a/node_modules/react-router-hono-server/dist/dev.mjs";
import { defineConfig } from "file:///C:/Users/storm/Documents/Code/seoremix/node_modules/.pnpm/vite@5.4.9_@types+node@22.7.5/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/storm/Documents/Code/seoremix/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.6.3_vite@5.4.9_@types+node@22.7.5_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    target: "esnext"
  },
  plugins: [
    devServer(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzdG9ybVxcXFxEb2N1bWVudHNcXFxcQ29kZVxcXFxzZW9yZW1peFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc3Rvcm1cXFxcRG9jdW1lbnRzXFxcXENvZGVcXFxcc2VvcmVtaXhcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3N0b3JtL0RvY3VtZW50cy9Db2RlL3Nlb3JlbWl4L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xyXG5cclxuaW1wb3J0IHsgZGV2U2VydmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ob25vLXNlcnZlci9kZXZcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogXCJlc25leHRcIixcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIGRldlNlcnZlcigpLFxyXG4gICAgcmVtaXgoe1xyXG4gICAgICBmdXR1cmU6IHtcclxuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcclxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcclxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsU0FBUyxjQUFjLGFBQWE7QUFFcFYsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
