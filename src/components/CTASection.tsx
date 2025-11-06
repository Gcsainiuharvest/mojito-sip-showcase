import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-fresh relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-playfair font-black text-primary-foreground mb-6 leading-tight">
          Ready to Experience
          <span className="block italic">Freshness?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-poppins mb-12 max-w-2xl mx-auto">
          Order now and get your first taste of our refreshingly desi mojito delivered fresh to your doorstep!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-poppins font-bold px-12 py-7 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Order Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-poppins font-bold px-12 py-7 text-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 text-primary-foreground">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div className="font-poppins">
              <p className="text-sm opacity-80">Call Us</p>
              <p className="font-semibold">+92 300 1234567</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-primary-foreground">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-poppins">
              <p className="text-sm opacity-80">Email Us</p>
              <p className="font-semibold">hello@freshmojito.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-primary-foreground">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="font-poppins">
              <p className="text-sm opacity-80">Visit Us</p>
              <p className="font-semibold">Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
