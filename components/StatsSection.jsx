
"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Heart, CalendarDays, Award } from "lucide-react";

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Years of Experience",
    icon: CalendarDays,
  },
  {
    value: 35,
    suffix: "+",
    label: "Stories Captured",
    icon: Camera,
  },
  {
    value: 100,
    suffix: "+",
    label: "Beautiful Moments",
    icon: Heart,
  },
  {
    value: 100,
    suffix: "%",
    label: "Dedication",
    icon: Award,
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out counting animation
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(
        stats.map((stat) =>
          Math.round(stat.value * eased)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="px-4 py-5 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-2xl border-t-[3px] border-primary bg-background py-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:grid-cols-4 sm:py-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-3 py-4 text-center sm:py-2 ${
                index > 0
                  ? "sm:border-l sm:border-border"
                  : ""
              } ${
                index % 2 === 1
                  ? "border-l border-border sm:border-l"
                  : ""
              } ${
                index > 1
                  ? "border-t border-border sm:border-t-0"
                  : ""
              }`}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {counts[index].toLocaleString("en-IN")}
                <span className="text-primary">
                  {stat.suffix}
                </span>
              </p>

              <p className="mt-1.5 max-w-36 text-xs font-medium leading-5 text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
