
"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Heart } from "lucide-react";

const testimonials = [
  {
    quote:
      "We are really happy with how our wedding photos turned out. They captured the important rituals, our family moments, and all the little emotions we might have missed on the day. Looking through the photos brings back so many memories.",
    name: "Suresh & Murugalakshimi",
    designation: "Wedding Photography",
    src: "/Testimonials/rc1.jpg",
  },
  {
    quote:
      "The photographs beautifully captured the colours, traditions, and atmosphere of the celebration. We especially loved the candid pictures because they felt natural and showed the real moments as they happened.",
    name: "Bathmarubini",
    designation: "Coming-of-Age Photography",
    src: "/Testimonials/rc3.jpg",
  },
  {
    quote:
      "Having our celebration captured so beautifully means a lot to us. The location, the little details, and the moments we shared with our loved ones all came together wonderfully in the photographs.",
    name: "Rithiga Sri",
    designation: "Destination Photography",
    src: "/Testimonials/rc4.jpg",
  },
  {
    quote:
      "Our pre-wedding photos came out better than we expected. The pictures look natural, and we really liked how our personalities came through. It is lovely to have these memories of this special time together.",
    name: "Kannan & Selva Mari",
    designation: "Pre-Wedding Photography",
    src: "/Testimonials/rc5.jpg",
  },
  {
    quote:
      "Every picture captured something special about our wedding, from the ceremony to the happy moments with family. We loved having these memories to look back on, especially the candid photos we didn't even realise were being taken.",
    name: "Nandhu & JeyaSri",
    designation: "Wedding Photography",
    src: "/Testimonials/rc6.jpg",
  },
  {
    quote:
      "We wanted our wedding memories to feel genuine, and the photographs captured so many beautiful moments. The family pictures and candid expressions are especially meaningful to us. We will treasure these photos for years to come.",
    name: "Shalman & Tharifa",
    designation: "Wedding Photography",
    src: "/Testimonials/rc7.jpg",
  },
  {
    quote:
      "The photographs captured the traditions, emotions, and little details that made this celebration special. We especially love the pictures with our family because they remind us of how meaningful the day was.",
    name: "Suba Lakshmi",
    designation: "Coming-of-Age Photography",
    src: "/Testimonials/rc8.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-background py-14 text-foreground sm:py-16 lg:py-20"
    >
      {/* Soft brand-color background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/6 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <Heart className="h-3.5 w-3.5" />
            Words From Our Clients
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Their Moments.
            <span className="block text-primary">
              Their Memories.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Every photograph holds a special feeling. Read the stories
            of families and couples who trusted Rudra Focus Photography
            to capture their unforgettable moments.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Animated Testimonials */}
        <div className="mx-auto max-w-5xl">
          <AnimatedTestimonials
            testimonials={testimonials}
            autoplay={true}
          />
        </div>
      </div>
    </section>
  );
}
