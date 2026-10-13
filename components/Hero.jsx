
"use client";

import Link from "next/link";
import { ArrowDown, Camera, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EstimatedForm from "./EstimatedForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-background text-foreground"
    >
      {/* Background photography image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./Hero/Hero-Image.jpg')",
        }}
      />

      

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-20 text-center sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Hero content */}
        <div className="mb-10 max-w-4xl sm:mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/80 px-4 py-2 backdrop-blur-md">
            <Camera className="h-4 w-4 text-primary" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary sm:text-xs">
              Rudra Focus Photography
            </span>
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-white">
            Moments Fade.
            <span className="block italic text-primary">
              Memories Stay.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 font-medium text-black">
            From beautiful weddings to candid emotions, Rudra Focus Photography captures every special moment with creativity and care. Let us turn your precious memories into timeless stories.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-black sm:text-sm">
            <span className="inline-flex items-center gap-2 font-medium">
              <Camera className="h-4 w-4 text-primary " />
              4 Years of Experience
            </span>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <span className="inline-flex items-center gap-2 font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              Vilathikulam, Tamil Nadu
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="h-12 w-full bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              <Link href="/clients" className="flex">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              
              className="h-12 w-full border-border bg-green-500 px-7 hover:border-primary sm:w-auto"
            >
              <a href="https://wa.me/916374303448"
              target="_blank"
              rel="noopener noreferrer" className="flex">
                Chat ON WhatsApp
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Enquiry form */}
        <div
          id="hero-enquiry"
          className="w-full max-w-3xl scroll-mt-24 text-left"
        >
          <div className="mb-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Your Story Starts Here
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              Tell us about your special occasion.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-white/90 p-2 shadow-xl shadow-foreground/5 backdrop-blur-xl sm:p-3">
            <EstimatedForm />
          </div>
        </div>
      </div>
    </section>
  );
}
