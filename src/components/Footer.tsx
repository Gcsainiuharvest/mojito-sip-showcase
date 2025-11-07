import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-600 to-green-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Fresh Mojito</h3>
            <p className="font-poppins text-sm text-white/80">
              Refreshingly desi, naturally delicious. Made with love and fresh ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="#" className="hover:text-lime-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Flavors</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li><a href="#" className="hover:text-lime-300 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Combo Packs</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-lime-300 transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="font-poppins text-sm text-white/80">
              Stay connected for exclusive offers!
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-poppins text-sm text-white/60">
            © 2025 Fresh Mojito. All rights reserved. Made with 💚 in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
