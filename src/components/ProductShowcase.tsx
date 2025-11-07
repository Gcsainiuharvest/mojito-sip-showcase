import { useEffect, useRef, useState } from "react";
import mintBottle from "@/assets/product-mint.png";
import watermelonBottle from "@/assets/product-watermelon.png";
import nimbooBottle from "@/assets/mojito-nimboo.png";

const ProductShowcase = () => {
  const products = [
    {
      name: "Nimbu Mojito",
      tagline: "Taste ka Takkar, Refreshment ka Baap",
      description: [
        "a thandak tornado, a masala blast",
        "Cool, fizzy, and made with sass",
        "This is not just nimbu paani, bhai",
        "It's Guptaji Ki Shikanji, asli desi swag wali chai!"
      ],
      image: nimbooBottle,
      color: "from-lime-400 to-lime-600",
      emoji: "🍋"
    },
    {
      name: "Watermelon Mojito",
      tagline: "Garmi ka Toofan, Thandak ka Dhamaka",
      description: [
        "Sweet, juicy, aur poora refreshing",
        "Tarbooz wali feeling, totally amazing",
        "Har ghoont mein summer vibes",
        "This one's for the cool tribes!"
      ],
      image: watermelonBottle,
      color: "from-red-400 to-pink-500",
      emoji: "🍉"
    },
    {
      name: "Mint Mojito",
      tagline: "Pudina Power, Coolness ka Tower",
      description: [
        "Fresh mint, fizzy delight",
        "One sip aur everything's right",
        "Pudina wali chill, no tension",
        "This mojito deserves a special mention!"
      ],
      image: mintBottle,
      color: "from-emerald-400 to-green-600",
      emoji: "🌿"
    }
  ];

  return (
    <div className="w-full">
      {products.map((product, index) => (
        <ProductSection key={index} product={product} index={index} />
      ))}
    </div>
  );
};

const ProductSection = ({ product, index }: { product: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 px-4 overflow-hidden ${
        index % 2 === 0 ? "bg-background" : "bg-muted/30"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
          {/* Image Side */}
          <div
            className={`relative h-[500px] flex items-center justify-center ${
              !isEven ? "md:order-2" : ""
            }`}
          >
            {/* Floating Emojis */}
            <div
              className={`absolute top-10 left-10 text-6xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              {product.emoji}
            </div>
            <div
              className={`absolute top-20 right-20 text-5xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
            >
              {product.emoji}
            </div>
            <div
              className={`absolute bottom-20 left-20 text-4xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {product.emoji}
            </div>
            <div
              className={`absolute bottom-10 right-10 text-6xl transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {product.emoji}
            </div>

            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20`}
            />

            {/* Product Bottle */}
            <img
              src={product.image}
              alt={product.name}
              className={`relative z-10 h-[400px] w-auto object-contain transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-12"
              }`}
            />
          </div>

          {/* Text Side */}
          <div className={`space-y-6 ${!isEven ? "md:order-1" : ""}`}>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {product.tagline}
            </h2>
            <div className="space-y-3">
              {product.description.map((line: string, i: number) => (
                <p
                  key={i}
                  className={`text-lg md:text-xl text-foreground/80 font-poppins transition-all duration-700`}
                  style={{
                    transitionDelay: `${(i + 2) * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)"
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
