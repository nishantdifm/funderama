"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function deleteCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only suppress banner if user explicitly accepted
    const cookieConsent = getCookie("funderama_cookie_consent");

    if (cookieConsent !== "accepted") {
      // If not accepted, show banner after brief delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Permanent consent saved for 1 year
    setCookie("funderama_cookie_consent", "accepted", 365);
    try {
      localStorage.setItem("funderama_cookie_consent", "accepted");
    } catch (e) {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Decline only closes the banner for the current view/session without saving persistent consent.
    // On refresh or reopening in a new tab, it will ask again until accepted.
    deleteCookie("funderama_cookie_consent");
    try {
      localStorage.removeItem("funderama_cookie_consent");
    } catch (e) {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-[500px] animate-in fade-in slide-in-from-bottom-5 duration-300 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[570px]"
    >
      <div className="relative flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-[0_12px_40px_rgba(24,48,89,0.18)] sm:min-h-[215px] sm:p-7 sm:pt-8">
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f7ff] text-[#183059]">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-['Rubik',sans-serif] text-[16px] font-semibold text-[#183059] sm:text-[17px]">
              We value your privacy
            </h3>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#5d7788] sm:text-[14px]">
              We use cookies to improve your experience, analyze site traffic, and assist in our lending services. Read our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-[#183059] underline underline-offset-2 transition hover:text-[#00b0ff]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full rounded-[6px] border border-[#d6dee5] bg-transparent px-4 py-2.5 text-[13px] font-semibold text-[#5d7788] transition hover:bg-[#f8fafc] hover:text-[#183059] sm:w-auto"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="w-full rounded-[6px] bg-[#183059] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#22447d] active:scale-[0.99] sm:w-auto"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}
