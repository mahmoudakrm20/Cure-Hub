import { CheckCircle, XCircle, MoreVertical, FilePlus } from "lucide-react";
import { useState } from "react";

const appointments = [
  {
    date: "26",
    day: "MON",
    events: [
      {
        type: "Examine",
        specialist: "John Albert",
        status: "Confirmed",
      },
    ],
  },
  {
    date: "26",
    day: "THU",
    events: [
      {
        type: "Follow-Up",
        specialist: "John Albert",
        status: "Canceled",
      },
      {
        type: "Follow-Up",
        specialist: "John Albert",
        status: "Pending",
        actions: true,
      },
      {
        type: "Examine",
        specialist: "John Albert",
        status: "Confirmed",
      },
      {
        type: "Examine",
        specialist: "John Albert",
        status: "Confirmed",
      },
    ],
  },
];

export default function TimelineCard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="bg-gray-100 shadow-md ">
      {/* Tabs Container with gray background */}
      <div className="bg-white px-6 pt-8 pb-4 rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-md">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "upcoming"
                  ? "bg-white text-cyan-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Appointments
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "past"
                  ? "bg-white text-cyan-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Post Appointments
            </button>
          </div>

          <button className="flex items-center gap-1 text-cyan-600 text-sm font-medium hover:underline">
            <FilePlus className="w-4 h-4" />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="p-6 pt-1  bg-white  h-90 overflow-y-auto overflow-x-hidden">
        <div className="relative p-3 bg-gray-100">
          {/* Line*/}
          <div className="absolute left-15 top-0 bottom-0 w-px bg-gray-200 z-0" />

          {appointments.map((item, index) => (
            <div key={index} className="relative pl-24 mb-8">
              {/* Date */}
              <div className="absolute left-0 top-7 w-20 text-right pr-12">
                <p className="text-base font-bold leading-none">{item.date}</p>
                <p className="text-xs text-gray-400">{item.day}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-10 top-7 z-10">
                <div className="w-4 h-4 bg-cyan-600 rounded-full border-4 border-white" />
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-3">
                {item.events.map((event, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex gap-10 text-sm text-gray-700">
                      <div>
                        <p className="text-gray-400">Dateeee</p>
                        <p className="font-semibold">26.12.2020</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Type</p>
                        <p className="font-semibold">{event.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Specialist</p>
                        <p className="font-semibold">{event.specialist}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {event.status === "Confirmed" && (
                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                          Confirmed
                        </span>
                      )}
                      {event.status === "Canceled" && (
                        <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full font-semibold">
                          Canceled
                        </span>
                      )}
                      {event.status === "Pending" && event.actions && (
                        <div className="flex gap-4">
                          <CheckCircle className="text-green-500 w-5 h-5 cursor-pointer" />
                          <XCircle className="text-red-500 w-5 h-5 cursor-pointer" />
                        </div>
                      )}
                      <MoreVertical className="text-gray-400 w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-3 bg-white rounded-2xl" ></div>
    </div>
  );
}
