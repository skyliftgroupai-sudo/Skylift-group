import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ConsentBanner from "./ConsentBanner";
import { pageView, installLinkTracking, installScrollDepth } from "../lib/analytics";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    installLinkTracking();
  }, []);

  useEffect(() => {
    // GA4 is configured with send_page_view: false, so this is the only source
    // of page_view. The timeout lets useSeo apply the route's <title> first,
    // otherwise every hit would carry the previous page's title.
    const t = setTimeout(() => pageView(pathname), 0);
    installScrollDepth(pathname, pathname.startsWith("/blog/") && !pathname.startsWith("/blog/category/") && !pathname.startsWith("/blog/page/"));
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
};
