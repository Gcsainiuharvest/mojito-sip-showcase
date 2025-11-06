import { Button } from "@/components/ui/button";
import mojitoZeera from "@/assets/mojito-zeera.png";
import mojitoNimboo from "@/assets/mojito-nimboo.png";
import mojitoShikanji from "@/assets/mojito-shikanji.png";

const ProductsSection = () => {
  const products = [
    {
      name: "Lahori Zeera",
      image: mojitoZeera,
      bgColor: "bg-[#7EC850]",
      mrp: "240.00",
      price: "228.00",
    },
    {
      name: "Lahori Nimboo",
      image: mojitoNimboo,
      bgColor: "bg-[#4FC3DC]",
      mrp: "240.00",
      price: "228.00",
    },
    {
      name: "Lahori Shikanji",
      image: mojitoShikanji,
      bgColor: "bg-[#C8D830]",
      mrp: "240.00",
      price: "228.00",
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
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
                {/* Circular Background */}
                <div className="relative h-96 flex items-center justify-center overflow-hidden">
                  <div
                    className={`absolute w-80 h-80 ${product.bgColor} rounded-full transition-transform duration-500 group-hover:scale-110`}
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-48 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
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
