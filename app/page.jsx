import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import InstagramReels from "@/components/InstagramReels";
import ParallaxGallery from "@/components/ParallaxGallery";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonial";
import Usp from "@/components/Usp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <StatsSection/>
      <Testimonials/>
      <Usp/>
      <Projects/>
      <ParallaxGallery/>
      <InstagramReels/>
      <Process/>
      <FAQ/>
    </main>
  );
}
