import { useState } from "react";
import { UserPlus, CheckCircle, Star } from "lucide-react";

const JoinClan = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", tag: "", trophies: "", brawler: "", why: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="animate-slide-up text-center">
          <CheckCircle className="mx-auto mb-4 h-20 w-20 text-primary" />
          <h2 className="mb-2 text-3xl font-black text-gradient-gold">تم إرسال طلبك! 🎉</h2>
          <p className="text-lg text-muted-foreground font-semibold">سيتم مراجعة طلبك والرد عليك قريباً</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <div className="mb-10 text-center animate-slide-up">
        <h1 className="mb-2 text-4xl font-black text-gradient-gold">انضم للكلان</h1>
        <p className="text-muted-foreground font-semibold">سجل بياناتك وانضم لعائلتنا</p>
      </div>

      <div className="mx-auto max-w-lg">
        {/* Requirements */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-black text-foreground">شروط الانضمام</h3>
          <ul className="space-y-3">
            {[
              "20,000 كأس على الأقل",
              "نشط يومياً في الكلان",
              "المشاركة في حروب الكلان",
              "الاحترام والتعاون مع الأعضاء",
            ].map((req, i) => (
              <li key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: "name", label: "اسمك في اللعبة", placeholder: "مثال: BOSS", type: "text" },
            { key: "tag", label: "تاق اللاعب", placeholder: "مثال: #2YP8JLQR", type: "text" },
            { key: "trophies", label: "عدد الكؤوس", placeholder: "مثال: 25000", type: "number" },
            { key: "brawler", label: "البراولر المفضل", placeholder: "مثال: ليون", type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="mb-1 block text-sm font-bold text-foreground">{field.label}</label>
              <input
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          ))}

          <div>
            <label className="mb-1 block text-sm font-bold text-foreground">ليش تبي تنضم؟</label>
            <textarea
              required
              placeholder="قولنا ليش تبي تكون جزء من الكلان..."
              value={form.why}
              onChange={(e) => setForm({ ...form, why: e.target.value })}
              rows={3}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-black text-primary-foreground transition-all duration-300 hover:scale-[1.02] glow-gold"
          >
            <UserPlus className="h-5 w-5" />
            أرسل الطلب
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClan;
