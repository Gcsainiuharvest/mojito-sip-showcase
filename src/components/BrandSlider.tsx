import React, { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    headlineTop: "Har Koi Peera",
    headlineMain: "Gupta Ji Ki Mojito!",
    sub: "Naturally refreshing — apna desi thanda.",
    bg: "from-emerald-50 to-white",
    character: "/images/guptaji.png", // character image at public/images/guptaji.jpg
  },
];

const BrandSlider = () => {
  const s = slides[0];
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations for all elements
          const textElements = el.querySelectorAll('.animate-on-scroll');
          textElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate-pop-up');
              element.classList.remove('opacity-0');
            }, index * 200);
          });
          // Trigger image animation after text
          const imageContainer = el.querySelector('.image-container');
          if (imageContainer) {
            setTimeout(() => {
              imageContainer.classList.add('animate-pop-up');
              imageContainer.classList.remove('opacity-0');
            }, 800);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden border-b flex items-center" id="about">
      <div className={`group relative mx-auto max-w-7xl px-4 py-16 md:py-20 w-full ${s.bg}`}>
        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Copy */}
          <div className="md:col-span-6 text-center md:text-left">
            <p className="font-playfair text-2xl md:text-4xl italic text-card-foreground/80 mb-2 opacity-0 animate-on-scroll">
             Not Just a Drink,
            </p>
            <h2 className="font-playfair text-5xl md:text-7xl font-black leading-none mb-4 opacity-0 animate-on-scroll">
              It’s an Emotion
            </h2>
            <p className="font-poppins text-muted-foreground mb-6 opacity-0 animate-on-scroll leading-7">
              {s.sub}
            </p>
            <div className="space-y-3 text-muted-foreground/90 font-poppins opacity-0 animate-on-scroll">
              <p>When life gives Gupta Ji lemons, he makes legendary mojitos!</p>
              <p>From minty thandak to strawberry fizz, every bottle packs sass and satisfaction.</p>
              <p>Because at Gupta Ji Ki Mojito — thirst bhi bujhegi, swag bhi milega!</p>
            </div>
          </div>

          {/* Artwork: single GuptaJi character */}
          <div className="md:col-span-6 relative flex justify-center items-center">
            <div className="absolute -z-10 h-72 w-72 md:h-96 md:w-96 bg-gradient-to-br from-emerald-300/40 to-lime-300/40 rounded-full blur-3xl opacity-0 animate-on-scroll" />
            <div className="image-container opacity-0 will-change-transform">
              <img
                src={s.character}
                alt="Gupta Ji character"
                className="w-56 md:w-80 h-auto drop-shadow-2xl rounded-2xl transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105 group-hover:-rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;


