import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import SubscribeSection from "@/components/sections/SubscribeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RequirementsSection />
      <TestimonialsSection/>
      <SubscribeSection />
    </div>
  );
}
