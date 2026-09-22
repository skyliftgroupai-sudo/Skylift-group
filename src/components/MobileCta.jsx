import { Link, useLocation } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

/**
 * Sticky "Book a Call" bar, phones only.
 *
 * Hidden on /book and /contact, where it would sit on top of the form it is
 * trying to send people to. It is inside the normal flow of the footer padding
 * rather than overlapping content: <body> gets bottom padding on small screens
 * from the spacer below, so the bar never covers the last line of a page and
 * never shifts layout after paint.
 */
export default function MobileCta() {
  const { pathname } = useLocation();
  if (pathname === "/book" || pathname === "/contact") return null;

  return (
    <>
      {/* Reserves the bar's height so nothing ends up underneath it. */}
      <div className="h-[72px] lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B1220]/95 px-4 py-3 backdrop-blur-lg lg:hidden">
        <Link to="/book" className="btn btn-primary w-full">
          <CalendarCheck className="h-[18px] w-[18px]" aria-hidden="true" />
          Book a Free Call
        </Link>
      </div>
    </>
  );
}
