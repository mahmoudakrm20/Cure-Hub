import { Check, X ,MoreVertical } from "lucide-react";

const dummyData = [
  {
    id: 1,
    patient: "Ahmed Ali",
    gender: "Male",
    department: "Cardiology",
    doctor: "Dr. Sarah",
    time: "10:00 AM",
    date: "2025-06-05",
  },
  {
    id: 2,
    patient: "Mona Hassan",
    gender: "Female",
    department: "Dermatology",
    doctor: "Dr. Khaled",
    time: "11:30 AM",
    date: "2025-06-06",
  },
  {
    id: 3,
    patient: "Omar Adel",
    gender: "Male",
    department: "Neurology",
    doctor: "Dr. Laila",
    time: "02:00 PM",
    date: "2025-06-07",
  },
];

export default function AppointmentRequests() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md ">
      <table className="w-full text-left text-sm text-gray-700 ">
        <thead className="bg-cyan-600  rounded-xl">
          <tr>
            <th className="py-3 px-4 text-white font-semibold rounded-l-xl">Patient Name</th>
            <th className="py-3 px-4 text-white font-semibold">Gender</th>
            <th className="py-3 px-4 text-white font-semibold">Department</th>
            <th className="py-3 px-4 text-white font-semibold">Doctor</th>
            <th className="py-3 px-4 text-white font-semibold">Time</th>
            <th className="py-3 px-4 text-white font-semibold">Date</th>
            <th className="py-3 px-4 text-white font-semibold rounded-r-xl">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="py-2 px-4 rounded-l-xl">{item.patient}</td>
              <td className="py-2 px-4">{item.gender}</td>
              <td className="py-2 px-4">{item.department}</td>
              <td className="py-2 px-4">{item.doctor}</td>
              <td className="py-2 px-4">{item.time}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4 flex gap-3">
                <button
                  type="button"
                  className="bg-green-200 rounded-full text-green-600 p-1  hover:bg-green-300 transition cursor-pointer"
                  aria-label="Accept appointment"
                >
                  <Check size={20} />
                </button>
                <button
                  type="button"
                  className="bg-red-200 rounded-full text-red-600 p-1  hover:bg-red-300 transition cursor-pointer"
                  aria-label="Reject appointment"
                >
                  <X size={20} />
                </button>
                <button
                  type="button"
                  aria-label=""
                  className="cursor-pointer"
                >
                  <MoreVertical size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
