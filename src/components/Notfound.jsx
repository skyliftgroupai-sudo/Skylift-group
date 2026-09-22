import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="slg-light flex min-h-[70vh] items-center justify-center px-6 py-24">
    <div className="mx-auto max-w-xl text-center">
      {/* "404" stays the h1 and "Page not found" stays the h2, as they were.
          A number is a poor h1 and this would read better the other way round,
          but changing it is a content decision, not a visual one, and this
          redesign does not make those on its own. */}
      <h1 className="font-display text-[5rem] font-extrabold leading-none text-[#26A6AD] sm:text-[7rem]">
        404
      </h1>
      <h2 className="mt-4 text-[1.5rem] font-extrabold text-[#142A47] sm:text-[1.875rem]">
        Page not found
      </h2>
      <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#475569]">
        The page you are looking for does not exist or has been moved. Let’s get
        you back on track.
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/" className="btn btn-primary w-full sm:w-auto">
          Go to Home
        </Link>
        <Link to="/contact" className="btn btn-ghost-light w-full sm:w-auto">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
