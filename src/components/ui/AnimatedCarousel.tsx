"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  width: number;
  height: number;
};

export const AnimatedCarousel = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const rotations = useMemo(() => {
    return testimonials.map(() => Math.floor(Math.random() * 21) - 10);
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    setIsClient(true);
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  if (!isClient) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.src}
                  className="absolute inset-0 origin-bottom"
                  style={{
                    opacity: 0,
                    transform: `translateZ(-100px) scale(0.9) rotate(0deg)`,
                  }}
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${testimonial.width} / ${testimonial.height}`,
                    }}
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={testimonial.width}
                      height={testimonial.height}
                      draggable={false}
                      className="w-full h-auto rounded-3xl object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col justify-between py-4">
            <div>
              <h2 className="text-2xl  text-white font-bebas-neue font-normal tracking-[2px]">
                {testimonials[0].name}
              </h2>
              <p className=" text-[5rem] text-white font-bebas-neue font-normal leading-none tracking-normal mt-2">
                {testimonials[0].designation}
              </p>
              <p className="mt-12.5 text-lg text-white font-open-sans font-normal text-[18px] tracking-normal">
                {testimonials[0].quote}
              </p>
            </div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                aria-label="Previous Slide"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
              </button>
              <button
                aria-label="Next Slide"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${testimonial.width} / ${testimonial.height}`,
                    }}
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={testimonial.width}
                      height={testimonial.height}
                      draggable={false}
                      className="w-full h-auto rounded-3xl object-cover object-center"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 max-sm:pt-25">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h2 className=" text-2xl  text-white font-bebas-neue font-normal tracking-[2px]">
              {testimonials[active].name}
            </h2>
            <p className=" text-[5rem] text-white font-bebas-neue font-normal leading-none mt-2 tracking-normal">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-12.5 text-lg text-white font-open-sans font-normal text-[18px] tracking-normal">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline"
                >
                  {word + " "}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-5">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
