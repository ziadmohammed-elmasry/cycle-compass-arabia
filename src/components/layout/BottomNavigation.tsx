
import { Home, Map, User, Settings, Activity } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-2 z-10 shadow-elevation">
      <NavItem icon={<Home size={24} />} to="/" label="الرئيسية" />
      <NavItem icon={<Map size={24} />} to="/map" label="الخريطة" />
      <NavItem icon={<Activity size={24} />} to="/sensors" label="الحساسات" />
      <NavItem icon={<User size={24} />} to="/profile" label="الملف" />
      <NavItem icon={<Settings size={24} />} to="/settings" label="الإعدادات" />
    </div>
  );
};

const NavItem = ({ icon, to, label }: { icon: React.ReactNode; to: string; label: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center justify-center w-full py-1 text-xs transition-colors duration-200",
          {
            "text-primary": isActive,
            "text-gray-500 hover:text-gray-700": !isActive,
          }
        )
      }
    >
      <div className="mb-1">{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

export default BottomNavigation;
