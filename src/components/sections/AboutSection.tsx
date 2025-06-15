"use client";
import Image from "next/image";
import { Carousel } from "../Carousel";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/bg image 3.jpg"
        alt="SOS Game Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-20 w-full">
        <Carousel />
      </div>
    </section>
  );
};

export default AboutSection;
