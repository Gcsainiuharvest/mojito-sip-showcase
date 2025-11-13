import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#99cc33] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/images/logo.png"
              alt="Gupta Ji Ki Mojito Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="font-poppins text-sm text-white/80">
               India’s Taste of Chill. Gupta ji ki Mojito
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="#about" className="hover:text-lime-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Shop</a></li>
              <li><a href="#contact" className="hover:text-lime-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a> */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
            <p className="font-poppins text-sm text-white/80">
              Follow the chill -  @GuptaJiKiMojito
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-2">
              <img
                src="/images/makeinindia.png"
                alt="Make in India Logo"
                className="h-16 w-auto"
              />
              <img
                src="/images/fssai-logo.png"
                alt="FSSAI Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="font-poppins text-sm text-white/80 text-center md:text-right">
              FSSAI License No: 12345678901234
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-poppins text-sm text-white/60">
           © 2025 Gupta Ji Ki Mojito - Refreshing India, one chill at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
