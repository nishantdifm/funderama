"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RelatedPostsCarousel({ posts = [] }) {
  const [items, setItems] = useState(posts);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidePhase, setSlidePhase] = useState("idle");

  useEffect(() => {
    setItems(posts);
  }, [posts]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stepPercent = 100 / cardsPerView;

  // Slide LEFT when clicking Left Button (<)
  const slideLeft = () => {
    if (isAnimating || items.length <= cardsPerView) return;
    setIsAnimating(true);
    setSlidePhase("sliding-left");

    setTimeout(() => {
      setItems((prev) => [...prev.slice(1), prev[0]]);
      setSlidePhase("idle");
      setIsAnimating(false);
    }, 450);
  };

  // Slide RIGHT when clicking Right Button (>)
  const slideRight = () => {
    if (isAnimating || items.length <= cardsPerView) return;
    setIsAnimating(true);

    // Prepend last item and offset track to the left without animation
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setSlidePhase("prep-right");

    // Animate smoothly towards the right to 0%
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlidePhase("sliding-right");

        setTimeout(() => {
          setSlidePhase("idle");
          setIsAnimating(false);
        }, 450);
      });
    });
  };

  // Dynamic CSS translation
  let transform = "translateX(0%)";
  let transition = "none";

  if (slidePhase === "sliding-left") {
    transform = `translateX(-${stepPercent}%)`;
    transition = "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)";
  } else if (slidePhase === "prep-right") {
    transform = `translateX(-${stepPercent}%)`;
    transition = "none";
  } else if (slidePhase === "sliding-right") {
    transform = "translateX(0%)";
    transition = "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)";
  } else {
    transform = "translateX(0%)";
    transition = "none";
  }

  return (
    <section className="bg-white px-4 pb-20 pt-8 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-[1350px]">
        {/* Section Heading */}
        <h3 className="mb-12 text-center font-['Rubik',sans-serif] text-[26px] sm:text-[30px] font-normal text-[#183059]">
          Discover more articles
        </h3>

        {/* Carousel Container */}
        <div className="relative px-10 sm:px-12 lg:px-14">
          {/* Left Arrow Button (Previous - brings previous items from left) */}
          {items.length > cardsPerView && (
            <button
              type="button"
              onClick={slideRight}
              disabled={isAnimating}
              aria-label="Previous articles"
              className="absolute left-0 sm:left-1 top-[35%] z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#183059] shadow-md transition-all duration-200 hover:border-[#183059] hover:bg-[#183059] hover:text-white disabled:cursor-default disabled:opacity-60"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex will-change-transform"
              style={{ transform, transition }}
            >
              {items.map((rPost, idx) => (
                <div
                  key={`${rPost.slug}-${idx}`}
                  className="shrink-0 px-3 sm:px-3.5"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <article className="group flex flex-col transition-all duration-300">
                    {/* Thumbnail with 3 dots on hover */}
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="relative block aspect-square w-full overflow-hidden rounded-[8px] bg-slate-100 shadow-sm transition-all duration-300"
                    >
                      <img
                        src={rPost.image}
                        alt={rPost.title}
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

                    {/* Card Title & Meta (matching Image 2) */}
                    <div className="mt-5 flex flex-1 flex-col items-center text-center">
                      <h4 className="font-['Rubik',sans-serif] text-[16px] sm:text-[17px] font-normal leading-[1.35] text-[#263238] transition-colors duration-200 group-hover:text-[#eed900] line-clamp-2">
                        <Link href={`/blog/${rPost.slug}`}>
                          {rPost.title}
                        </Link>
                      </h4>
                      <div className="mt-2 flex items-center justify-center gap-1 font-['Inter',sans-serif] text-[12px] font-normal text-[#90a4ae]">
                        <span>Blog</span>
                        <span>-</span>
                        <time dateTime="2024-01-29">{rPost.date}</time>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button (Next - slides left to bring next items from right) */}
          {items.length > cardsPerView && (
            <button
              type="button"
              onClick={slideLeft}
              disabled={isAnimating}
              aria-label="Next articles"
              className="absolute right-0 sm:right-1 top-[35%] z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[#183059] shadow-md transition-all duration-200 hover:border-[#183059] hover:bg-[#183059] hover:text-white disabled:cursor-default disabled:opacity-60"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
