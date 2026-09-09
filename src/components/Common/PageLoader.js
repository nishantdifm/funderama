"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PageLoaderWatcher({ onTrigger }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchStr = searchParams ? searchParams.toString() : "";

  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    onTrigger();
  }, [pathname, searchStr]);

  return null;
}

export default function PageLoader() {
  const isFirstMount = useRef(true);

  // Smoothly fade out the loader
  const hideLoader = () => {
    const el = document.getElementById("load");
    if (el) {
      el.style.transition = "opacity 0.35s ease-out, visibility 0.35s ease-out";
      el.style.opacity = "0";
      el.style.visibility = "hidden";
      el.style.pointerEvents = "none";
    }
  };

  // Instantly show the loader (no fade-in delay, 100% opaque cover)
  const showLoaderInstant = () => {
    const el = document.getElementById("load");
    if (el) {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.pointerEvents = "auto";
    }
  };

  const handleRouteOrSearchChange = () => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    const delay = isFirstMount.current ? 350 : 380;
    isFirstMount.current = false;

    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && !window.location.hash) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      hideLoader();
    }, delay);

    return () => clearTimeout(timer);
  };

  // Capture link clicks and form submits before React navigation
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Skip non-navigating links, new tabs, protocols, modifier clicks
      if (
        href.startsWith("#") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("javascript:") ||
        target.getAttribute("target") === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // Check if target is a different path or query (e.g. exiting search ?s= back to clean home /)
      const currentPath = window.location.pathname;
      const currentFull = window.location.pathname + window.location.search;
      const targetPath = href.split("?")[0].split("#")[0];
      const targetFull = href.split("#")[0];

      if ((targetPath && targetPath !== currentPath) || (targetFull !== currentFull && Boolean(window.location.search))) {
        // INSTANTLY cover screen in pure white before navigation swaps content
        showLoaderInstant();
        if (!href.includes("#")) {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    };

    const handleFormSubmit = (e) => {
      const form = e.target.closest("form");
      if (form && (form.getAttribute("role") === "search" || form.querySelector("input[name='s']"))) {
        showLoaderInstant();
      }
    };

    // Capture phase guarantees this runs BEFORE React/Next.js handles the click/submit
    document.addEventListener("click", handleAnchorClick, { capture: true });
    document.addEventListener("submit", handleFormSubmit, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      document.removeEventListener("submit", handleFormSubmit, { capture: true });
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PageLoaderWatcher onTrigger={handleRouteOrSearchChange} />
      </Suspense>
      <style jsx global>{`
        @keyframes the7-spinner-fade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.15;
          }
        }
        .the7-spinner-spoke {
          animation: the7-spinner-fade 1s cubic-bezier(1, 1, 1, 1) infinite;
          x: 46.5px;
          y: 40px;
          width: 7px;
          height: 20px;
          fill: #183059;
          opacity: 0.15;
        }
        .the7-spoke-1 { animation-delay: 0s; }
        .the7-spoke-2 { animation-delay: 0.083s; }
        .the7-spoke-3 { animation-delay: 0.166s; }
        .the7-spoke-4 { animation-delay: 0.25s; }
        .the7-spoke-5 { animation-delay: 0.333s; }
        .the7-spoke-6 { animation-delay: 0.416s; }
        .the7-spoke-7 { animation-delay: 0.5s; }
        .the7-spoke-8 { animation-delay: 0.583s; }
        .the7-spoke-9 { animation-delay: 0.666s; }
        .the7-spoke-10 { animation-delay: 0.75s; }
        .the7-spoke-11 { animation-delay: 0.833s; }
        .the7-spoke-12 { animation-delay: 0.916s; }
      `}</style>

      {/* Starts 100% opaque white by default on initial render */}
      <div
        id="load"
        style={{
          opacity: 1,
          visibility: "visible",
          pointerEvents: "auto",
        }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
      >
        <div className="flex h-full w-full items-center justify-center">
          <svg
            width="75px"
            height="75px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="block"
          >
            <rect className="the7-spinner-spoke the7-spoke-1" rx="5" ry="5" transform="rotate(0 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-2" rx="5" ry="5" transform="rotate(30 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-3" rx="5" ry="5" transform="rotate(60 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-4" rx="5" ry="5" transform="rotate(90 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-5" rx="5" ry="5" transform="rotate(120 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-6" rx="5" ry="5" transform="rotate(150 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-7" rx="5" ry="5" transform="rotate(180 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-8" rx="5" ry="5" transform="rotate(210 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-9" rx="5" ry="5" transform="rotate(240 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-10" rx="5" ry="5" transform="rotate(270 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-11" rx="5" ry="5" transform="rotate(300 50 50) translate(0 -30)" />
            <rect className="the7-spinner-spoke the7-spoke-12" rx="5" ry="5" transform="rotate(330 50 50) translate(0 -30)" />
          </svg>
        </div>
      </div>
    </>
  );
}
