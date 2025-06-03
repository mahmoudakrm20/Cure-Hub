import { NavLink, Outlet } from "react-router-dom";

export default function Appointments() {
  return (
    <div className="p-4 space-y-6">
      {/* Navigation Tabs */}
      <div className="flex gap-4 border-b pb-2">
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            `px-3 py-1 rounded-t-md text-sm font-medium transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          Appointment List
        </NavLink>

        <NavLink
          to="requests"
          className={({ isActive }) =>
            `px-3 py-1 rounded-t-md text-sm font-medium transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          Appointment Requests
        </NavLink>

        <NavLink
          to="schedule"
          className={({ isActive }) =>
            `px-3 py-1 rounded-t-md text-sm font-medium transition ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`
          }
        >
          Doctor Schedule
        </NavLink>
      </div>

      {/* Content */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
