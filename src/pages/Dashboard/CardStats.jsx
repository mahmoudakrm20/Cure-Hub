import {
  CalendarCheck,
  UserPlus,
  Stethoscope,
  Users,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <Link to={"/appointments/list"}>
      <div className="bg-cyan-600 text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <CalendarCheck className="w-5 h-5  text-cyan-600" />
          </div>
          <p className="text-sm font-medium">Total Appointments</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">9,200</h2>
          <p className="text-xs text-white/80 text-right sm:text-left">
            Last week <span className="text-green-300 font-semibold">+32% ↑</span>
          </p>
        </div>
      </div>
      </Link>

      {/* Card 2 */}
      <div className="bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">New Patients</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">1,200</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-green-500 font-semibold">+20% ↑</span>
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">Total Doctors</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">300</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-red-500 font-semibold">-12% ↓</span>
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">Canceled Appointments</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">12</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-red-500 font-semibold">-12% ↓</span>
          </p>
        </div>
      </div>
    </div>
  );
}
