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
      className="relative min-h-screen flex items-center justify-start bg-black text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg image 6.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />

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
            className="text-sm text-gray-400 uppercase tracking-widest mb-2"
          >
            What people think?
          </h1>
          <h2 className="text-4xl font-bold uppercase mb-6">Press Quotes</h2>
          <p className="text-gray-300 mb-8">
            Our goal is to create a product and service that you&apos;re satisfied
            with and use every day. This is why we’re constantly working on our
            services to make them better and truly listen to what our users have
            to say.
          </p>
          <button
            className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded hover:bg-yellow-400 transition"
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
                <Image
                  src={item.img}
                  alt={`Photo of ${item.name}`}
                  width={62}
                  height={62}
                  className="rounded-full mr-8 object-cover"
                />
                <div>
                  <h3 className="text-yellow-500 font-normal text-xl">
                    {item.name}
                  </h3>
                  <p className="text-base text-gray-400">{item.role}</p>
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

              <blockquote className="text-md text-gray-200 my-3">
                “{item.quote}”
              </blockquote>
              <p className="text-xs text-gray-500">{item.date}</p>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
