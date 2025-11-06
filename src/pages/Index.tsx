import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FlavorsSection from "@/components/FlavorsSection";
import IngredientsSection from "@/components/IngredientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-poppins">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FlavorsSection />
      <IngredientsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
