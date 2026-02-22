import { Link } from "react-router-dom";
import { Users, Calendar, UserPlus, Star, Trophy, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 animate-slide-up text-center px-4">
          <h1 className="mb-4 text-6xl font-black text-gradient-gold glow-text md:text-8xl">
            Rockies Club
          </h1>
          <p className="mb-8 text-xl font-semibold text-foreground/80 md:text-2xl">
            🎀 The Perfect Clan For Every Girl
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-black text-primary-foreground transition-all duration-300 hover:scale-105 glow-gold"
          >
            <UserPlus className="h-5 w-5" />
            انضم الآن
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto grid grid-cols-3 gap-8 px-4 text-center">
          {[
            { icon: Users, value: "30+", label: "عضو" },
            { icon: Trophy, value: "⭐⭐⭐", label: "تقييم الكلان" },
            { icon: Shield, value: "#1", label: "في المنطقة" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <stat.icon className="h-8 w-8 text-primary" />
              <span className="text-3xl font-black text-gradient-gold">{stat.value}</span>
              <span className="text-sm font-semibold text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "أعضاء الكلان", desc: "تعرف على أعضاء الكلان وإنجازاتهم", path: "/members", color: "text-primary" },
            { icon: Calendar, title: "فعاليات الكلان", desc: "شوف الفعاليات والبطولات القادمة", path: "/events", color: "text-secondary" },
            { icon: UserPlus, title: "انضم للكلان", desc: "سجل الآن وكن جزء من فريقنا", path: "/join", color: "text-accent" },
          ].map((card, i) => (
            <Link
              key={i}
              to={card.path}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
            >
              <card.icon className={`mb-4 h-10 w-10 ${card.color}`} />
              <h3 className="mb-2 text-xl font-black text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
              <Star className="mt-4 h-5 w-5 text-primary opacity-0 transition-all group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
