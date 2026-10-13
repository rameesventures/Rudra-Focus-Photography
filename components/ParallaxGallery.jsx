
"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Camera, Heart } from "lucide-react";

const images = [
  "/Photos/rp1.jpg",
  "/Photos/rp2.jpg",
  "/Photos/rp3.jpg",
  "/Photos/rp4.jpg",
  "/Photos/rp5.jpg",
  "/Photos/rp6.jpg",
  "/Photos/rp8.jpg",
  "/Photos/rp9.jpg",
  "/Photos/rp10.jpg",
  "/Photos/rp11.jpg",
  "/Photos/rp12.jpg",
  "/Photos/rp13.jpg",
  "/Photos/rp14.jpg",
  "/Photos/rp16.jpg",
  "/Photos/rp18.jpg",
  "/Photos/rp19.jpg",
  "/Photos/rp20.jpg",
  "/Projects/rc1.jpg",
  "/Projects/rc2.jpg",
  "/Projects/rc3.jpg",
  "/Projects/rc4.jpg",
  
  
];

export default function ParallaxGallery() {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      {/* Heading */}
      <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
          <Camera className="h-3.5 w-3.5" />
          The Art of Memories
        </div>

        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Moments Worth
          <span className="block text-primary">
            Looking Back On.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          Every photograph holds a feeling, a smile or a story.
          Explore the beautiful moments captured by Rudra Focus
          Photography, from heartfelt weddings to joyful celebrations.
        </p>

        <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-primary" />
      </div>

      {/* Parallax Image Gallery */}
      <div className="relative mx-auto max-w-7xl">
        <ParallaxScroll images={images} />
      </div>

      {/* Closing text */}
      <div className="relative mx-auto mt-8 max-w-2xl text-center sm:mt-10">
        <Heart className="mx-auto mb-3 h-5 w-5 text-primary" />

        <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
          Captured with love. Remembered forever.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Rudra Focus Photography · Vilathikulam, Tamil Nadu
        </p>
      </div>
    </section>
  );
}
