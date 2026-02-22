import { Calendar, Clock, Users, Zap, Trophy, Swords } from "lucide-react";

const events = [
  {
    title: "بطولة الكلان الأسبوعية",
    date: "كل جمعة",
    time: "9:00 مساءً",
    type: "بطولة",
    status: "قادمة",
    players: 16,
    icon: Trophy,
    prize: "500 جوهرة",
  },
  {
    title: "تحدي الباور ليج",
    date: "كل أحد",
    time: "8:00 مساءً",
    type: "تحدي",
    status: "قادمة",
    players: 9,
    icon: Zap,
    prize: "300 جوهرة",
  },
  {
    title: "ماتشات ودية 3v3",
    date: "يومياً",
    time: "10:00 مساءً",
    type: "ودي",
    status: "مستمرة",
    players: 6,
    icon: Swords,
    prize: "خبرة + مرح",
  },
  {
    title: "كلان وار",
    date: "كل أربعاء",
    time: "7:00 مساءً",
    type: "حرب كلانات",
    status: "قادمة",
    players: 30,
    icon: Users,
    prize: "نقاط كلان",
  },
];

const statusStyles: Record<string, string> = {
  "قادمة": "bg-primary/20 text-primary",
  "مستمرة": "bg-secondary/20 text-secondary",
};

const Events = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <div className="mb-10 text-center animate-slide-up">
        <h1 className="mb-2 text-4xl font-black text-gradient-gold">فعاليات الكلان</h1>
        <p className="text-muted-foreground font-semibold">البطولات والتحديات القادمة</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <event.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-foreground">{event.title}</h3>
                  <span className="text-xs font-bold text-muted-foreground">{event.type}</span>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[event.status]}`}>
                {event.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-xl bg-muted p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">{event.players} لاعب</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-primary">الجائزة: {event.prize}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
