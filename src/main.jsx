import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// The slick-carousel stylesheets used to load here for every page on the site.
// The only two components that ever used them, the hero carousel and the
// testimonial slider, are no longer rendered anywhere, so this was dead CSS in
// the critical path of all 51 pages.


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
