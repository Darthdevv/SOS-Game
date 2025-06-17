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
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
      role="main"
    >
      {/* Navbar */}
      <nav
        className="relative z-20 flex container mx-auto justify-between items-center px-6 py-4 font-open-sans font-bold"
        aria-label="Main Navigation"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Game Logo"
            width={55}
            height={55}
            priority
          />
        </div>

        <ul
          className="hidden lg:flex gap-12 uppercase text-sm"
          role="menubar"
        >
          <li role="none">
            <a
              href="#main"
              role="menuitem"
              className="hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            >
              Main
            </a>
          </li>
          <li role="none">
            <a
              href="#about"
              role="menuitem"
              className="hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              href="#game-features"
              role="menuitem"
              className="hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            >
              Game Features
            </a>
          </li>
          <li role="none">
            <a
              href="#system-requirements"
              role="menuitem"
              className="hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            >
              System Requirements
            </a>
          </li>
          <li role="none">
            <a
              href="#quotes"
              role="menuitem"
              className="hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            >
              Quotes
            </a>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div
          className="flex flex-row gap-4 items-center justify-center relative text-sm font-open-sans font-bold"
          ref={langDropdownRef}
        >
          <button
            type="button"
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label="Select language"
          >
            {currentLang} <ChevronDown size={16} aria-hidden />
          </button>
          {langOpen && (
            <ul
              className="absolute top-full right-28 mt-2 w-[3.375rem]  bg-black text-white shadow-md z-50"
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
                      className="block items-start justify-start w-full mr-auto text-left px-2 py-0.5 hover:text-[#FFB548] focus:outline focus:outline-[#FFB548]"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
            </ul>
          )}
          {/* Divider */}
          <div className="h-7 w-px bg-white/30"></div>

          <div className="flex items-center gap-2">
            <Image
              src="/icons/xbox icon.png"
              alt="Xbox icon"
              width={30}
              height={30}
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/steam icon.png"
              alt="Steam icon"
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 py-10 -mt-24">
        <h1 className="text-4xl md:text-8xl font-bold mb-4 uppercase font-bebas-neue">
          Survive at all costs
        </h1>
        <p className="text-2xl max-sm:text-base mb-6 font-bebas-neue font-normal ">
          Experience New Social Battle Royale Game
        </p>
        <button
          className="bg-[#FFB548] hover:bg-[#ffb648cc] text-black font-bold py-2 max-sm:text-xs px-4 rounded focus:outline focus:outline-black font-open-sans"
          aria-label="Buy now on Steam for 14.99 dollars"
        >
          Buy now on Steam &nbsp;|&nbsp; $14.99
        </button>
      </header>

      {/* Footer */}
      <footer
        className="flex flex-col gap-1 items-center justify-center text-center text-md pb-4 uppercase tracking-wider font-open-sans font-bold"
        aria-label="Scroll indicator"
      >
        <span className="text-xs">The Story</span>
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
