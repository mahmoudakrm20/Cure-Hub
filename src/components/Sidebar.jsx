import { Home, Calendar, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
const navItems = [
  { label: "Dashboard", icon: Home, to: "/" },
  { label: "Appointments", icon: Calendar, to: "/appointments" },
  { label: "Patients", icon: Users, to: "/patients" },
];
export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen w-64 bg-white py-1">
        <div>
          <img className="w-48 m-auto p-2" src="/carehub_logo-DYhzqRw5.png" />
        </div>
        <nav className="mt-8">
          {navItems.map(({ label, icon: Icon, to }) => (
            <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 mt-5 px-8 py-3 rounded hover:bg-cyan-200 transition  ${
                isActive ? " bg-cyan-100 text-cyan-600 font-bold border-r-4 border-cyan-600"  : "text-gray-400 font-semibold"
              }`
            }
          >
           <Icon className="text-inherit" size={20} />
           <span className="text-inherit ">{label}</span>
          </NavLink>
       ))}
       <NavLink
        className="flex items-center  gap-3 mt-5 px-8 py-3  rounded 
         hover:bg-cyan-200 transition text-gray-400 font-semibold"
            >
           <Settings className="text-gray-400" size={20} />
           <span className="text-gray-400">Settings</span>
          </NavLink>
        </nav>
    </aside>
  );
}
