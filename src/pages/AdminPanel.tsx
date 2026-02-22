import { useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { Lock, LogOut, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setError(false);
      navigate("/members");
    } else {
      setError(true);
    }
  };

  if (isAdmin) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-sm animate-slide-up text-center">
          <Shield className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h1 className="mb-2 text-3xl font-black text-gradient-gold">مرحباً أدمن! 👑</h1>
          <p className="mb-6 text-muted-foreground font-semibold">أنت الآن في وضع الأدمن. يمكنك إدارة الأعضاء من صفحة أعضاء الكلان.</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/members")}
              className="w-full rounded-xl bg-primary px-6 py-3 font-black text-primary-foreground transition-all hover:scale-[1.02] glow-gold"
            >
              إدارة الأعضاء
            </button>
            <button
              onClick={logout}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-bold text-destructive transition-all hover:bg-muted"
            >
              <LogOut className="h-4 w-4" />
              تسجيل خروج
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm animate-slide-up">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <Lock className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h1 className="mb-2 text-2xl font-black text-gradient-gold">لوحة التحكم</h1>
          <p className="mb-6 text-sm text-muted-foreground font-semibold">أدخل كلمة المرور للدخول</p>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="كلمة المرور"
            className="mb-4 w-full rounded-xl border border-border bg-muted px-4 py-3 text-center text-lg font-bold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />

          {error && (
            <p className="mb-4 text-sm font-bold text-destructive">كلمة المرور غلط! ❌</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-6 py-3 font-black text-primary-foreground transition-all hover:scale-[1.02] glow-gold"
          >
            دخول
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
