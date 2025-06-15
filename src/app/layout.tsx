import type { Metadata } from "next";
import { Open_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

// Load fonts with proper variable names
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: {
    template: "%s | SOS Game",
    default: "SOS Game - Save the World",
  },
  description: "Official landing page for SOS Game.",
  icons: {
    icon: "/icons/logo.png",
    apple: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    other: {
      rel: "icon",
      url: "/icons/logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${bebasNeue.variable}`}>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
