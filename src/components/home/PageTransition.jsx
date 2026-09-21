import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Small delay so the newly rendered route is actually in the DOM
    const timer = setTimeout(() => {
      const sections = root.querySelectorAll(
        "[data-reveal], .page-reveal"
      );

      if (!("IntersectionObserver" in window)) {
        sections.forEach((el) => {
          el.classList.add("is-visible");
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      // Store observer so cleanup can happen
      root._revealObserver = observer;
    }, 50);

    return () => {
      clearTimeout(timer);

      if (root._revealObserver) {
        root._revealObserver.disconnect();
        delete root._revealObserver;
      }
    };
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
}