import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const schedule = [
  {
    name: "Dr. Mart Edison",
    time: "11:00 - 1:00 PM",
    department: "GP",
    color: "text-orange-600",
  },
  {
    name: "Dr. Mart Edison",
    time: "5:00 - 7:00 PM",
    department: "Ortho",
    color: "text-amber-500",
  },
  {
    name: "Dr. Mart Edison",
    time: "9:00 - 11:00 AM",
    department: "ENT",
    color: "text-pink-500",
  },
];

export default function DoctorSchedule() {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-700">Doctors Schedule</h2>
        <Link to={"/appointments/schedule"}>
          <button className="text-sm text-gray-400 cursor-pointer">See More</button>
        </Link>
      </div>

      {/* Calendar + Activity */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Calendar */}
        <div className="w-full lg:w-[55%]">
          <div className="flex items-center justify-between mb-3">
            <button className="text-gray-500">
              <ChevronLeft size={18} />
            </button>
            <p className="text-sm font-medium text-cyan-600">December 2024</p>
            <button className="text-gray-500">
              <ChevronRight size={18} />
            </button>
          </div>
          <table className="w-full text-center text-sm text-gray-600">
            <thead>
              <tr>
                {["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"].map((d) => (
                  <th key={d} className="py-1 font-semibold">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4].map((row) => (
                <tr key={row}>
                  {Array.from({ length: 7 }).map((_, i) => {
                    const day = row * 7 + i + 1;
                    return day <= 31 ? (
                      <td key={i} className="py-1">
                        <button
                          className={`w-8 h-8 rounded-md ${
                            day === 8 ? "bg-cyan-600 text-white" : "hover:bg-gray-200"
                          }`}
                        >
                          {day}
                        </button>
                      </td>
                    ) : (
                      <td key={i}></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity */}
        <div className="w-full lg:w-[45%] flex flex-col gap-3">
          <p className="text-sm font-medium text-center text-cyan-600">Activity Details</p>

          {schedule.map((doc, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <img src="/doctor1.png" className="h-8 w-8 rounded-full bg-white" />
              <div className="flex-1">
                <p className="font-medium text-gray-700">{doc.name}</p>
                <p className="text-gray-400">{doc.time}</p>
              </div>
              <span className={`text-xs font-semibold ${doc.color}`}>● {doc.department}</span>
            </div>
          ))}

          <button className="mt-6 self-center text-sm border-cyan-600 text-gray-600 border rounded-md px-3 py-1 flex items-center gap-1">
            <Plus size={16} /> Add New
          </button>
        </div>
      </div>
    </div>
  );
}
