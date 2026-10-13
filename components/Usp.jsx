"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  Handshake,
  Camera,
  BadgeIndianRupee,
  Gift,
  MapPin,
  BookImage,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const usps = [
  {
    icon: Handshake,
    title: "A Bond Beyond Photography",
    description:
      "We build a friendly bond with every client to make every photoshoot comfortable, natural, and memorable.",
  },
  {
    icon: Camera,
    title: "Your Vision, Your Photoshoot",
    description:
      "Every photoshoot can be customized to your preferences. We listen to your ideas and bring your vision to life.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Reasonable Price, Best Quality Memories",
    description:
      "Enjoy quality photography at a reasonable price, with memories you can cherish forever.",
  },
  {
    icon: Gift,
    title: "Special Gifts with Your Memories",
    description:
      "Every package includes 1 photo album, 2 photo frames, 2 personalized calendars featuring your photos, and a pen drive with HD video footage.",
  },
  {
    icon: MapPin,
    title: "Your Location, Your Choice",
    description:
      "Choose the location you love. We give you the freedom to plan your photoshoot at a place that feels special to you.",
  },
  {
    icon: BookImage,
    title: "You Give the Time, We Give the Memories",
    description:
      "Your moments, your time, your story. We turn your special day into memories that last a lifetime.",
  },
];

const Usp = () => {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      {/* Section Heading */}
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
          <Heart className="h-3.5 w-3.5" />
          The Rudra Focus Difference
        </div>

        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Why Choose
          <span className="mt-1 block text-primary">
            Rudra Focus Photography ?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Your special day deserves to be remembered in every detail.
          From heartfelt emotions to joyful celebrations, Rudra Focus
          Photography captures the moments, people and traditions that
          make your story uniquely yours.
        </p>
      </div>

      {/* USP Layout */}
      <div className="relative mx-auto mt-10 max-w-7xl sm:mt-12 lg:mt-16">
        {/* Desktop Layout */}
        <div className="hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_300px_1fr] xl:grid-cols-[1fr_360px_1fr] xl:gap-8">
          {/* Left Cards: Text left-aligned to the right of icon */}
          <div className="flex flex-col gap-6">
            <USPCard {...usps[0]} align="right" />
            <USPCard {...usps[2]} align="right" />
            <USPCard {...usps[4]} align="right" />
          </div>

          {/* Center Image */}
          <div className="relative mx-auto aspect-4/5 w-full max-w-90">
            <div className="absolute -inset-2 rounded-[180px_180px_14px_14px] border border-primary/30" />

            <div className="relative h-full w-full overflow-hidden rounded-[180px_180px_14px_14px] bg-muted">
              <Image
                src="/usp1.jpg"
                alt="Wedding moments captured by Rudra Focus Photography"
                fill
                sizes="(min-width: 1280px) 360px, 300px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-3 right-3 text-center">
                <p className="font-heading text-2xl font-medium text-white xl:text-3xl">
                  Your Moments.
                </p>
                <p className="font-heading text-2xl font-medium text-primary xl:text-3xl">
                  Our Focus.
                </p>
                <p className="mt-2 text-xs tracking-wide text-white/80">
                  Memories for a Lifetime
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards: Icon right, text right-aligned */}
          <div className="flex flex-col gap-6">
            <USPCard {...usps[1]} align="right" />
            <USPCard {...usps[3]} align="right" />
            <USPCard {...usps[5]} align="right" />
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {usps.map((usp) => (
            <USPCard
              key={usp.title}
              {...usp}
              align="left"
            />
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="relative mx-auto mt-12 max-w-2xl text-center sm:mt-14">
        <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-primary" />

        <p className="font-heading text-xl font-medium leading-relaxed text-foreground sm:text-2xl lg:text-3xl">
          Every smile has a story.
          <span className="block text-primary">
            Every photograph keeps it alive.
          </span>
        </p>
      </div>
    </section>
  );
};

/* USP Card Component */
const USPCard = ({
  icon: Icon,
  title,
  description,
  align = "left",
}) => {
  const isRight = align === "right";

  return (
    <Card
      className="
        group h-full rounded-xl border-border/70 bg-card shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:border-primary/40
        hover:shadow-lg hover:shadow-primary/5
      "
    >
      <CardContent
        className={`
          flex items-start gap-4 p-4 sm:p-5
          ${
            isRight
              ? "flex-row-reverse text-right"
              : "flex-row text-left"
          }
        `}
      >
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary sm:h-11 sm:w-11">
          <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={1.7} />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-[13px]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Usp;
