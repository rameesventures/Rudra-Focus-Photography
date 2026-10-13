
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (!autoplay || !mounted || testimonials.length <= 1) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, mounted, testimonials.length]);

  // Stable rotation values: same on server and client.
  const getRotation = (index) => ((index % 5) - 2) * 2;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        {/* Testimonial images */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const rotation = getRotation(index);

                return (
                  <motion.div
                    key={testimonial.src}
                    initial={false}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotation,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -20, 0] : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-[center_20%]"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Testimonial content */}
        <div className="flex flex-col justify-between py-4">
          <div>
            <h3 className="font-oswald text-2xl font-bold text-primary">
              {testimonials[active].name}
            </h3>

            <p className="text-sm text-neutral-500">
              {testimonials[active].designation}
            </p>

            <motion.p
              key={`${active}-${testimonials[active].quote}`}
              className="mt-8 text-[16px] text-black"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={mounted ? {
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  } : false}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: mounted ? 0.02 * index : 0,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 transition-colors hover:bg-primary"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-translate-x-0.5 group-hover/button:text-black" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group/button flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900 transition-colors hover:bg-primary"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
