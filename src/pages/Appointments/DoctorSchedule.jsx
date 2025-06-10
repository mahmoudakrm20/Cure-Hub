import { useState } from "react";
import { CalendarDays, FilePenLine } from "lucide-react";

const doctorSchedule = [
  { day: 0, slot: 0, time: "10:00–12:00 PM", doctor: "Dr. John", specialty: "Dentist", color: "red", image: "/doctor5.jpg" },
  { day: 1, slot: 1, time: "1:00–3:00 PM", doctor: "Dr. Sarah", specialty: "GP", color: "green", image: "/doctor3.jpg" },
  { day: 2, slot: 2, time: "5:00–7:00 PM", doctor: "Dr. Omar", specialty: "GP", color: "green", image: "/doctor6.avif" },
  { day: 3, slot: 0, time: "10:00–12:00 PM", doctor: "Dr. Laila", specialty: "GIT", color: "red", image: "/doctor2.png" },
  { day: 4, slot: 0, time: "1:00–3:00 PM", doctor: "Dr. Hana", specialty: "ENT", color: "green", image: "/doctor.avif" },
  { day: 5, slot: 2, time: "5:00–7:00 PM", doctor: "Dr. Ali", specialty: "Dentist", color: "red", image: "/doctor1.png" },
  { day: 6, slot: 1, time: "2:00–4:00 PM", doctor: "Dr. Tamer", specialty: "GP", color: "red", image: "/doctor4.jpg" },
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const calendarDays = [
  ["", "", "", "", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22", "23", "24"],
  ["25", "26", "27", "28", "29", "30", "31"],
];

export default function DoctorSchedule() {
  const [showCalendar, setShowCalendar] = useState(false);
  const rows = 5;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto relative">
      {/* Header buttons */}
      <div className="flex justify-start gap-3 items-center mb-4 relative">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="bg-cyan-600 text-white px-4 py-2 cursor-pointer rounded flex items-center gap-2"
        >
          November <CalendarDays size={20} />
        </button>

        <button className="border border-cyan-600 px-3 py-2 rounded flex gap-2 items-center">
          <FilePenLine size={18} /> Edit
        </button>

        {/* Calendar dropdown */}
        {showCalendar && (
          <div className="absolute top-14 left-0 bg-white border border-gray-300 rounded-md shadow-md w-72 z-20 p-3">
            <div className="flex justify-between items-center mb-2 px-1">
              <button className="text-cyan-600 text-lg font-bold">‹</button>
              <h2 className="font-medium text-cyan-600">November 2024</h2>
              <button className="text-cyan-600 text-lg font-bold">›</button>
            </div>

            <div className="grid grid-cols-7 text-sm text-center text-gray-600 font-medium mb-1">
              {["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
              {calendarDays.flat().map((day, idx) => (
                <div
                  key={idx}
                  className={`h-8 flex items-center justify-center rounded ${
                    day ? "bg-cyan-600 text-white" : "text-transparent"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Schedule Table */}
      <div className="min-w-[900px] border border-gray-300">
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <div key={day} className="border border-gray-300 py-2 text-center font-medium text-cyan-600">
              {day}
            </div>
          ))}
        </div>

        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 min-h-[100px]">
            {days.map((_, colIndex) => {
              const slot = doctorSchedule.find((s) => s.day === colIndex && s.slot === rowIndex);
              if (slot) {
                const bgColor = `bg-${slot.color}-200`;
                const textColor = `text-${slot.color}-600`;

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`${bgColor} ${textColor} border border-gray-300 p-2 flex flex-col items-start gap-1`}
                  >
                    <img src={slot.image} alt={slot.doctor} className="w-6 h-6 rounded-full" />
                    <div className="text-sm font-semibold">{slot.time}</div>
                    <div className="text-sm">{slot.doctor}</div>
                    <div className="text-xs">({slot.specialty})</div>
                  </div>
                );
              }

              return <div key={`${rowIndex}-${colIndex}`} className="border border-gray-300"></div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
