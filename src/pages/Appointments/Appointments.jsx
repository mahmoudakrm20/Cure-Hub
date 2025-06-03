import { NavLink, Outlet } from "react-router-dom";
import { Plus, Filter } from "lucide-react";

export default function Appointments() {
  return (
    <div className="p-6 bg-gray-100 space-y-6">
      {/* Header Tabs + Controls */}
      <div className="flex items-center justify-between  bg-white p-5 rounded-xl">
        {/* Tabs */}
        <div className="flex gap-8 border-b-2 border-gray-300">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `pb-3 text-sm  transition border-b-2 ${
                isActive
                  ? "border-cyan-600 text-cyan-600 font-bold"
                  : "border-transparent text-gray-500 hover:text-cyan-600 font-medium"
              }`
            }
          >
            Appointment Requests
          </NavLink>

          <NavLink
            to="list"
            className={({ isActive }) =>
              `pb-3 text-sm font-medium transition border-b-2 ${
                isActive
                  ? "border-cyan-600 text-cyan-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-cyan-600"
              }`
            }
          >
            Appointment List
          </NavLink>

          <NavLink
            to="schedule"
            className={({ isActive }) =>
              `pb-3 text-sm font-medium transition border-b-2 ${
                isActive
                  ? "border-cyan-600 text-cyan-600 font-semibold"
                  : "border-transparent text-gray-500 hover:text-cyan-600"
              }`
            }
          >
            Doctor Schedule
          </NavLink>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-cyan-500 rounded-md hover:bg-gray-100 transition cursor-pointer">
            <Filter size={16} /> Sort by
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white border rounded-md bg-cyan-500 hover:bg-cyan-600 transition cursor-pointer">
            <Plus size={16} /> Add New
          </button>

        </div>
      </div>

      {/* Page Content */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
