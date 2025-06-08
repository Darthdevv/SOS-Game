"use client";
import { motion } from "framer-motion";

const requirements = [
  {
    title: "OS:",
    value: "Windows 7 64-bit only\n(No OSX support at this time)",
  },
  {
    title: "Processor:",
    value: "Intel Core 2 Duo @ 2.4 GHZ\nor AMD Athlon X2 @ 2.8 GHZ",
  },
  { title: "Memory:", value: "8GB RAM" },
  { title: "Storage:", value: "8GB available space" },
  {
    title: "Graphics:",
    value:
      "NVIDIA GeForce GTX 660 2GB\nor AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)",
  },
];

export default function SystemRequirements() {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-black text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg image 5.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-5xl w-full px-4 py-20 text-start"
      >
        <p className="text-sm uppercase text-gray-400 tracking-widest mb-2">
          Can my computer run this game?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-12">
          System Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {requirements.map((item, i) => (
            <motion.div
              key={i}
              className="border border-white/20 p-4 rounded-lg bg-black/40 backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-yellow-500 font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="whitespace-pre-line text-gray-300 text-sm">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
