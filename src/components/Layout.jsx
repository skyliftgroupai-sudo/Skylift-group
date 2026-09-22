import { Header } from "./Header";
import { Footer } from "./Footer";
import MobileCta from "./MobileCta";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
};
