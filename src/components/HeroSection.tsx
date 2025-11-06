import { Button } from "@/components/ui/button";
import { Leaf, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/GPJKM_BannerVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <Leaf className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-poppins font-medium text-primary-foreground">100% Natural & Fresh</span>
          </div>
          
          <h1 className="mb-6 text-6xl md:text-8xl font-playfair font-black text-primary-foreground leading-none">
            <span className="block">Har Sip</span>
            <span className="block italic bg-gradient-fresh bg-clip-text text-transparent">Mein Freshness!</span>
          </h1>
          
          <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 font-poppins font-light max-w-2xl mx-auto">
            Experience the perfect blend of fresh mint, zesty lime, and natural ingredients. 
            <span className="block mt-2 font-medium">Refreshingly Desi, Naturally Delicious.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-glow text-primary-foreground font-poppins font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-poppins font-semibold px-8 py-6 text-lg border-2 border-primary-foreground/30 text-primary-foreground bg-transparent backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
            >
              View Flavors
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-slide-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
