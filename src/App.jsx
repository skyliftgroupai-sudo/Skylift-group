import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/Scrolltotop";

import { AppRoutes } from "./routes";

// Split out so the maintenance screen never ships in the main bundle while it is off.
const Maintenance = lazy(() => import("./pages/Maintenance"));

/// FOR Service Unavailable ///
const MAINTENANCE_MODE = false;

// Matches the page background so a chunk load never flashes white.
const RouteFallback = () => <div className="min-h-screen bg-[#0B1220]" />;

const App = () => (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        {MAINTENANCE_MODE ? <Maintenance /> : <AppRoutes />}
      </Suspense>
    </BrowserRouter>
);

export default App;
