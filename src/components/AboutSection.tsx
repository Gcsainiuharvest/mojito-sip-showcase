import { Leaf, Sparkles, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-foreground">
            Finally a drink that is
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <span className="text-2xl md:text-3xl font-playfair italic text-primary">a mood enhancer</span>
            <span className="text-2xl md:text-3xl font-playfair italic text-accent">a game changer</span>
            <span className="text-2xl md:text-3xl font-playfair italic text-primary-glow">a star in its league</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">All Natural</h3>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              Made with fresh mint leaves, real lime juice, and natural sweeteners. No artificial colors or preservatives.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">Perfect Fizz</h3>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              Just the right amount of sparkle to refresh your senses. Not too much, not too little.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-muted hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-fresh mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">Desi Touch</h3>
            <p className="font-poppins text-muted-foreground leading-relaxed">
              A unique blend that captures the vibrant spirit of our culture in every refreshing sip.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl md:text-4xl font-playfair italic text-foreground leading-relaxed">
            A mix of chatpata flavors, all natural ingredients and just the right amount of fizz.
            <span className="block mt-4 text-primary font-bold">Enjoy every sip of this refreshing drink!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
