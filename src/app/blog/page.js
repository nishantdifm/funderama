"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogPosts";

function BlogBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e1f5fe_0%,#ffffff_100%)]">
      {/* Background SVG overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{ backgroundImage: `url('https://funderama-llc.s3-eu-central-2.ionoscloud.com/blob-scene-wide-simple.svg')` }}
      />

      <div className="relative z-10 mx-auto flex w-[calc(100%-30px)] max-w-[1304px] flex-col justify-between py-12 sm:w-[calc(100%-48px)] sm:flex-row sm:items-center sm:py-[55px]">
        {/* Left: Divider line + Title */}
        <div className="flex items-center">
          <span className="mr-[15px] inline-block h-[20px] w-[3px] bg-[#00b0ff]/40" />
          <h1 className="font-['Rubik',sans-serif] text-[22px] font-normal leading-[1.4] text-[#183059]">
            Blog
          </h1>
        </div>

        {/* Right: Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mt-3 flex items-center font-['Rubik',sans-serif] text-[14px] font-normal text-[#183059] sm:mt-0"
        >
          <Link
            href="/"
            className="text-[#183059] underline underline-offset-2 transition-colors hover:no-underline"
          >
            Home
          </Link>
          <svg
            aria-hidden="true"
            className="mx-[10px] h-[10px] w-[10px] shrink-0 fill-[#00b0ff]/60"
            viewBox="0 0 320 512"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
          <span className="text-[#183059]">Blog</span>
        </nav>
      </div>
    </section>
  );
}

function BlogGrid() {
  const posts = getAllBlogPosts();

  return (
    <section className="bg-white px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-[1350px]">
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[60px]">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col transition-all duration-300"
            >
              {/* Image thumbnail with exact 8px border-radius */}
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-square w-full overflow-hidden rounded-[8px] bg-slate-100 shadow-sm transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with 3 dots */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

              {/* Post Title & Meta */}
              <div className="mt-[30px] flex flex-1 flex-col items-center text-center">
                <h2 className="font-['Rubik',sans-serif] text-[22px] lg:text-[26px] font-normal leading-[1.4] text-[#263238] transition-colors duration-200 group-hover:text-[#eed900]">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <time
                  dateTime="2024-01-29"
                  className="mt-[10px] block font-['Inter',sans-serif] text-[13px] font-normal leading-[1.5] text-[#90a4ae]"
                >
                  {post.date}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Header />
      <main>
        <BlogBanner />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}

