import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductsSection from "@/components/ProductsSection";
import FlavorsSection from "@/components/FlavorsSection";
import IngredientsSection from "@/components/IngredientsSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandSlider from "@/components/BrandSlider";
import UpcomingSection from "@/components/UpcomingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-poppins">
      <Navigation />
      <HeroSection />
      <BrandSlider />
      <AboutSection />
      <ProductShowcase />
      <ProductsSection />
      <UpcomingSection />
      <FlavorsSection />
      <IngredientsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
