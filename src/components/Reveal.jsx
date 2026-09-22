import { useEffect, useRef } from "react";

/**
 * Scroll fade-in that is safe for crawlers and for readers with JavaScript off.
 *
 * The element and its children are always rendered — nothing is mounted
 * conditionally, so the prerendered HTML contains the full text. The hidden
 * start state lives entirely in CSS behind `html.js`, which the inline script
 * in index.html sets before first paint. If that script never runs (a
 * non-JS crawler, JS disabled), the content simply renders visible.
 *
 * Only opacity and transform animate, so this can never cause layout shift,
 * and prefers-reduced-motion switches it off in the stylesheet.
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers): show it and move on.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
