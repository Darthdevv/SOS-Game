"use client";
import Image from "next/image";
import { Carousel } from "../Carousel";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen text-white flex items-center justify-center"
    >
      <Image
        src="/images/bg image 3.jpg"
        alt="About section background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover z-0"
      />
      <div className="relative z-10 w-full">
        <Carousel />
      </div>
    </section>
  );
};

export default AboutSection;
