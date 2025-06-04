import {CalendarDays,FilePenLine} from "lucide-react";
const doctorSchedule = [
  {
    day: 0, // Sunday
    slot: 0,
    time: "10:00–12:00 PM",
    doctor: "Dr. John",
    specialty: "Dentist",
    color: "orange",
    image: "/doctor5.jpg",
  },
  {
    day: 1,
    slot: 1,
    time: "1:00–3:00 PM",
    doctor: "Dr. Sarah",
    specialty: "GP",
    color: "green",
    image: "/doctor3.jpg",
  },
  {
    day: 2,
    slot: 2,
    time: "5:00–7:00 PM",
    doctor: "Dr. Omar",
    specialty: "GP",
    color: "green",
    image: "/doctor6.avif",
  },
  {
    day: 3,
    slot: 0,
    time: "10:00–12:00 PM",
    doctor: "Dr. Laila",
    specialty: "GIT",
    color: "cyan",
    image: "/doctor2.png",
  },
  {
    day: 4,
    slot: 0,
    time: "1:00–3:00 PM",
    doctor: "Dr. Hana",
    specialty: "ENT",
    color: "purple",
    image: "/doctor.avif",
  },
  {
    day: 5,
    slot: 2,
    time: "5:00–7:00 PM",
    doctor: "Dr. Ali",
    specialty: "Dentist",
    color: "orange",
    image: "/doctor1.png",
  },
  {
    day: 6,
    slot: 1,
    time: "2:00–4:00 PM",
    doctor: "Dr. Tamer",
    specialty: "GP",
    color: "red",
    image: "/doctor4.jpg",
  },
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function DoctorSchedule() {
  const rows = 5; // Number of time slots (rows)

  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <div className="flex justify-start gap-3 items-center mb-4">
        <button className="bg-cyan-600 text-white px-4 py-2 rounded flex items-center gap-2">June <CalendarDays size={20}/></button>
        <button className="border border-cyan-500 px-3 py-2 rounded flex gap-2 items-center "> <FilePenLine size={18} /> Edit </button>
      </div>

      <div className="min-w-[900px] border border-gray-300">
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <div key={day} className="border border-gray-300 py-2 text-center font-medium text-cyan-700">
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
                    <div className="text-sm font-semibold ">{slot.time}</div>
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
