"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiCameraLensLine,
  RiHeart2Line,
  RiArrowRightLine,
} from "react-icons/ri";

const AboutFounder = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white px-5 py-16 text-[#222222] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C60036]/[0.04] blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C60036]/[0.03] blur-[100px]" />
      </div>

      {/* ================= CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-2xl">

            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C60036]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C60036] sm:text-xs">
                Behind The Lens
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl font-medium leading-[1.08] tracking-tight text-[#181818] sm:text-5xl lg:text-6xl">
              A Personal Touch
              <br />

              <span className="italic text-[#C60036]">
                Behind Every Frame.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 font-heading text-xl italic text-[#666666] sm:text-2xl">
              The vision behind Rudra Focus Photography
            </p>

            {/* Description */}
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#666666] sm:text-base sm:leading-8">
              <p>
                Photography is more than pointing a camera and taking a
                picture. It is about understanding emotions, noticing
                the little details, and capturing moments that may last
                only a second but stay in our hearts for years.
              </p>

              <p>
                Every wedding, celebration, and family occasion has its
                own story. At Rudra Focus Photography, our aim is to
                preserve those special moments through meaningful
                photographs that reflect the people and emotions behind
                every frame.
              </p>

              <p>
                From joyful wedding celebrations to candid smiles and
                unforgettable milestones, we want every photograph to
                bring you back to the feeling of that very moment.
              </p>

              <p className="font-medium text-[#333333]">
                Our philosophy is simple — moments fade, but the memories
                we capture can stay with you for a lifetime.
              </p>
            </div>

            {/* Brand Signature */}
            <div className="mt-8 border-l-2 border-[#C60036] pl-4">
              <p className="font-heading text-xl font-medium text-[#181818] sm:text-2xl">
                Rudra Focus Photography
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#C60036]">
                Moments Fade. Memories Stay.
              </p>
            </div>

            {/* Photography Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#222222]/10 bg-white px-4 py-2.5 shadow-sm">
                <RiCameraLensLine className="size-4 text-[#C60036]" />

                <span className="text-xs font-medium text-[#555555]">
                  Creative Photography
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#222222]/10 bg-white px-4 py-2.5 shadow-sm">
                <RiHeart2Line className="size-4 text-[#C60036]" />

                <span className="text-xs font-medium text-[#555555]">
                  Stories with Emotion
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/clients"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C60036] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A5002D] hover:shadow-lg hover:shadow-[#C60036]/15"
              >
                Explore Our Work

                <RiArrowRightLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/916374303448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C60036]/25 px-6 py-3 text-sm font-medium text-[#C60036] transition-all duration-300 hover:border-[#C60036] hover:bg-[#C60036]/5"
              >
                Let&apos;s Talk

                <RiArrowRightLine className="size-4" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-full max-w-[460px] sm:h-[500px] lg:h-[560px]">

              {/* Burgundy Outline */}
              <div className="absolute -inset-3 rounded-[220px_220px_12px_12px] border border-[#C60036]/25" />

              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[220px_220px_12px_12px] border border-[#C60036]/10 bg-[#F7F4F4] shadow-xl shadow-[#222222]/[0.06]">

                <Image
                  src="/RF.jpg"
                  alt="Rudra Focus Photography"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  loading="eager"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                {/* Image Caption */}
                <div className="absolute bottom-8 left-5 right-5 text-center sm:bottom-10">
                  <p className="font-heading text-2xl italic text-white sm:text-3xl">
                    Founder,
                  </p>

                  <p className="font-heading text-2xl italic text-[#FF5A7F] sm:text-3xl">
                    Naveen Kumar.
                  </p>

                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#C60036]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;