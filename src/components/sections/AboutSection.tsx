import Image from "next/image";
import { AnimatedTestimonialsDemo } from "../Testimonials";



const AboutSection = () => {


  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/bg image 3.jpg"
        alt="SOS Game Hero Background"
        fill
        className="object-cover "
        priority
      />

      {/* Content */}
      <AnimatedTestimonialsDemo/>
    </section>
  );
}

export default AboutSection
