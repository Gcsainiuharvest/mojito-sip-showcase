import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Millet Muse" ,
    role: "Business",
      initials: "MM",
      quote:
        "Love the name. Need more brands with core Indian-ness reflecting in them.",
    },
    {
      name: "Anonymous",
      role: "Student",
      initials: "AN",
      quote:
        "It is better than Lahori Jeera and has an after taste as well.",
    },
    {
      name: "Tamanna Grover",
      role: "Artist",
      initials: "TG",
      quote:
        "Gupta ji will takeover the market like crazy, I am sure! 🔥",
    },
  ];

  return (
    <section id="testimonials" className="pt-20 px-4 bg-muted/30" style={{paddingBottom:120}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">
           Let's Keep the Chill Flowing
          </h2>
          <p className="mt-3 text-muted-foreground font-poppins">
            Why Everyone’s Vibing with Gupta Ji Ki Mojito
We don’t just serve drinks - we serve the guarantee of chill.

          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="relative overflow-hidden p-6 md:p-8 bg-card shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <Quote className="absolute -right-4 -top-4 w-20 h-20 text-primary/10" />

              <div className="flex items-center gap-4 mb-5">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold font-poppins">{t.name}</p>
                  <p className="text-sm text-muted-foreground font-poppins">{t.role}</p>
                </div>
              </div>

              <p className="text-base leading-relaxed font-poppins text-card-foreground/90">
                “{t.quote}”
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


