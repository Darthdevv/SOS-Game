import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandDiscord,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 md:py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/icons/logo.png" // Replace with your SOS logo path
              alt="SOS Game Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 text-sm md:text-base">
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

        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook
              className="text-white hover:text-yellow-400"
              size={24}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter
              className="text-white hover:text-yellow-400"
              size={24}
            />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube
              className="text-white hover:text-yellow-400"
              size={24}
            />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandDiscord
              className="text-white hover:text-yellow-400"
              size={24}
            />
          </a>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center text-xs md:text-sm">
          <p className="mb-2">© 2018 Outpost Games, Inc. All Rights Reserved</p>
          <div className="space-x-2">
            <Link href="#privacy" className="hover:text-yellow-400">
              PRIVACY POLICY
            </Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-yellow-400">
              TERMS OF SERVICES
            </Link>
            <span>|</span>
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
