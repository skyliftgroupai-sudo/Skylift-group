// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: { historyApiFallback: true }
// })



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
  },
  // Bundle dependencies into the server build instead of leaving them as bare
  // Node imports. Several of them (react-slick, slick-carousel) are CommonJS,
  // and the ESM default-interop Node applies to those hands back a module
  // namespace object where a component is expected, which crashes the static
  // render and silently falls back to an empty page.
  ssr: {
    // React itself must stay external so the SSR bundle shares one copy with
    // react-dom/static; bundling it produces two Reacts and "invalid hook call".
    external: ["react", "react-dom", "react/jsx-runtime"],
    noExternal: true,
  },
  server: {
    historyApiFallback: true,
  },
});
