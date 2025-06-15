"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandDiscord,
} from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer
      className="bg-black text-white py-13"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-wrap md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start order-1 max-sm:order-1">
            <Link href="/" aria-label="SOS Game Homepage">
              <Image
                src="/icons/logo.png"
                alt="SOS Game Logo"
                width={isMobile ? 50 : 100}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base order-2 max-sm:order-3"
            aria-label="Footer Navigation"
          >
            <Link href="#main" className="hover:text-yellow-400">
              MAIN
            </Link>
            <Link href="#about" className="hover:text-yellow-400">
              ABOUT
            </Link>
            <Link href="#game-features" className="hover:text-yellow-400">
              GAME FEATURES
            </Link>
            <Link href="#system-requirements" className="hover:text-yellow-400">
              SYSTEM REQUIREMENTS
            </Link>
            <Link href="#quotes" className="hover:text-yellow-400">
              QUOTES
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div
            className="flex justify-center md:justify-end space-x-4 order-3 max-sm:order-2"
            aria-label="Social media links"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconBrandFacebook
                className="hover:text-yellow-400"
                size={isMobile ? 20 : 24}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <IconBrandTwitter
                className="hover:text-yellow-400"
                size={isMobile ? 20 : 24}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <IconBrandYoutube
                className="hover:text-yellow-400"
                size={isMobile ? 20 : 24}
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <IconBrandDiscord
                className="hover:text-yellow-400"
                size={isMobile ? 20 : 24}
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 my-6" />

        {/* Legal Info */}
        <div className="flex max-sm:flex-col items-center justify-between text-center text-xs md:text-sm space-y-2">
          <p className="text-white/50">
            © 2018 Outpost Games, Inc. All Rights Reserved
          </p>
          <div
            className="flex justify-center flex-wrap gap-2"
            aria-label="Legal links"
          >
            <Link href="#privacy" className="hover:text-yellow-400">
              PRIVACY POLICY
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#terms" className="hover:text-yellow-400">
              TERMS OF SERVICES
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#code" className="hover:text-yellow-400">
              CODE OF CONDUCT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
