
"use client";

import React from "react";
import {
  MessageCircle,
  HeartHandshake,
  CalendarCheck,
  Camera,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Enquiry",
    description:
      "Tell us about your event, preferred date, location, and photography needs. We’ll help you explore the right options for your special day.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Consultation",
    description:
      "Let’s discuss your ideas, preferred photography style, budget, and expectations to customize a photoshoot that suits you.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Booking",
    description:
      "Finalize your photography package, event details, and date to confirm your booking with Rudra Focus Photography.",
  },
  {
    number: "04",
    icon: Camera,
    title: "Photography",
    description:
      "Enjoy your special moments while we capture every smile, emotion, and beautiful detail to create memories you can cherish forever.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-background px-4 py-14 text-foreground sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Soft Brand Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary sm:text-xs">
            <HeartHandshake className="h-3.5 w-3.5" />
            Our Simple Process
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            From Your First Call
            <span className="block text-primary">
              To Forever Memories.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Your special moments deserve thoughtful care from start
            to finish. We keep the photography process simple and
            personal, so you can enjoy your celebration while we
            focus on capturing your story.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border-border/70 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <CardContent className="relative flex h-full flex-col items-center p-5 text-center sm:p-6">
                  {/* Step Number */}
                  <div className="mb-5 flex w-full items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Step {step.number}
                    </span>

                    <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:size-16">
                    <Icon
                      className="size-6 sm:size-7"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-6 text-muted-foreground sm:text-[13px]">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-5 h-1 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-9 text-center sm:mt-10">
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            You enjoy the celebration.
            <span className="font-medium text-primary">
              {" "}We capture the memories.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
