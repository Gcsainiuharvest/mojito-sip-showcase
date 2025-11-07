import { useEffect, useRef, useState } from "react";
import mintBottle from "@/assets/product-mint.png";
import watermelonBottle from "@/assets/product-watermelon.png";
import strawberryBottle from "@/assets/product-strawberry.png";

const ProductShowcase = () => {
  const products = [
    {
      name: "Strawberry - The Heartbreaker",
      tagline: "Main sweet bhi hoon, savage bhi.",
      description: [
        'Soft smile. Sharp flavour. Instant crush.She flirts, she teases, she leaves you on "seen".Every sip = red-flag worth falling for."Pehla sip, last crush - thats me.”'
      ],
      image: strawberryBottle,
      color: "from-red-400 to-pink-500",
      emoji: "🍓"
    },
    {
      name: "Watermelon - The Drama Queen",
      tagline: "Main extra hoon - aur proud of it.",
      description: [
        "She doesn’t enter a room - she arrives.Juicy, filmy, and full of gossip energy.Sweet talker, attention grabber, total head-turner.“Main hi climax hoon, baaki sab filler scene.”"
      ],
      image: watermelonBottle,
      color: "from-red-400 to-pink-500",
      emoji: "🍉"
    },
    {
      name: "Mint - The OG Cool Boi",
      tagline: "Main chill hoon, tu bhi ho ja.",
      description: [
        "Mint’s that unbothered legend.Cooler than your ex’s excuses, fresher than Monday motivation.When life gets heated - Mint just says, “Bhai, relax.”“Main cool hoon by default, not effort.”"
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



const ProductSection = ({ product, index }) => {
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
      className={`relative py-20 px-4 md:px-8 lg:px-12 overflow-hidden ${
        index % 2 === 0 ? "bg-background" : "bg-muted/30"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`relative grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : isEven
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
        } ${!isEven ? "md:flex-row-reverse" : ""}`}>
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
              className="relative z-10 h-[400px] w-auto object-contain"
            />
          </div>

          {/* Text Side */}
          <div className={`space-y-6 ${!isEven ? "md:order-1" : ""}`}>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-playfair font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}
            >
              {product.name}
            </h2>
            <h3 className="text-foreground">{product.tagline}</h3>
            <div className="space-y-3">
              {product.description.map((line: string, i: number) => (
                <p
                  key={i}
                  className="text-lg md:text-xl text-foreground font-poppins"
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
