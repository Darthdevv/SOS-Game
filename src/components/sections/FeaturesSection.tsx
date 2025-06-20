"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const features = [
  {
    title: "SURVIVE AT ALL COSTS",
    description:
      "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
  },
  {
    title: "CREATE ALLIES & ENEMIES",
    description:
      "Form alliances with other players to increase your chances of survival, but be wary of betrayal. Every decision counts.",
  },
  {
    title: "IMPRESS THE AUDIENCE",
    description:
      "The game is broadcast live, so your actions are watched by an audience. Gain their favor to increase your chances of survival.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturesSection() {
  const [selected, setSelected] = useState(0);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(index);
    }
  };

  return (
    <section
      id="game-features"
      aria-labelledby="features-heading"
      className="relative min-h-screen bg-black bg-cover bg-center text-white flex items-center justify-end"
      style={{ backgroundImage: "url('/images/bg image 4.jpg')" }}
    >
      <div className="absolute inset-0 max-sm:bg-gradient-to-r max-sm:from-black/80 max-sm:via-black/50 max-sm:to-transparent z-0" />

      <motion.div
        className="relative z-10 max-w-2xl px-6 py-10 md:py-20 md:pr-12 md:pl-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-2xl text-white font-bebas-neue font-normal tracking-[2px]"
          variants={itemVariants}
        >
          What’s so special?
        </motion.p>

        <motion.h2
          id="features-heading"
          className="text-[5rem] text-white font-bebas-neue font-normal leading-none mt-2 tracking-[3px] mb-12.5"
          variants={itemVariants}
        >
          Features
        </motion.h2>

        <motion.ul
          className="space-y-6"
          role="radiogroup"
          aria-label="Feature selection"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              role="radio"
              aria-checked={selected === index}
              tabIndex={0}
              onClick={() => setSelected(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={clsx(
                "cursor-pointer border border-white/20 p-4 rounded-lg bg-black/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#FFB548] transition-colors",
                selected === index && "bg-white/10"
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={clsx(
                    "w-3 h-3 rounded-full mt-1 border border-white/20 transition-all shrink-0",
                    selected === index
                      ? "bg-[#FFB548] border-[#FFB548] "
                      : "bg-transparent"
                  )}
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className={clsx(
                      "uppercase mb-1 transition-colors font-bebas-neue font-normal text-4xl tracking-[2px]",
                      selected === index ? "text-[#FFB548]" : "text-white"
                    )}
                  >
                    {feature.title}
                  </h3>
                  {selected === index && feature.description && (
                    <p className="text-gray-300 text-lg transition-opacity font-open-sans font-normal">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
