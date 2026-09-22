// Static-render entry. scripts/render-ssr.mjs imports this to turn every route
// into real HTML before deploy, so crawlers that do not run JavaScript — which
// is most AI/answer-engine crawlers, and Google on its first pass — receive the
// page's actual copy instead of an empty <div id="root">.
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const RouteFallback = () => <div className="min-h-screen bg-[#0B1220]" />;

// No ScrollToTop here: it only touches window in an effect, which never runs
// during a static render, and leaving it out keeps the server tree minimal.
export function ServerApp({ url }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <Suspense fallback={<RouteFallback />}>
          <AppRoutes />
        </Suspense>
      </StaticRouter>
    </QueryClientProvider>
  );
}
