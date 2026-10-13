import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Camera,
    Heart,
    Images,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Servicepage = () => {
    const services = [
        {
            name: "Wedding Photography",
            description:
                "Every emotion, ritual and beautiful moment of your wedding day, captured to last a lifetime.",
            image: "/projects/rc1.jpg",
            category: "Wedding",
        },
        {
            name: "Destination Photography",
            description:
                "Natural smiles, genuine emotions and those unexpected moments that make your story unique.",
            image: "/projects/rc4.jpg",
            category: "Destination",
        },
        {
            name: "Pre-Wedding Photography",
            description:
                "Celebrate your love story with beautiful portraits and creative pre-wedding memories.",
            image: "/projects/rc5.jpg",
            category: "Pre-Wedding",
        },
        {
            name: "Birthday Photography",
            description:
                "Capture the smiles, celebrations, decorations and little details of your special day.",
            image: "/projects/rc22.jpg",
            category: "Birthday",
        },
        {
            name: "Coming-of-Age Photography",
            description:
                "Beautifully document an important milestone with portraits and memorable family moments.",
            image: "/projects/rc8.jpg",
            category: "Coming-of-Age",
        },
        {
            name: "Baby Photography",
            description:
                "Keep the sweetest expressions, tiny details and precious early memories close forever.",
            image: "/projects/rc2.jpg",
            category: "Baby",
        },
        {
            name: "Event Photography",
            description:
                "From family gatherings to special occasions, preserve the atmosphere and moments that matter.",
            image: "/Reels/rr1.png",
            category: "Events",
        },
        {
            name: "Folk Photography",
            description:
                "Capture cultural expressions, traditional artistry and the character of meaningful occasions.",
            image: "/Reels/rr4.png",
            category: "Folk",
        },
    ];

    return (
        <section
            id="services"
            className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                            <Camera className="size-4" />
                            Rudra Focus Photography
                        </p>

                        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Every Moment
                            <span className="block italic text-primary">
                                Deserves to Be Remembered.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                            From once-in-a-lifetime weddings to the little moments
                            that mean everything, we capture your stories with
                            emotion, creativity and care.
                        </p>
                    </div>

                    <Link href="/contact" className="shrink-0">
                        <Button className="rounded-full bg-primary px-6 text-white hover:bg-primary/90">
                            Enquire Now
                            <ArrowUpRight className="ml-2 size-4" />
                        </Button>
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {services.map((service, index) => (
                        <Card
                            key={service.name}
                            className="group overflow-hidden rounded-2xl border-gray-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Service Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={service.image}
                                    alt={`${service.name} by Rudra Focus Photography`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

                                {/* Category */}
                                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                                    {service.category}
                                </span>

                                {/* Number */}
                                <span className="absolute bottom-3 right-4 font-heading text-3xl font-medium text-white/90">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Service Details */}
                            <CardContent className="p-5 sm:p-6">
                                <h3 className="font-heading text-xl font-medium text-gray-900 transition-colors group-hover:text-primary sm:text-2xl">
                                    {service.name}
                                </h3>

                                <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-600">
                                    {service.description}
                                </p>

                                <div className="my-4 h-px bg-gray-100 transition-colors group-hover:bg-primary/20" />

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gray-900"
                                >
                                    Enquire About This Service
                                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-primary/10 bg-[#FCF6F7] p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4">
                        <div className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
                            <Heart className="size-5" />
                        </div>

                        <div>
                            <h3 className="font-heading text-xl font-medium text-gray-900 sm:text-2xl lg:text-3xl">
                                Let&apos;s Capture Your Story.
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                                Tell us about your event, your ideas and the moments
                                you want to remember. Let&apos;s plan your photography.
                            </p>
                        </div>
                    </div>

                    <Link href="/contact" className="shrink-0">
                        <Button className="w-full rounded-full bg-primary px-6 text-white hover:bg-primary/90 sm:w-auto">
                            Book Your Session
                            <ArrowUpRight className="ml-2 size-4" />
                        </Button>
                    </Link>
                </div>

                {/* Portfolio Link */}
                <div className="mt-6 flex justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
                    >
                        <Images className="size-4" />
                        Explore Our Photography Portfolio
                        <ArrowUpRight className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Servicepage;