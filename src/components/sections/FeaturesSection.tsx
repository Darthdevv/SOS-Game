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
    description: "Form alliances with other players to increase your chances of survival, but be wary of betrayal. Every decision counts.",
  },
  {
    title: "IMPRESS THE AUDIENCE",
    description: " The game is broadcast live, so your actions are watched by an audience. Gain their favor to increase your chances of survival.",
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

  return (
    <section
      className="relative min-h-screen bg-black bg-cover bg-center text-white flex items-center justify-end"
      style={{ backgroundImage: "url('/images/bg image 4.jpg')" }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 max-sm:bg-gradient-to-r max-sm:from-black/80 max-sm:via-black/50 max-sm:to-transparent z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl px-6 py-10 md:py-20 md:pr-12 md:pl-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm uppercase text-gray-400 tracking-widest mb-2"
          variants={itemVariants}
        >
          What’s so special?
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold uppercase mb-10"
          variants={itemVariants}
        >
          Features
        </motion.h2>

        <motion.ul className="space-y-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              onClick={() => setSelected(index)}
              className={clsx(
                "border border-white/20 p-4 rounded-lg bg-black/40 backdrop-blur-md",
                selected === index &&
                  "border border-white/20 p-4 rounded-lg bg-black/40 backdrop-blur-md"
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                {/* Dot */}
                <div
                  className={clsx(
                    "w-3 h-3 rounded-full mt-1 border border-white transition-all",
                    selected === index && "bg-yellow-400 border-yellow-400"
                  )}
                />
                {/* Text */}
                <div>
                  <h3
                    className={clsx(
                      "font-bold uppercase text-lg mb-1 transition-colors",
                      selected === index ? "text-yellow-400" : "text-white",
                      "group-hover:text-yellow-300"
                    )}
                  >
                    {feature.title}
                  </h3>
                  {selected === index && feature.description && (
                    <p className="text-gray-300 text-sm transition-opacity">
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
