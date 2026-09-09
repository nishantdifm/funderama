"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { searchSite } from "@/data/searchData";

export default function SearchResultsPage({ query = "" }) {
  const results = searchSite(query);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Banner Section */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
        {/* Background SVG overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url('/images/blob-scene-wide-simple.svg')` }}
        />

        <div className="relative z-10 mx-auto w-[calc(100%-30px)] max-w-[1304px] py-12 sm:w-[calc(100%-48px)] sm:py-[55px]">
          <div className="flex items-center">
            <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
            <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059] sm:text-[24px]">
              Search Results for: {query}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 pb-24 pt-4 sm:px-6 sm:pb-32 sm:pt-6">
        <div className="mx-auto max-w-[1304px]">
          {results.length === 0 ? (
            <div className="py-8">
              <p className="font-['Inter',sans-serif] text-[16px] text-[#293039]">
                Nothing found
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#cfd8dc]/40">
              {results.map((item) => (
                <article
                  key={item.link}
                  className="group py-10 first:pt-0 last:pb-0 sm:py-12"
                >
                  <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center md:gap-10">
                    {/* Text content */}
                    <div className="flex-1">
                      <h2 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.3] text-[#263238] transition-colors duration-200 hover:text-[#2962ff] sm:text-[26px]">
                        <Link href={item.link} className="no-underline">
                          {item.title}
                        </Link>
                      </h2>

                      {item.desc && (
                        <p className="mt-4 font-['Inter',sans-serif] text-[15px] leading-[1.7] text-[#5d7788] sm:text-[16px]">
                          {item.desc}
                        </p>
                      )}

                      <div className="mt-5">
                        <Link
                          href={item.link}
                          className="inline-flex cursor-pointer items-center justify-center rounded-[3px] bg-[#194CCB] px-4 py-2 text-[14px] font-normal text-white no-underline transition-colors hover:bg-[#143ea6]"
                        >
                          View page
                        </Link>
                      </div>
                    </div>

                    {/* Thumbnail if present */}
                    {item.image && (
                      <div className="w-full shrink-0 md:w-[200px]">
                        <Link
                          href={item.link}
                          className="group/thumb relative block aspect-square h-[200px] w-[200px] max-w-full overflow-hidden rounded-[8px] bg-slate-100 shadow-sm"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                            loading="lazy"
                          />
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                            <svg
                              className="h-8 w-8 text-white drop-shadow"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="5" cy="12" r="1.75" />
                              <circle cx="12" cy="12" r="1.75" />
                              <circle cx="19" cy="12" r="1.75" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

