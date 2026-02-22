import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface ClanMember {
  name: string;
  role: string;
  trophies: number;
  brawler: string;
  rank: string;
  image?: string;
}

interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  members: ClanMember[];
  addMember: (member: ClanMember) => void;
  removeMember: (index: number) => void;
}

const defaultMembers: ClanMember[] = [
  { name: "BOSS", role: "قائد الكلان", trophies: 45000, brawler: "ليون", rank: "أسطوري" },
  { name: "SHADOW", role: "نائب القائد", trophies: 40000, brawler: "كرو", rank: "أسطوري" },
  { name: "FIRE", role: "نائب القائد", trophies: 38000, brawler: "سبايك", rank: "أسطوري" },
  { name: "STORM", role: "كبير الأعضاء", trophies: 35000, brawler: "ساندي", rank: "ماسي" },
  { name: "THUNDER", role: "عضو", trophies: 32000, brawler: "آمبر", rank: "ماسي" },
  { name: "BLAZE", role: "عضو", trophies: 30000, brawler: "جين", rank: "ماسي" },
  { name: "VENOM", role: "عضو", trophies: 28000, brawler: "تارا", rank: "ذهبي" },
  { name: "NINJA", role: "عضو", trophies: 25000, brawler: "مورتس", rank: "ذهبي" },
];

const ADMIN_PASSWORD = "777";
const STORAGE_KEY_MEMBERS = "clan_members";
const STORAGE_KEY_ADMIN = "clan_admin";

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_ADMIN) === "true";
  });

  const [members, setMembers] = useState<ClanMember[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_MEMBERS);
    return saved ? JSON.parse(saved) : defaultMembers;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ADMIN, String(isAdmin));
  }, [isAdmin]);

  const login = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const addMember = (member: ClanMember) => {
    setMembers((prev) => [...prev, member]);
  };

  const removeMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, members, addMember, removeMember }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
};
