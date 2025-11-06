import { Sparkles } from "lucide-react";

const upcoming = [
  {
    title: "Khattā Aam",
    tag: "Summer Limited",
    accent: "from-amber-300 to-orange-400",
    note: "Raw mango zing with a mojito twist",
  },
  {
    title: "Blue Curacao",
    tag: "Fan Request",
    accent: "from-sky-300 to-blue-500",
    note: "Tropical vibes, bright and breezy",
  },
  {
    title: "Kala Khatta",
    tag: "Desi Classic",
    accent: "from-fuchsia-300 to-purple-500",
    note: "Nostalgic berry tartness, reimagined",
  },
];

const UpcomingSection = () => {
  return (
    <section id="upcoming" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium font-poppins text-primary">Coming Soon</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-playfair font-bold">Upcoming Flavors</h2>
          <p className="mt-3 text-muted-foreground font-poppins">A sneak peek at what we’re mixing next.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcoming.map((u, i) => (
            <div
              key={u.title}
              className="relative overflow-hidden rounded-3xl bg-card border shadow-soft animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`absolute -top-24 -right-20 h-64 w-64 bg-gradient-to-br ${u.accent} opacity-40 blur-3xl`} />
              <div className="p-8 flex flex-col items-center text-center gap-4">
                {/* Placeholder bottle silhouette */}
                <div className="relative h-40 w-28">
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-foreground/10 to-foreground/5" />
                  <div className="absolute inset-0 rounded-[32px] ring-2 ring-primary/20" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-14 rounded-t-xl bg-foreground/10 ring-2 ring-primary/20" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-primary font-poppins bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    {u.tag}
                  </span>
                  <h3 className="text-2xl font-playfair font-bold">{u.title}</h3>
                  <p className="text-sm text-muted-foreground font-poppins">{u.note}</p>
                </div>

                <p className="mt-2 text-xs text-muted-foreground font-poppins">Sign up to be the first to sip.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;


