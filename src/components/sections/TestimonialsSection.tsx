import Image from "next/image";


const TestimonialsSection = () => {
  return (
        <section
          id="about"
          className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/images/bg image 6.jpg"
            alt="SOS Game Hero Background"
            fill
            className="object-cover "
            priority
          />

          {/* Content */}
          
        </section>
  );
}

export default TestimonialsSection

