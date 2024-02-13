import TrustedBySection from "@/components/home/trusted-by-section";
import ServicesSection from "@/components/home/services-section";
import HeroSection from "@/components/home/hero-section";
import ContactSection from "@/components/home/contact-section";
import TestimonialSection from "@/components/home/testimonial-section";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
