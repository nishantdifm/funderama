"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // check initial position
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#183059] text-white overflow-hidden">
      {/* Subtle Background Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply"
        style={{ backgroundImage: "url(/images/blob-scene-wide-simple.svg)" }}
      />

      <div className="relative mx-auto max-w-[1304px] px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[40%_25%_35%] lg:gap-8">
          {/* Column 1: Logo & Social Icons */}
          <div className="space-y-8">
            <a href="/" className="inline-block">
              <img
                src="/images/fundrama-logo-white.png"
                alt="Funderama Logo"
                className="h-auto w-[220px] object-contain sm:w-[240px]"
              />
            </a>

            {/* Social Icons (White rounded boxes) */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/funderamallc"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white text-[#183059] transition hover:bg-[#eed900] hover:text-[#183059]"
              >
                <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/funderama"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white text-[#183059] transition hover:bg-[#eed900] hover:text-[#183059]"
              >
                <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/funderama_llc/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white text-[#183059] transition hover:bg-[#eed900] hover:text-[#183059]"
              >
                <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/funderama-llc/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white text-[#183059] transition hover:bg-[#eed900] hover:text-[#183059]"
              >
                <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful links */}
          <div>
            <h4 className="mb-6 font-['Rubik',sans-serif] text-[18px] font-semibold tracking-wide text-white sm:text-[20px]">
              Useful links
            </h4>
            <ul className="space-y-3.5 p-0 m-0 list-none text-[15px]">
              <li>
                <a
                  href="/"
                  className="font-medium text-[#eed900] no-underline transition hover:text-[#fff055]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#financing"
                  className="text-[#b4c6db] no-underline transition hover:text-white"
                >
                  Quick Financing
                </a>
              </li>
              <li>
                <a
                  href="#sba"
                  className="text-[#b4c6db] no-underline transition hover:text-white"
                >
                  SBA Loans
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-[#b4c6db] no-underline transition hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#b4c6db] no-underline transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h4 className="mb-6 font-['Rubik',sans-serif] text-[18px] font-semibold tracking-wide text-white sm:text-[20px]">
              Contact info
            </h4>
            <div className="space-y-5 text-[15px]">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#eed900]" />
                <div>
                  <a
                    href="tel:+18779912355"
                    className="font-semibold text-white no-underline transition hover:text-[#eed900]"
                  >
                    +1-877-991-2355
                  </a>
                  <p className="m-0 mt-0.5 text-xs text-[#8ea5be]">Customer Care</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#eed900]" />
                <div>
                  <a
                    href="mailto:contact@funderamallc.com"
                    className="text-white no-underline transition hover:text-[#eed900]"
                  >
                    contact@funderamallc.com
                  </a>
                  <p className="m-0 mt-0.5 text-xs text-[#8ea5be]">Information & support</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#eed900]" />
                <div>
                  <p className="m-0 font-medium leading-snug text-white">
                    19355 TURNBERRY WAY SUITE 27D AVENTURA, FLORIDA 33180
                  </p>
                  <p className="m-0 mt-0.5 text-xs text-[#8ea5be]">office location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="mt-14 mb-6 border-t border-[#29487d]/60" />

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#8ea5be] sm:flex-row sm:text-[13px]">
          <p className="m-0 text-center sm:text-left">
            FUNDERAMA LLC &copy; 2016 - 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-[#8ea5be] no-underline transition hover:text-white">
              Terms &amp; conditions
            </a>
            <a href="#contact" className="text-[#8ea5be] no-underline transition hover:text-white">
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#183059] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#eed900] hover:text-[#183059] active:scale-95 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}

