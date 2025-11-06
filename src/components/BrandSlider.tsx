import React, { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    headlineTop: "Har Koi Peera",
    headlineMain: "Gupta Ji Ki Mojito!",
    sub: "Naturally refreshing — apna desi thanda.",
    bg: "from-emerald-50 to-white",
    character: "/images/guptaji.jpg", // character image at public/images/guptaji.jpg
  },
];

const BrandSlider = () => {
  const s = slides[0];
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0");
          el.classList.add("animate-pop-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden border-b">
      <div className={`group relative mx-auto max-w-7xl px-4 py-12 md:py-16 bg-gradient-to-br ${s.bg}`}>
        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Copy */}
          <div className="md:col-span-6 text-center md:text-left">
            <p className="font-playfair text-2xl md:text-4xl italic text-card-foreground/80 mb-2 animate-fade-in">
             Not Just a Drink, 
            </p>
            <h2 className="font-playfair text-5xl md:text-7xl font-black leading-none mb-4 animate-fade-in"
                style={{ animationDelay: "100ms" }}>
              It’s an Emotion
            </h2>
            <p className="font-poppins text-muted-foreground mb-6 animate-fade-in leading-7"
               style={{ animationDelay: "200ms" }}>
              {s.sub}
            </p>
            <div className="space-y-3 text-muted-foreground/90 font-poppins animate-fade-in" style={{ animationDelay: "250ms" }}>
              <p>When life gives Gupta Ji lemons, he makes legendary mojitos!</p>
              <p>From minty thandak to strawberry fizz, every bottle packs sass and satisfaction.</p>
              <p>Because at Gupta Ji Ki Mojito — thirst bhi bujhegi, swag bhi milega!</p>
              



            </div>
          </div>

          {/* Artwork: single GuptaJi character */}
          <div className="md:col-span-6 relative flex justify-center items-center">
            <div className="absolute -z-10 h-72 w-72 md:h-96 md:w-96 bg-gradient-to-br from-emerald-300/40 to-lime-300/40 rounded-full blur-3xl" />
            <div ref={revealRef} className="opacity-0 will-change-transform">
              <img
                src={s.character}
                alt="Gupta Ji character"
                className="w-56 md:w-80 h-auto drop-shadow-2xl rounded-2xl transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105 group-hover:-rotate-1 animate-float-slow"
                style={{ animationDelay: "180ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;


