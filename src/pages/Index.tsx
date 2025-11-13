import { useEffect } from "react";
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
import BannerSection from "@/components/BannerSection";
import UpcomingSection from "@/components/UpcomingSection";
import Footer from "@/components/Footer";
const Index = () => {

  
  

  return (
    <main className="min-h-screen font-poppins">
      <Navigation />
      <HeroSection />
    
        <BrandSlider />

      <BannerSection />
      {/* <AboutSection /> */}
      <ProductShowcase />
      {/* <ProductsSection /> */}
      {/* <UpcomingSection /> */}
      {/* <FlavorsSection /> */}
      {/* <IngredientsSection /> */}
      <TestimonialsSection />
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="//lightwidget.com/widgets/90ca9f1b81e45b9bbee2e66031f894de.html"
        allowTransparency="true"
        class="lightwidget-widget"
        style={{ width: "100%", border: 0, overflow: "hidden", height: "250px" }}
      ></iframe>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
