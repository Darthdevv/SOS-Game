import Image from "next/image";
import Header from "../ui/Header";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden aspect-auto">
      {/* Background Image */}
      <Image
        src="/images/bg image 1.jpg"
        alt="SOS Game Hero Background"
        fill
        className="object-cover "
        priority
      />

      {/* Navigation Bar */}
      <Header />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          SURVIVE AT ALL COSTS
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Experience new social battle royale game
        </p>
        <button>
          <Link
            href='#buy'
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Buy now on Steam - $14.99
          </Link>
        </button>
        <p className="mt-6 text-lg">
          THE STORY <span className="ml-2">▼</span>
        </p>
      </div>
    </section>
  );
}
