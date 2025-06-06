import Image from "next/image";

export default function SubscribeSection() {
  return (
    <section className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <Image
          src="/images/image (4).png"
          alt="SOS Game Hero Background"
          width={500}
          height={500}
          className="object-cover "
          priority
        />
        {/* Heading and Description */}
        <div className="text-center md:text-left md:w-1/2">
          <div>
            <h2 className="text-3xl md:text-3xl font-extrabold mb-4 font-bebas-neue tracking-wide uppercase">
              want to stay in touch ?
            </h2>
            <h3 className="text-5xl md:text-5xl font-extrabold mb-4 font-bebas-neue tracking-wide uppercase">
              Newsletter subscribe
            </h3>
            <p className="text-lg md:text-xl text-gray-400">
              In order to start receiving our news, all you have to do is enter
              your email address. Everything else will be taken care of by us.
              We will send you emails containing information about game. We
              don’t spam.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="w-full flex flex-col sm:flex-row gap-4 mt-5">
            <input
              type="email"
              placeholder="aliciliniavopir@gmail.com"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-500"
              aria-label="Email address"
            />
            <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-bebas-neue">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
