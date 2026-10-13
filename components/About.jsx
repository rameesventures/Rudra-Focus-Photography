import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  RiContactsFill,
  RiCameraLensLine,
  RiHeart2Line,
} from "react-icons/ri";

const About = () => {
  const highlights = [
    {
      title: "Weddings",
      description: "Your once-in-a-lifetime moments",
    },
    {
      title: "Candid",
      description: "Real emotions, naturally captured",
    },
    {
      title: "Celebrations",
      description: "Memories worth holding onto",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto my-10 w-full max-w-7xl px-4 sm:my-14 lg:mt-20 lg:px-8"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C60036] sm:text-xs">
          About Rudra Focus
        </p>

        <h2 className="mt-3 font-heading text-3xl font-medium text-black sm:text-4xl md:text-5xl">
          The Stories Behind
          <span className="block italic text-[#C60036]">
            Every Frame
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black sm:text-base">
          Every moment has a story. We capture the emotions,
          connections, and memories that make yours unforgettable.
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 flex flex-col gap-10 md:mt-14 md:flex-row md:items-center md:gap-12 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="min-w-0 flex-1 space-y-5 text-center md:text-left">

          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C60036]/30 bg-[#C60036]/10 px-3 py-2">
            <RiHeart2Line className="size-4 text-[#C60036]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-black">
              Moments That Matter
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
            We don’t just
            <span className="text-[#C60036]">
              {" "}capture moments,
            </span>
            <br className="hidden sm:block" />
            we preserve memories.
          </h3>

          {/* Description */}
          <p className="text-sm leading-7 text-black sm:text-base">
            At Rudra Focus Photography, we believe every photograph
            should hold a feeling. From joyful wedding celebrations
            to the smallest candid moments, our aim is to preserve
            the emotions that make every occasion special.
          </p>

          <p className="text-sm leading-7 text-black sm:text-base">
            Whether it’s a wedding, pre-wedding shoot, birthday, or
            another special celebration, we focus on capturing your
            story in a natural and meaningful way. Our photographs
            are created to bring those beautiful memories back to
            life whenever you look at them.
          </p>

          {/* Highlights */}
          <div className="space-y-3 pt-1 text-left">
            {[
              "Wedding and candid photography",
              "Pre-wedding and special occasion shoots",
              "Thoughtful storytelling through photographs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C60036]/15">
                  <RiCameraLensLine
                    className="size-3.5 text-[#C60036]"
                  />
                </span>

                <p className="text-sm leading-6 text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Photography Categories */}
          <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className={
                  item.title === "Celebrations"
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }
              >
                <p className="font-heading text-xl font-medium text-[#C60036] sm:text-2xl">
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-black sm:text-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row md:justify-start">
            <Button
              asChild
              className="h-12 w-full rounded-sm bg-[#C60036] px-6 text-sm font-medium text-white transition-colors hover:bg-[#A0002C] sm:w-auto"
            >
              <Link href="/projects" className="flex">
                Explore Our Work
                <RiContactsFill className="ml-2 size-4" />
              </Link>
            </Button>

            <a
              href="https://wa.me/916374303448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-rose/20 px-6 py-3 text-sm font-medium text-black transition-colors hover:border-[#C60036] hover:bg-[#C60036]/10 sm:w-auto"
            >
              Let’s Create Memories
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex-1 md:max-w-[48%]">

          {/* Burgundy Outline */}
          <div className="absolute -inset-2 rounded-2xl border border-[#C60036]/30" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 sm:aspect-[5/6]">

            <Image
              src="/usp1.jpg"
              alt="Pre-wedding photography by Rudra Focus Photography"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_60%] transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/65">
                Rudra Focus Photography
              </p>

              <p className="mt-3 font-heading text-3xl font-medium text-white sm:text-4xl">
                Moments Fade.
              </p>

              <p className="font-heading text-3xl font-medium italic text-[#C60036] sm:text-4xl">
                Memories Stay.
              </p>

              <div className="mt-4 h-1 w-14 rounded-full bg-[#C60036]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;