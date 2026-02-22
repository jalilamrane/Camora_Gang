import { Link, useLocation } from "react-router-dom";
import { Users, Calendar, UserPlus, Rocket, Settings } from "lucide-react";

const navItems = [
  { path: "/", label: "الرئيسية", icon: Rocket },
  { path: "/members", label: "أعضاء الكلان", icon: Users },
  { path: "/events", label: "فعاليات الكلان", icon: Calendar },
  { path: "/join", label: "الانضمام للكلان", icon: UserPlus },
  { path: "/admin", label: "لوحة التحكم", icon: Settings },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black text-gradient-gold">Rockies Club</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
