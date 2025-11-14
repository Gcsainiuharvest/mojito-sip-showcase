import { useEffect, useRef, useState } from "react";
import mintBottle from "@/assets/MintProductImage.png";

const ProductShowcase = () => {
  return (
    <div className="w-full relative">
      {/* Connecting Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#99cc33] via-[#aadd44] to-[#88bb22] hidden md:block z-0 opacity-30" />

      <div className="relative">
        <ProductSection />

        {/* Timeline Node */}
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#99cc33] rounded-full border-4 border-background hidden md:block z-10 shadow-lg"
          style={{ top: '50%' }}
        />
      </div>
    </div>
  );
};



const ProductSection = () => {
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

  const product = {
    name: "THE OG DRINK - MINT MOJITO ₹10",
    tagline: "Café-Style Mojito, Now for Every Home & Counter!",
    description: "Fresh, fizzy, and timeless - our Mint Mojito is the original mood-lifter that everyone craveWhether you’re serving guests at your café, restocking your store, or sipping at home, one thing stays constant, the café-style freshness, sealed and ready at just ₹10.Blended with crisp mint, tangy lemon, and that signature café sparkle, it’s the drink that turns any moment into a chill moment.",
    image: mintBottle,
    gradient: "from-[#99cc33] via-[#aadd44] to-[#88bb22]",
  };

  const isEven = true;

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
            top: '10%',
            left: '5%',
          }}
        />
        <div
          className={`absolute w-72 h-72 bg-gradient-to-br ${product.gradient} rounded-full blur-3xl opacity-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className="relative grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <div
            className="relative h-[750px] flex items-center justify-center transition-all duration-1000 opacity-100 translate-x-0 scale-100"
          >
          
            <div className="relative z-10 transition-all duration-700 ease-out" style={{
              transform: isHovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
            }}>
              <img
                src={product.image}
                alt={product.name}
                className={`h-[750px] md:h-[750px] w-auto object-contain transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  filter: isHovered ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
                  transitionDelay: '0.2s'
                }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-black italic leading-none mb-4">
               {product.name}
            </h2>
              <div className={`h-1.5 w-24 bg-gradient-to-r ${product.gradient} rounded-full transition-all duration-700 ${
                isVisible ? 'w-24' : 'w-0'
              }`} style={{ transitionDelay: '0.3s' }} />
            </div>

            <div className={`transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <p className="font-poppins text-muted-foreground mb-6 leading-7 text-2xl">
               <b>{product.tagline}</b>            </p>
              <p className="text-2xl md:text-2xl font-semibold text-foreground/90 italic">
                
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
                  <div className="space-y-3 text-muted-foreground/90 font-poppins">
                {product.description}
              </div>
              
            </div>
             <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <p style={{fontSize:18}}><b>Shelf Life: 4 Months of Pure, Minty Goodness
<br/>It’s more than a drink - it’s an instant café experience, ready to pour and share.</b></p>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
