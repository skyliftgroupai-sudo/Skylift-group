// Kept as a stable import path for the build scripts. The actual data lives in
// src/lib/seo-config.js so the React pages and the prerenderer can never drift
// apart — see the comment at the top of that file.

export { routeSeo as staticRoutes, SITE_URL, DEFAULT_OG_IMAGE } from "../src/lib/seo-config.js";
