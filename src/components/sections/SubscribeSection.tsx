"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SubscribeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="bg-black text-white py-12 md:py-16"
      role="region"
      aria-labelledby="subscribe-heading"
    >
      <div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8"
        ref={ref}
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <Image
            src="/images/image (4).png"
            alt="A character from the SOS game"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <p className="text-sm text-gray-400 uppercase mb-2 font-semibold tracking-wide">
            Want to stay in touch?
          </p>
          <h2
            id="subscribe-heading"
            className="text-4xl md:text-5xl font-extrabold uppercase mb-6"
          >
            Newsletter Subscribe
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-lg leading-relaxed">
            To start receiving our updates, enter your email address. We’ll take
            care of the rest. We don’t spam.
          </p>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row gap-4"
            aria-label="Subscribe to our newsletter"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="bg-zinc-900 text-yellow-400 placeholder-gray-400 px-5 py-3 rounded w-full sm:w-2/3 outline-none"
              aria-required="true"
              aria-label="Your email address"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition w-full sm:w-auto"
            >
              Subscribe now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
