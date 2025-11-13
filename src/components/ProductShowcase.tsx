import { useEffect, useRef, useState } from "react";
import mintBottle from "@/assets/product-mint.png";

const ProductShowcase = () => {
  const products = [
    {
      name: "FRESH MINT",
      tagline: "The Beginning",
      price: "₹10",
      description: "It all starts with the freshest mint leaves, handpicked for their vibrant aroma and cooling essence. This is where the magic begins - the foundation of every perfect mojito.",
      image: mintBottle,
      gradient: "from-emerald-500 via-green-400 to-emerald-600",
      accentColor: "rgb(16, 185, 129)",
      emoji: "🌿",
      decorEmojis: ["🌿", "🍃", "✨"]
    },
    {
      name: "PERFECT BLEND",
      tagline: "The Crafting",
      price: "₹10",
      description: "Each bottle is carefully crafted with premium ingredients - fresh mint, zesty lime, and just the right touch of sweetness. Mixed to perfection for that authentic mojito experience.",
      image: mintBottle,
      gradient: "from-emerald-500 via-green-400 to-emerald-600",
      accentColor: "rgb(16, 185, 129)",
      emoji: "🌿",
      decorEmojis: ["🌿", "🍋", "💫"]
    },
    {
      name: "PURE REFRESHMENT",
      tagline: "The Experience",
      price: "₹10",
      description: "The final result - a perfectly balanced mojito that refreshes instantly. Cool, crisp, and incredibly satisfying. This is the taste that turns every moment into a celebration.",
      image: mintBottle,
      gradient: "from-emerald-500 via-green-400 to-emerald-600",
      accentColor: "rgb(16, 185, 129)",
      emoji: "🌿",
      decorEmojis: ["🌿", "✨", "🎉"]
    }
  ];

  return (
    <div className="w-full relative">
      {/* Connecting Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-green-400 to-emerald-600 hidden md:block z-0 opacity-30" />
      
      {products.map((product, index) => (
        <div key={index} className="relative">
          <ProductSection product={product} index={index} />
          
          {/* Timeline Node */}
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-background hidden md:block z-10 shadow-lg"
            style={{ top: '50%' }}
          />
        </div>
      ))}
    </div>
  );
};



const ProductSection = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 bg-gradient-to-br ${product.gradient} rounded-full blur-3xl opacity-10 transition-all duration-1000 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            top: isEven ? '10%' : 'auto',
            bottom: isEven ? 'auto' : '10%',
            left: isEven ? '5%' : 'auto',
            right: isEven ? 'auto' : '5%',
          }}
        />
        <div 
          className={`absolute w-72 h-72 bg-gradient-to-br ${product.gradient} rounded-full blur-3xl opacity-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            top: isEven ? 'auto' : '20%',
            bottom: isEven ? '20%' : 'auto',
            left: isEven ? 'auto' : '10%',
            right: isEven ? '10%' : 'auto',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div 
          className={`relative grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "md:flex-row-reverse" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Side with Enhanced Animations */}
          <div
            className={`relative h-[600px] flex items-center justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : isEven
                  ? "opacity-0 -translate-x-20 scale-90"
                  : "opacity-0 translate-x-20 scale-90"
            } ${!isEven ? "md:order-2" : ""}`}
          >
            {/* Dynamic Floating Decorative Elements */}
            {product.decorEmojis.map((emoji, idx) => (
              <div
                key={idx}
                className={`absolute text-4xl md:text-6xl transition-all duration-700 ${
                  isVisible ? "opacity-70 animate-float" : "opacity-0"
                } ${isHovered ? 'scale-125' : 'scale-100'}`}
                style={{
                  top: `${15 + idx * 25}%`,
                  left: idx % 2 === 0 ? '5%' : 'auto',
                  right: idx % 2 === 1 ? '5%' : 'auto',
                  animationDelay: `${idx * 0.3}s`,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
                  transition: 'all 0.7s ease-out'
                }}
              >
                {emoji}
              </div>
            ))}

            {/* Glowing Gradient Card Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-3xl opacity-10 blur-2xl transition-all duration-1000 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
              } ${isHovered ? 'opacity-20 scale-110' : ''}`}
            />

            {/* Accent Ring */}
            <div
              className={`absolute inset-8 border-2 rounded-3xl transition-all duration-1000 ${
                isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                borderImage: `linear-gradient(135deg, ${product.accentColor}, transparent) 1`,
              }}
            />

            {/* Product Bottle with Enhanced Animation */}
            <div className="relative z-10 transition-all duration-700 ease-out" style={{
              transform: isHovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
            }}>
              <img
                src={product.image}
                alt={product.name}
                className={`h-[450px] md:h-[500px] w-auto object-contain transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  filter: isHovered ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
                  transitionDelay: '0.2s'
                }}
              />
            </div>

            {/* Sparkle Effects */}
            {[...Array(3)].map((_, idx) => (
              <div
                key={`sparkle-${idx}`}
                className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                style={{
                  top: `${20 + idx * 30}%`,
                  right: `${10 + idx * 15}%`,
                  animationDelay: `${idx * 0.4}s`,
                  boxShadow: `0 0 20px ${product.accentColor}`,
                }}
              />
            ))}
          </div>

          {/* Text Side with Staggered Animations */}
          <div className={`space-y-8 ${!isEven ? "md:order-1" : ""}`}>
            {/* Title with Gradient */}
            <div className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl font-playfair font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3 leading-tight`}
              >
                {product.name}
              </h2>
              <div className={`h-1.5 w-24 bg-gradient-to-r ${product.gradient} rounded-full transition-all duration-700 ${
                isVisible ? 'w-24' : 'w-0'
              }`} style={{ transitionDelay: '0.3s' }} />
            </div>

            {/* Tagline */}
            <div className={`transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90 italic">
                {product.tagline}
              </p>
            </div>

            {/* Price Badge */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} rounded-full shadow-lg hover:shadow-xl transition-shadow`}>
                <span className="text-3xl font-bold text-white">{product.price}</span>
              </div>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-poppins">
                {product.description}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className={`flex gap-4 pt-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {product.decorEmojis.map((emoji, idx) => (
                <div
                  key={`text-emoji-${idx}`}
                  className="text-4xl animate-float"
                  style={{ animationDelay: `${idx * 0.5}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
