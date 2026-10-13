"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Camera,
  CalendarDays,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import EstimatedForm from "@/components/EstimatedForm";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white px-4 py-16 text-[#222222] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#C60036]/[0.04] blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C60036]/[0.035] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= TOP HEADING ================= */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C60036]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C60036] sm:text-xs">
                Get In Touch
              </span>
            </div>

            <h2 className="max-w-xl font-heading text-5xl font-medium leading-[1.05] tracking-tight text-[#181818] sm:text-6xl lg:text-7xl">
              Let&apos;s capture
              <span className="block italic text-[#C60036]">
                your story.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-sm leading-7 text-[#666666] sm:text-base">
              Planning your wedding, pre-wedding shoot, birthday or
              a special celebration? Tell us about your plans. Let&apos;s
              create photographs that bring your beautiful memories
              back to life.
            </p>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTACT DETAILS ================= */}
          <div className="flex flex-col">

            {/* Phone */}
            <a
              href="tel:+916374303448"
              className="group flex gap-4 border-b border-black/10 py-5 transition-colors sm:py-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#C60036]/10 bg-[#C60036]/[0.06] text-[#C60036] transition-colors group-hover:bg-[#C60036] group-hover:text-white">
                <Phone className="size-5" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  Call Us
                </p>

                <p className="mt-1 text-base font-semibold text-[#222222] transition-colors group-hover:text-[#C60036] sm:text-lg">
                  +91 63743 03448
                </p>

                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  Let&apos;s discuss your photography requirements.
                </p>
              </div>

              <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#AAAAAA] transition-colors group-hover:text-[#C60036]" />
            </a>

            {/* Email */}
            <a
              href="mailto:rudrafocus01@gmail.com"
              className="group flex gap-4 border-b border-black/10 py-5 transition-colors sm:py-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#C60036]/10 bg-[#C60036]/[0.06] text-[#C60036] transition-colors group-hover:bg-[#C60036] group-hover:text-white">
                <Mail className="size-5" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  Email
                </p>

                <p className="mt-1 break-all text-base font-semibold text-[#222222] transition-colors group-hover:text-[#C60036] sm:text-lg">
                  rudrafocus01@gmail.com
                </p>

                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  Send us your event details and questions.
                </p>
              </div>

              <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#AAAAAA] transition-colors group-hover:text-[#C60036]" />
            </a>

            {/* Location */}
            <div className="flex gap-4 border-b border-black/10 py-5 sm:py-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#C60036]/10 bg-[#C60036]/[0.06] text-[#C60036]">
                <MapPin className="size-5" />
              </span>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  Based In
                </p>

                <p className="mt-1 text-base font-semibold text-[#222222] sm:text-lg">
                  Vilathikulam, Tamil Nadu
                </p>

                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  Contact us to discuss your event location and
                  photography requirements.
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916374303448"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 border-b border-black/10 py-5 transition-colors sm:py-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#C60036]/10 bg-[#C60036]/[0.06] text-[#C60036] transition-colors group-hover:bg-[#C60036] group-hover:text-white">
                <MessageCircle className="size-5" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                  WhatsApp
                </p>

                <p className="mt-1 text-base font-semibold text-[#222222] transition-colors group-hover:text-[#C60036] sm:text-lg">
                  Chat With Us
                </p>

                <p className="mt-1 text-xs leading-5 text-[#777777]">
                  Send a quick message about your special day.
                </p>
              </div>

              <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#AAAAAA] transition-colors group-hover:text-[#C60036]" />
            </a>

            {/* ================= SERVICE HIGHLIGHTS ================= */}
            <div className="mt-8">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#999999]">
                Let&apos;s Capture
              </p>

              <div className="grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-black/[0.07] bg-[#FAF8F8] p-3 text-center sm:p-4">
                  <Camera className="mx-auto size-5 text-[#C60036]" />

                  <p className="mt-2 text-[10px] font-medium text-[#555555] sm:text-xs">
                    Weddings
                  </p>
                </div>

                <div className="rounded-xl border border-black/[0.07] bg-[#FAF8F8] p-3 text-center sm:p-4">
                  <Heart className="mx-auto size-5 text-[#C60036]" />

                  <p className="mt-2 text-[10px] font-medium text-[#555555] sm:text-xs">
                    Couples
                  </p>
                </div>

                <div className="rounded-xl border border-black/[0.07] bg-[#FAF8F8] p-3 text-center sm:p-4">
                  <CalendarDays className="mx-auto size-5 text-[#C60036]" />

                  <p className="mt-2 text-[10px] font-medium text-[#555555] sm:text-xs">
                    Events
                  </p>
                </div>

              </div>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="mt-8 flex items-center gap-3">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
                Follow Us
              </span>

              <a
                href="https://www.instagram.com/_rudra_focus_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rudra Focus Photography on Instagram"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-black/10 bg-white text-[#555555] transition-all hover:border-[#C60036] hover:bg-[#C60036] hover:text-white"
              >
                <FaInstagram className="size-4" />
              </a>

              <a
                href="https://wa.me/916374303448"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Rudra Focus Photography on WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-black/10 bg-white text-[#555555] transition-all hover:border-[#C60036] hover:bg-[#C60036] hover:text-white"
              >
                <FaWhatsapp className="size-4" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT - REUSABLE ENQUIRY FORM ================= */}
          <div className="relative">
            {/* Decorative outline */}
            <div className="pointer-events-none absolute -inset-2 rounded-[26px] border border-[#C60036]/10" />

            <div className="relative">
              <EstimatedForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;