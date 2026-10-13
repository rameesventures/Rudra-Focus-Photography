"use client";

import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Camera,
} from "lucide-react";
import Link from "next/link";

const Instagram = ({ className = "size-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const reels = [
  {
    id: 1,
    title: "Rudra Focus Photography",
    category: "Event Photography",
    image: "/Reels/rr1.png",
    url: "https://www.instagram.com/reel/Dd6V7jzTpOm/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    title: "Rudra Focus Photography",
    category: "Wedding Photography",
    image: "/Reels/rr2.png",
    url: "https://www.instagram.com/reel/DZ_6PhwsCvS/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    title: "Rudra Focus Photography",
    category: "Folk Photography",
    image: "/Reels/rr3.png",
    url: "https://www.instagram.com/reel/DXvvC1VpSDF/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    title: "Rudra Focus Photography",
    category: "Event Photography",
    image: "/Reels/rr4.png",
    url: "https://www.instagram.com/reel/DXrG6DSCSlt/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    title: "Rudra Focus Photography",
    category: "Folk Photography",
    image: "/Reels/rr5.png",
    url: "https://www.instagram.com/reel/DXpiKNck6-d/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
];

const InstagramReels = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="instagram"
      className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <Instagram className="size-4" />
              Follow Our Journey
            </p>

            <h2 className="mt-4 font-heading text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Moments That
              <span className="block italic text-primary">
                Tell Your Story.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              From beautiful weddings to joyful celebrations, we capture
              genuine emotions and turn your special moments into
              memories that last forever.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous reels"
              className="flex size-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next reels"
              className="flex size-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Instagram Reels Slider */}
        <div
          ref={sliderRef}
          className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:mt-11 sm:gap-5"
          style={{ scrollbarWidth: "none" }}
        >
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${reel.title} on Instagram`}
              className="group relative block w-[75%] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 sm:w-[42%] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <div className="relative aspect-9/16 overflow-hidden">
                <img
                  src={reel.image}
                  alt={reel.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/20 transition-opacity duration-300 group-hover:from-black/85" />

                {/* Instagram Icon */}
                <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md">
                  <Instagram className="size-5" />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <Play className="ml-1 size-6 fill-current" />
                  </span>
                </div>

                {/* Reel Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
                    <Heart className="size-3.5 text-primary" />
                    {reel.category}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-medium leading-snug text-white sm:text-2xl">
                    {reel.title}
                  </h3>

                  <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                    Watch on Instagram
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-7 text-center sm:mt-9">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Camera className="size-5" />
          </div>

          <h3 className="mt-4 font-heading text-2xl font-medium text-gray-900 sm:text-3xl">
            Every Frame Has a Story
          </h3>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            Explore our latest work and get inspired for your next
            special occasion.
          </p>

          <Link
            href="https://www.instagram.com/_rudra_focus_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <Instagram className="size-4" />
            Follow on Instagram
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;