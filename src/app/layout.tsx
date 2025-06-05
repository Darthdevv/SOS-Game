import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/ui/Footer";

// const ibmPlexSans = localFont({
//   src: [
//     { path: "../../public/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
//     { path: "../../public/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
//     { path: "../../public/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
//     { path: "../../public/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
//   ],
// });

const bebasNeue = localFont({
  src: [
    { path: "../../public/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
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
    <html lang="en">
      <body
        className={`${bebasNeue.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
