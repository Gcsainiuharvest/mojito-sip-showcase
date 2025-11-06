const IngredientsSection = () => {
  const ingredients = [
    { name: "Fresh Mint Leaves", icon: "🌿" },
    { name: "Zesty Lime", icon: "🍋" },
    { name: "Natural Sweetener", icon: "🍯" },
    { name: "Sparkling Water", icon: "💧" },
    { name: "Love & Care", icon: "💚" },
  ];

  return (
    <section id="ingredients" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Pure <span className="italic bg-gradient-fresh bg-clip-text text-transparent">Ingredients</span>
          </h2>
          <p className="text-xl font-poppins text-muted-foreground max-w-2xl mx-auto">
            We believe in keeping it simple and natural. Every ingredient is carefully selected for maximum freshness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-6xl md:text-7xl group-hover:scale-125 transition-transform duration-300 animate-float" 
                   style={{ animationDelay: `${index * 200}ms` }}>
                {ingredient.icon}
              </div>
              <h3 className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                {ingredient.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-fresh rounded-full">
            <p className="text-xl font-playfair font-bold text-primary-foreground">
              No Artificial Colors • No Preservatives • 100% Natural
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
