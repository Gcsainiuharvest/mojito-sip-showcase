import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Royal Frozens",
      role: "Distributor",
      initials: "RF",
      quote: "The product is very good and tastes amazing.",
    },
    {
      name: "Vipul Vashisht",
      role: "Employee",
      initials: "VV",
      quote: "India ka best mojito means Gupta Ji ka mojito.❤️",
    },
    {
      name: "Vikas Singh Chauhan",
      role: "Businessman",
      initials: "VC",
      quote: "Looking Awesome, best of luck.",
    },
    {
      name: "Millet Muse",
      role: "Business",
      initials: "MM",
      quote: "Love the name. Need more brands with core Indian-ness reflecting in them.",
    },
    {
      name: "Natures Flavour Spices",
      role: "Business",
      initials: "NF",
      quote: "Amazing Gupta Ji, Amazing Work!",
    },
    {
      name: "Saahil.Startup",
      role: "Entrepreneur",
      initials: "SS",
      quote: "Congratulations, I really love your marketing!🔥",
    },
    {
      name: "Sagartech",
      role: "Creator",
      initials: "ST",
      quote: "looks so much delicious.",
    },
    {
      name: "Rahul Narula",
      role: "Artist",
      initials: "RN",
      quote: "Most Refreshing Drink!Love the taste.",
    },
    {
      name: "Priya",
      role: "Artist",
      initials: "PR",
      quote: "All time fav drink ❤️",
    },
    {
      name: "Arjun Sarin",
      role: "Artist",
      initials: "AS",
      quote: "Hustling makes everything perfect keep it up 🙌🔥",
    },
    {
      name: "Smriti Goyal",
      role: "Creator",
      initials: "SG",
      quote: "Best taste! ❤️",
    },
    {
      name: "Paras Kapoor",
      role: "Businessman",
      initials: "PK",
      quote: "Gupta ji ki mojito Supremacy 🔥💯",
    },
   
  ];

  return (
    <section id="testimonials" className="pt-20 px-4" style={{paddingBottom:120}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">
           Let's Keep the Chill Flowing
          </h2>
          <p className="mt-3 text-muted-foreground font-poppins">
            Why Everyone's Vibing with Gupta Ji Ki Mojito
We don't just serve drinks - we serve the guarantee of chill.

          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <Card
                className="relative overflow-hidden p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 h-full"
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
                  "{t.quote}"
                </p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;


