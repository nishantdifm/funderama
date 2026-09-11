"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="relative isolate flex flex-grow flex-col items-center justify-start overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)] pt-12 pb-36 sm:pt-16 sm:pb-44 md:pb-48">
        {/* Background SVG overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: "url('https://funderama-llc.s3-eu-central-2.ionoscloud.com/blob-scene-wide-simple.svg')" }}
        />

        <div className="relative z-10 mx-auto px-4 text-center">
          {/* 404 Heading */}
          <h1 className="font-['Rubik',sans-serif] text-[100px] font-semibold leading-none text-[#183059] sm:text-[140px] md:text-[160px]">
            404
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 font-['Rubik',sans-serif] text-[22px] font-medium text-[#183059] sm:mt-6 sm:text-[28px]">
            Page not found
          </h2>

          {/* Visit Homepage Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/"
              className="inline-block rounded-[6px] bg-[#1e60f2] px-7 py-3 font-['Rubik',sans-serif] text-[15px] font-medium text-white shadow-sm transition hover:bg-[#1550cf] active:scale-[0.98] cursor-pointer"
            >
              Visit homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
