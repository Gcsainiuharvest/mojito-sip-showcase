import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import bottlesImage from "@/assets/bottles-hands.png";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 bottom-0 w-full md:w-2/3 lg:w-1/2 h-2/3 md:h-3/4 lg:h-full flex items-end justify-end pointer-events-none">
        <img 
          src={bottlesImage} 
          alt="Gupta Ji Ki Mojito bottles" 
          className="h-full w-auto object-contain object-right-bottom opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
            Contact Us
          </h2>
          
          <p className="text-lg text-gray-200 font-poppins mb-8 leading-relaxed">
            Have feedback, questions, or just wanna say "bhot badiya hai"?<br />
            We're listening.
          </p>

          <ul className="space-y-4 mb-8 text-white font-poppins">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded-sm flex-shrink-0" />
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@guptajikishikanji.in</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded-sm flex-shrink-0" />
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded-sm flex-shrink-0" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Delhi, India</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 bg-white/20 rounded-sm flex-shrink-0" />
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Available</span>
              </div>
            </li>
          </ul>

          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white font-poppins font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
