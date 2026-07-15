import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-bold text-[#00A693]"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Page not found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
          Let’s get you back on track.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-[#00A693] text-white font-medium hover:opacity-90 transition"
          >
            Go to Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-[#00A693] text-[#00A693] font-medium hover:bg-[#00A693] hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
