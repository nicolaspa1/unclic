import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { StatsSection } from "@/components/landing/StatsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TechStack } from "@/components/landing/TechStack";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <StatsSection />
      <HowItWorks />
      <ServicesSection />
      <TechStack />
      <ProductsSection />
      <ReviewsSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
