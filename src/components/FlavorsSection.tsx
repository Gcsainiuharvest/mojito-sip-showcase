import { Button } from "@/components/ui/button";

const FlavorsSection = () => {
  const flavors = [
    {
      name: "Classic Mint Mojito",
      description: "The timeless favorite with fresh mint and zesty lime",
      color: "bg-primary",
      number: "01",
    },
    {
      name: "Strawberry Blast",
      description: "Sweet strawberries meet refreshing mint",
      color: "bg-accent",
      number: "02",
    },
    {
      name: "Mango Twist",
      description: "Tropical mango flavor with a minty kick",
      color: "bg-primary-glow",
      number: "03",
    },
    {
      name: "Lemon Zing",
      description: "Extra tangy with double the citrus punch",
      color: "bg-accent",
      number: "04",
    },
  ];

  return (
    <section id="flavors" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Introducing our
          </h2>
          <h3 className="text-5xl md:text-7xl font-playfair italic bg-gradient-fresh bg-clip-text text-transparent">
            Blockbuster Star-Cast
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card hover:shadow-glow transition-all duration-500 hover:-translate-y-4"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${flavor.color} opacity-20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-6xl font-playfair font-black text-primary/10 mb-4">
                  {flavor.number}
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-2xl font-playfair font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {flavor.name}
                  </h4>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    {flavor.description}
                  </p>
                </div>

                <div className={`mt-6 h-2 ${flavor.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-fresh text-primary-foreground font-poppins font-semibold px-12 py-6 text-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Try All Flavors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
