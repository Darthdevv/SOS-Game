"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ArrowDown from "../../../public/ArrowDown";
import { motion } from "framer-motion";

const languages = ["ENG", "RUS", "FRA", "DEU"];

export default function Home() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENG");
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/images/bg image 1.jpg')" }}
      role="main"
    >
      {/* Navbar */}
      <nav
        className="flex justify-between items-center px-6 py-4"
        aria-label="Main Navigation"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Game Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        <ul
          className="hidden md:flex gap-6 uppercase text-sm font-semibold"
          role="menubar"
        >
          <li role="none">
            <a
              href="#main"
              role="menuitem"
              className="hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            >
              Main
            </a>
          </li>
          <li role="none">
            <a
              href="#about"
              role="menuitem"
              className="hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              href="#features"
              role="menuitem"
              className="hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            >
              Game Features
            </a>
          </li>
          <li role="none">
            <a
              href="#requirements"
              role="menuitem"
              className="hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            >
              System Requirements
            </a>
          </li>
          <li role="none">
            <a
              href="#quotes"
              role="menuitem"
              className="hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            >
              Quotes
            </a>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div className="relative text-sm" ref={langDropdownRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 hover:text-yellow-400 focus:outline focus:outline-yellow-400"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label="Select language"
          >
            {currentLang} <ChevronDown size={16} aria-hidden />
          </button>
          {langOpen && (
            <ul
              className="absolute top-full right-0 mt-2 bg-black text-white border rounded shadow-md z-50"
              role="listbox"
            >
              {languages
                .filter((l) => l !== currentLang)
                .map((lang) => (
                  <li key={lang} role="option" aria-selected={false}>
                    <button
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-yellow-600 focus:outline focus:outline-yellow-600"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
          Survive at all costs
        </h1>
        <p className="text-sm md:text-base mb-6 tracking-widest">
          Experience New Social Battle Royale Game
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline focus:outline-black"
          aria-label="Buy now on Steam for 14.99 dollars"
        >
          Buy now on Steam &nbsp;|&nbsp; $14.99
        </button>
      </header>

      {/* Footer */}
      <footer
        className="flex flex-col gap-1 items-center justify-center text-center text-md pb-4 uppercase tracking-wider"
        aria-label="Scroll indicator"
      >
        <span className="text-white/70">The Story</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="mt-1"
          aria-hidden="true"
        >
          <ArrowDown />
        </motion.span>
      </footer>
    </section>
  );
}
