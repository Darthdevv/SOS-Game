"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quotes = [
  {
    name: "Evan Lahti",
    role: "PC Gamer",
    quote: "One of my gaming highlights of the year.",
    date: "October 18, 2018",
    img: "/images/photo.png",
  },
  {
    name: "Jada Griffin",
    role: "Nerdreactor",
    quote: "The next big thing in the world of streaming and survival games.",
    date: "December 21, 2018",
    img: "/images/photo (1).png",
  },
  {
    name: "Aaron Williams",
    role: "Uproxx",
    quote: "Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.",
    date: "December 24, 2018",
    img: "/images/photo (2).png",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="quotes"
      aria-labelledby="quotes-heading"
      className="relative min-h-screen flex items-center justify-start text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg image 6.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="hidden sm:absolute inset-0 z-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1
            id="quotes-heading"
            className="text-2xl text-white font-bebas-neue font-normal tracking-[2px] mb-2"
          >
            What people think?
          </h1>
          <h2 className="text-[5rem] text-white font-bebas-neue font-normal leading-none tracking-[3px] mb-12.5">
            Press Quotes
          </h2>
          <p className="mb-12.5 text-lg text-white font-open-sans font-normal text-[18px] tracking-normal">
            Our goal is to create a product and service that you&apos;re
            satisfied with and use every day. This is why we’re constantly
            working on our services to make them better and truly listen to what
            our users have to say.
          </p>
          <button
            className="bg-[#FFB548] text-black px-5 py-3 rounded hover:bg-[#FFB548] transition font-open-sans font-bold"
            aria-label="Read more testimonials"
          >
            Read more testimonials
          </button>
        </motion.div>

        {/* Right Column */}
        <div className="space-y-6 w-full">
          {quotes.map((item, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 p-5 rounded-lg border border-white/10 backdrop-blur-md shadow-md"
            >
              <figcaption className="flex items-center mb-3">
                <div className="relative w-[62px] h-[62px] mr-8">
                  {/* Outer golden circle */}
                  <div className="absolute inset-0 rounded-full z-0" />

                  {/* Inner black circle that cuts into the golden one to form a crescent */}
                  <div className="absolute -right-[8px] top-1 w-[62px] h-[62px] bg-[#FFB548] rounded-full z-10" />

                  {/* Avatar image clipped into a circle */}
                  <Image
                    src={item.img}
                    alt={`Photo of ${item.name}`}
                    fill
                    quality={100}
                    className="rounded-full object-cover z-20"
                  />
                </div>

                <div>
                  <h3 className="text-[#FFB548] uppercase mb-1 transition-colors font-bebas-neue font-normal text-2xl tracking-[2px]">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-lg transition-opacity font-open-sans font-normal">
                    {item.role}
                  </p>
                </div>
                <div className="ml-auto text-gray-600" aria-hidden="true">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.87-2.36 8.52 8.52 0 01-2.7 1.03 4.25 4.25 0 00-7.29 3.87 12.04 12.04 0 01-8.75-4.44 4.25 4.25 0 001.32 5.67 4.25 4.25 0 01-1.92-.53v.05a4.25 4.25 0 003.41 4.17 4.27 4.27 0 01-1.92.07 4.25 4.25 0 003.97 2.95A8.54 8.54 0 012 19.54a12.05 12.05 0 006.53 1.92c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.36-.01-.54A8.56 8.56 0 0024 4.56a8.47 8.47 0 01-2.54.7z" />
                  </svg>
                </div>
              </figcaption>

              <blockquote className="text-white text-lg transition-opacity font-open-sans font-normal mt-6">
                “{item.quote}”
              </blockquote>
              <p className="text-white/40 text-sm transition-opacity font-open-sans font-normal mt-3.5">
                {item.date}
              </p>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
