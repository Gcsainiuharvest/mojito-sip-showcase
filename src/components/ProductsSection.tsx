import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      name: "Strawberry Mojito",
      image: "/images/strawberry.png", // place file in public/images
      accent: "from-rose-400 to-rose-500",
      ring: "ring-rose-400/30",
      mrp: "240.00",
      price: "228.00",
    },
    {
      name: "Watermelon Mojito",
      image: "/images/watermelon.png",
      accent: "from-red-400 to-emerald-500",
      ring: "ring-red-400/30",
      mrp: "240.00",
      price: "228.00",
    },
    {
      name: "Mint Mojito",
      image: "/images/mint.png",
      accent: "from-emerald-400 to-emerald-500",
      ring: "ring-emerald-400/30",
      mrp: "240.00",
      price: "228.00",
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">Our Fresh Flavors</h2>
          <p className="mt-3 text-muted-foreground font-poppins">Naturally vibrant, crafted for a refreshing sip every time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Save Badge */}
              <div className="absolute top-8 left-8 z-20 bg-destructive text-destructive-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center font-poppins font-bold shadow-lg">
                <span className="text-xs">Save</span>
                <span className="text-lg">5%</span>
              </div>

              {/* Product Card */}
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-4">
                {/* Decorative gradient aura */}
                <div className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 bg-gradient-to-br ${product.accent} rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity`} />

                {/* Media */}
                <div className="relative h-96 flex items-center justify-center overflow-hidden">
                  <div className={`absolute w-80 h-80 bg-gradient-to-br ${product.accent} rounded-full opacity-20 transition-transform duration-500 group-hover:scale-110`} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-56 h-auto object-cover rounded-2xl ring-2 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105 group-hover:rotate-1"
                    style={{ boxShadow: "0 30px 60px -15px rgba(0,0,0,0.35)" }}
                  />
                  {/* Floating sparkle dots */}
                  <div className="absolute inset-0">
                    <span className="absolute top-8 left-10 w-2 h-2 bg-white/60 rounded-full animate-ping" />
                    <span className="absolute bottom-10 right-12 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 text-center space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3 font-poppins">
                      <span className="text-muted-foreground line-through">
                        MRP {product.mrp}
                      </span>
                      <span className="text-primary font-semibold text-lg">
                        From Rs. {product.price}
                      </span>
                    </div>
                    <h3 className="text-3xl font-playfair italic font-bold text-card-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full max-w-xs mx-auto rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
