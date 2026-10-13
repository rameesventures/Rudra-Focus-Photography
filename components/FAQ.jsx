"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What photography services do you offer?",
      answer:
        "Rudra Focus Photography offers wedding photography, candid photography, traditional photography, pre-wedding shoots, birthday photography, baby photography, coming-of-age ceremonies and event photography. Contact us to discuss the services that best suit your occasion.",
    },
    {
      question: "How early should I book my wedding date?",
      answer:
        "We recommend enquiring as early as possible, especially for weddings and popular dates. Share your event date and location with us so we can check availability and discuss the right photography package for your celebration.",
    },
    {
      question: "Do you provide both candid and traditional photography?",
      answer:
        "Yes, you can enquire about candid and traditional photography coverage for your event. We aim to capture genuine emotions, family moments, important rituals and the little details that make your celebration special. Coverage can be discussed based on your requirements.",
    },
    {
      question: "Do you cover pre-wedding shoots?",
      answer:
        "Yes, you can enquire about pre-wedding photography sessions. Share your preferred location, date and ideas with us so we can discuss a shoot that reflects your story as a couple.",
    },
    {
      question: "Can I customize my photography package?",
      answer:
        "Absolutely. Your requirements may vary depending on the event, coverage duration, number of functions, albums and video needs. Contact us with your requirements to discuss a suitable package.",
    },
    {
      question: "How long will it take to receive my photos?",
      answer:
        "Delivery time depends on the event and the amount of editing required. The final images are selected and professionally edited before delivery. Please discuss the expected delivery timeline with us when booking.",
    },
    {
      question: "Do you provide wedding albums and videos?",
      answer:
        "Album and video options can be discussed when planning your photography package. Let us know what you need, and we can explain the available options for your event.",
    },
    {
      question: "Do you photograph birthdays and family functions?",
      answer:
        "Yes, you can enquire about birthday photography, baby milestones, coming-of-age ceremonies and other family celebrations. We focus on preserving the emotions, traditions and memorable moments of your special day.",
    },
    {
      question: "Do you travel to different locations for shoots?",
      answer:
        "Please share your event location and photography requirements with us. We can discuss travel arrangements and availability based on the location and type of event.",
    },
    {
      question: "How can I enquire about availability and pricing?",
      answer:
        "You can contact Rudra Focus Photography through WhatsApp or the website enquiry form. Share your name, event type, date, location and preferred services so we can discuss availability and package details.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-9 sm:mb-12">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-7 bg-primary" />
            Frequently Asked Questions
          </p>

          <h2 className="font-heading text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your Questions,
            <span className="block italic text-primary">
              Our Answers.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Planning your special day? Find answers about our photography
            services, bookings, shoots and photo delivery. Have another
            question? We are happy to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger
                className="
                  gap-4 py-5 text-left text-sm font-medium text-gray-900
                  hover:text-primary hover:no-underline
                  sm:py-6 sm:text-base
                "
              >
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 font-heading text-sm font-medium text-primary sm:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-5 pl-9 text-sm leading-7 text-gray-600 sm:pb-6 sm:pl-10 sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-primary/10 bg-[#FCF7F8] p-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="font-heading text-xl font-medium text-gray-900 sm:text-2xl">
              Still have questions?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Tell us about your special day. Let’s capture it beautifully.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
              <ArrowUpRight className="size-4" />
            </Link>

            <a
              href="https://wa.me/916374303448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;