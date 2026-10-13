"use client"
import { useEffect, useState } from "react";


import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  Camera,
} from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const Footer = () => {

    const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  const services = [
    "Wedding Photography",
    "Destination Photography",
    "Pre-Wedding Photography",
    "Birthday Photography",
    "Baby Photography",
    "Coming-of-Age Photography",
    "Event Photography",
    "Folk Photography"
  ];

  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/clients" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full overflow-hidden bg-white text-gray-900">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_1.25fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Rudra Focus Photography home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/20">
                <Camera className="size-6" />
              </div>

              <div>
                <p className="font-heading text-xl font-semibold leading-tight text-gray-900">
                  Rudra Focus
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Photography
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              We capture weddings, celebrations and life's most meaningful
              moments through heartfelt storytelling and timeless
              photography.
            </p>

            {/* Highlights */}
            <div className="mt-6 flex gap-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-primary">
                  Memories
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  Made timeless
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold text-primary">
                  Moments
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  Captured with care
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative inline-block pb-3 text-sm font-semibold text-gray-900">
              Our Services
              <span className="absolute bottom-0 left-0 h-0.5 w-12 rounded-full bg-primary" />
            </h3>

            <ul className="mt-5 space-y-3.5 text-sm text-gray-600">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="relative inline-block pb-3 text-sm font-semibold text-gray-900">
              Explore
              <span className="absolute bottom-0 left-0 h-0.5 w-12 rounded-full bg-primary" />
            </h3>

            <ul className="mt-5 space-y-3.5 text-sm text-gray-600">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative inline-block pb-3 text-sm font-semibold text-gray-900">
              Get in Touch
              <span className="absolute bottom-0 left-0 h-0.5 w-14 rounded-full bg-primary" />
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-600">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Vilathikulam, Tamil Nadu, India</span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href="tel:+916374303448"
                  className="transition-colors hover:text-primary"
                >
                  +91 63743 03448
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href="mailto:rudrafocus01@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  rudrafocus01@gmail.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Monday - Sunday,
                  <br />
                  please contact us.
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/_rudra_focus_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rudra Focus Photography on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaInstagram className="size-4" />
              </a>

              <a
                href="https://wa.me/916374303448"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Rudra Focus Photography on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaWhatsapp className="size-4" />
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:text-gray-900"
            >
              Book Your Session
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <Separator className="bg-gray-200" />

      {/* Bottom Footer */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>
         © {year} Rudra Focus Photography. All rights reserved.
          
        </p>

        <p className="flex items-center gap-1">
          Capturing moments, preserving memories
          <span className="ml-1 text-primary">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;