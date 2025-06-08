"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const languages = ["ENG", "RUS", "FRA", "DEU"];

export default function Home() {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENG");

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/images/bg image 1.jpg')" }}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="flex items-center gap-2">
          <Image src="/icons/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="hidden md:flex gap-6 uppercase text-sm font-semibold">
          <a href="#main" className="hover:text-yellow-400">
            Main
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#features" className="hover:text-yellow-400">
            Game Features
          </a>
          <a href="#requirements" className="hover:text-yellow-400">
            System Requirements
          </a>
          <a href="#quotes" className="hover:text-yellow-400">
            Quotes
          </a>
        </div>

        {/* Language Dropdown */}
        <div className="relative text-sm">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 hover:text-yellow-400"
          >
            {currentLang} <ChevronDown size={16} />
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 bg-black text-white border rounded shadow-md z-50">
              {languages
                .filter((l) => l !== currentLang)
                .map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-yellow-600 cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 py-10 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
          Survive at all costs
        </h1>
        <p className="text-sm md:text-base mb-6 tracking-widest">
          Experience New Social Battle Royale Game
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
          Buy now on Steam &nbsp;|&nbsp; $14.99
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs pb-4 uppercase tracking-wider">
        <span className="text-white/70">▼ The Story ▼</span>
      </div>
    </div>
  );
}
