"use client";
import { Carousel } from "../Carousel";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/bg image 3.jpg')" }}
    >

      {/* Content */}
      <div className="relative z-20 w-full flex items-center justify-center">
        <Carousel />
      </div>
    </section>
  );
};

export default AboutSection;
