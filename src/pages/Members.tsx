import { useState } from "react";
import { Trophy, Star, Shield, UserPlus, Trash2, X } from "lucide-react";
import { useAdmin, ClanMember } from "@/contexts/AdminContext";

const roleColors: Record<string, string> = {
  "قائد الكلان": "text-primary",
  "نائب القائد": "text-secondary",
  "كبير الأعضاء": "text-accent",
  "عضو": "text-muted-foreground",
};

const Members = () => {
  const { isAdmin, members, addMember, removeMember } = useAdmin();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<ClanMember>({
    name: "",
    role: "عضو",
    trophies: 0,
    brawler: "",
    rank: "ذهبي",
    image: "",
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    addMember({ ...form, trophies: Number(form.trophies) });
    setForm({ name: "", role: "عضو", trophies: 0, brawler: "", rank: "ذهبي", image: "" });
    setShowForm(false);
  };

  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <div className="mb-10 text-center animate-slide-up">
        <h1 className="mb-2 text-4xl font-black text-gradient-gold">أعضاء الكلان</h1>
        <p className="text-muted-foreground font-semibold">أبطال الكلان وإنجازاتهم</p>
      </div>

      {isAdmin && (
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-black text-primary-foreground transition-all hover:scale-[1.02] glow-gold"
          >
            {showForm ? <X className="h-5 w-5" /> : <UserPlus className="h-5 w-5" />}
            {showForm ? "إلغاء" : "إضافة شخص جديد"}
          </button>
        </div>
      )}

      {showForm && isAdmin && (
        <form onSubmit={handleAdd} className="mx-auto mb-8 max-w-lg animate-slide-up rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-black text-foreground">إضافة عضو جديد</h3>
          <div className="grid gap-3">
            <input
              required
              placeholder="اسم اللاعب"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              placeholder="رابط الصورة (اختياري)"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="قائد الكلان">قائد الكلان</option>
              <option value="نائب القائد">نائب القائد</option>
              <option value="كبير الأعضاء">كبير الأعضاء</option>
              <option value="عضو">عضو</option>
            </select>
            <input
              type="number"
              placeholder="عدد الكؤوس"
              value={form.trophies || ""}
              onChange={(e) => setForm({ ...form, trophies: Number(e.target.value) })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              placeholder="البراولر المفضل"
              value={form.brawler}
              onChange={(e) => setForm({ ...form, brawler: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select
              value={form.rank}
              onChange={(e) => setForm({ ...form, rank: e.target.value })}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="أسطوري">أسطوري</option>
              <option value="ماسي">ماسي</option>
              <option value="ذهبي">ذهبي</option>
              <option value="فضي">فضي</option>
            </select>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 font-black text-primary-foreground transition-all hover:scale-[1.02] glow-gold"
            >
              أضف العضو
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50"
          >
            <div className="flex items-center gap-4">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-12 w-12 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <Shield className={`h-6 w-6 ${roleColors[member.role] || "text-foreground"}`} />
                </div>
              )}
              <div>
                <h3 className="text-lg font-black text-foreground">{member.name}</h3>
                <p className={`text-sm font-bold ${roleColors[member.role]}`}>{member.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-left">
                <div className="flex items-center gap-1 text-primary">
                  <Trophy className="h-4 w-4" />
                  <span className="font-black">{member.trophies.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" />
                  <span>{member.brawler} • {member.rank}</span>
                </div>
              </div>
              {isAdmin && (
                <button
                  onClick={() => removeMember(i)}
                  className="rounded-lg p-2 text-destructive transition-all hover:bg-destructive/10"
                  title="حذف العضو"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
