
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Camera } from "lucide-react";

const stories = [
  {
    name: "Suresh & Murugalakshimi",
    category: "Wedding Photography",
    location: "Vilathikulam, Thoothukudi",
    date: "Wedding Story",
    image: "/Projects/rc1.jpg",
  },
  {
    name: "Harshitha",
    category: "Birthday Photography",
    location: "Vilathikulam, Thoothukudi",
    date: "Birthday Story",
    image: "/Projects/rc2.jpg",
  },
  {
    name: "Kannan & Selva Mari",
    category: "Pre-Wedding Photography",
    location: "Maanamadurai, Sivagangai",
    date: "Pre-Wedding Story",
    image: "/Projects/rc5.jpg",
  },
  {
    name: "Nandhu & Selva",
    category: "Wedding Photography",
    location: "Vilathikulam, Thoothukudi",
    date: "Wedding Story",
    image: "/Projects/rc6.jpg",
  },
  {
    name: "Shalman & Tharifa",
    category: "Wedding Photography",
    location: "Vilathikulam, Thoothukudi",
    date: "Wedding Story",
    image: "/Projects/rc7.jpg",
  },
  {
    name: "Suba Lakshmi",
    category: "Coming-of-Age Photography",
    location: "Vilathikulam, Thoothukudi",
    date: "Coming-of-Age Story",
    image: "/Projects/rc8.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
              <Camera className="h-3.5 w-3.5" />
              Our Portfolio
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Every Picture Tells
              <span className="block text-primary">
                A Beautiful Story.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Explore the love, laughter and emotions captured by
              Rudra Focus Photography. From weddings to special
              celebrations, every frame preserves a memory worth
              keeping forever.
            </p>
          </div>

          {/* Portfolio Label */}
          <div className="hidden text-right md:block">
            <p className="font-heading text-4xl font-semibold text-primary/15 lg:text-5xl">
              01 — 06
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured Stories
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <Card
              key={story.name}
              className="group overflow-hidden rounded-xl border-border/70 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                <Image
                  src={story.image}
                  alt={`${story.name} - ${story.category}`}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-md border border-white/30 bg-black/50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md sm:text-[10px]">
                    {story.category}
                  </span>
                </div>

                {/* Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {story.date}
                  </p>

                  <h3 className="font-heading text-xl font-medium leading-snug text-white sm:text-2xl">
                    {story.name}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <CardContent className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Rudra Focus Photograpy With 
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {story.category}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
            Every celebration is unique. Let us capture your story next.
          </p>

          <Button
            variant="outline"
            className="h-11 gap-2 self-start border-primary/30 text-primary hover:bg-black hover:text-black sm:self-auto"
          >
            <Link href="/clients" className="flex items-center gap-x-2">
              View Full Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
