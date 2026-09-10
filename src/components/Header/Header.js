"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X, Menu } from "lucide-react";
import globalInfo from "@/data/globalInfo";

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const s = searchParams?.get("s");
    if (s !== null && s !== undefined) {
      setQuery(s);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = document.getElementById("load");
    if (el) {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.pointerEvents = "auto";
    }
    router.push(`/search?s=${encodeURIComponent(query)}`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="hidden h-full w-[180px] items-center justify-between border-x border-[#dbe2e7] bg-white px-4 transition-all duration-300 focus-within:w-[300px] focus-within:bg-[#fafbfc] sm:flex"
    >
      <div className="relative flex flex-1 items-center pr-2">
        <input
          ref={inputRef}
          type="search"
          name="s"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search"
          className="w-full border-0 bg-transparent text-[13px] text-[#263238] outline-none placeholder:text-[#7991a5] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="mr-1 flex h-4 w-4 cursor-pointer items-center justify-center text-[#90a4ae] transition-colors hover:text-[#183059]"
            title="Clear"
            aria-label="Clear"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        title="Search"
        aria-label="Search"
        className="flex cursor-pointer items-center justify-center text-[#7791a7] transition-colors hover:text-[#183059]"
      >
        <svg
          className="w-[17px] fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="m16 16 4 4" />
        </svg>
      </button>
    </form>
  );
}

function Logo({ onClick }) {
  return (
    <Link
      className="flex h-[94px] w-[150px] cursor-pointer items-center sm:h-[120px] sm:w-[185px]"
      href="/"
      onClick={onClick}
      aria-label="Funderama home"
    >
      <img
        className="h-auto w-full object-contain"
        src="/images/fundrama-logo.png"
        alt="Funderama"
      />
    </Link>
  );
}

const navigation = [
  { label: "Home", href: "/" },
  { label: "Quick Financing", href: "/quick-financing" },
  { label: "SBA Loans", href: "/sba-loans" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [hasSearch, setHasSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setHasSearch(Boolean(typeof window !== "undefined" && window.location.search));
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleHomeClick = (e) => {
    // If currently on search results page (has ?s= query), smoothly navigate to clean "/"
    if (typeof window !== "undefined" && window.location.search) {
      e.preventDefault();
      router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/" || pathname === "/home" || pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden border-b border-[#dbe2e7] text-[13px] text-[#233c66] sm:block sm:h-[39px]">
        <div className="mx-auto flex h-full w-[calc(100%-30px)] max-w-[1304px] items-start justify-between sm:w-[calc(100%-48px)] sm:items-center">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-[30px]">
            <span>Customer Care : <a className="underline underline-offset-2" href={`tel:${globalInfo.phoneRaw}`}>{globalInfo.phone}</a></span>
            <span><b>Email:</b> <a className="underline underline-offset-2" href={`mailto:${globalInfo.emailApply}`}>{globalInfo.emailApply}</a></span>
          </div>
          <Suspense
            fallback={
              <div className="hidden h-full w-[180px] border-x border-[#dbe2e7] sm:block" />
            }
          >
            <SearchBar />
          </Suspense>
        </div>
      </div>
      <header className="sticky top-0 z-50 h-[94px] border-b border-[#e5e7eb] bg-white sm:h-[120px]">
        <div className="mx-auto flex h-full w-[calc(100%-30px)] max-w-[1304px] items-center justify-between sm:w-[calc(100%-48px)]">
          <Logo onClick={handleHomeClick} />

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex sm:items-center sm:gap-8" aria-label="Main navigation">
            {navigation.map(({ label, href }) => {
              const isHome = href === "/" && (pathname === "/" || pathname === "/home" || pathname === "") && !hasSearch;
              const isPageActive = !href.startsWith("#") && href !== "/" && (pathname === href || pathname.startsWith(href + "/"));
              const isActive = isHome || isPageActive;

              const className = `text-base font-semibold no-underline hover:text-[#eed900] transition-colors ${
                isActive ? "text-[#eed900]" : "text-[#293039]"
              }`;

              if (href.startsWith("#")) {
                return (
                  <a key={label} href={href} className={className}>
                    {label}
                  </a>
                );
              }

              if (href === "/") {
                return (
                  <Link key={label} href={href} onClick={handleHomeClick} className={className}>
                    {label}
                  </Link>
                );
              }

              return (
                <Link key={label} href={href} className={className}>
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[6px] border border-[#e2e8f0] text-[#183059] transition hover:bg-[#f8fafc] sm:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-[94px] z-50 w-full border-b border-[#e5e7eb] bg-white shadow-xl sm:hidden">
            <div className="mx-auto w-[calc(100%-30px)] py-4">
              {/* Mobile Search Input */}
              <form
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget.elements.namedItem("mobile-s");
                  const q = target ? target.value : "";
                  setMobileMenuOpen(false);
                  const el = document.getElementById("load");
                  if (el) {
                    el.style.transition = "none";
                    el.style.opacity = "1";
                    el.style.visibility = "visible";
                    el.style.pointerEvents = "auto";
                  }
                  router.push(`/search?s=${encodeURIComponent(q)}`);
                }}
                className="mb-4 flex h-11 items-center rounded-[6px] border border-[#dbe2e7] bg-[#f8fafc] px-3.5 transition focus-within:border-[#183059] focus-within:bg-white"
              >
                <input
                  type="search"
                  name="mobile-s"
                  placeholder="Search..."
                  aria-label="Search"
                  className="w-full border-0 bg-transparent text-[14px] text-[#263238] outline-none placeholder:text-[#7991a5] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                />
                <button
                  type="submit"
                  title="Search"
                  aria-label="Search"
                  className="cursor-pointer text-[#7791a7] transition-colors hover:text-[#183059]"
                >
                  <svg className="w-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="6" />
                    <path d="m16 16 4 4" />
                  </svg>
                </button>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {navigation.map(({ label, href }) => {
                  const isHome = href === "/" && (pathname === "/" || pathname === "/home" || pathname === "") && !hasSearch;
                  const isPageActive = !href.startsWith("#") && href !== "/" && (pathname === href || pathname.startsWith(href + "/"));
                  const isActive = isHome || isPageActive;

                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (href === "/") {
                          handleHomeClick(e);
                        }
                      }}
                      className={`flex items-center justify-between rounded-md px-3.5 py-3 text-[15px] font-medium transition ${
                        isActive
                          ? "bg-[#f0f9ff] text-[#183059] font-bold"
                          : "text-[#293039] hover:bg-[#f8fafc] hover:text-[#183059]"
                      }`}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#eed900]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Info */}
              <div className="mt-4 border-t border-[#f1f5f9] pt-3 text-[13px] text-[#5d7788] space-y-2">
                <div className="flex items-center justify-between">
                  <span>Customer Care:</span>
                  <a href={`tel:${globalInfo.phoneRaw}`} className="font-semibold text-[#183059]">
                    {globalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email:</span>
                  <a href={`mailto:${globalInfo.emailApply}`} className="font-semibold text-[#183059]">
                    {globalInfo.emailApply}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
