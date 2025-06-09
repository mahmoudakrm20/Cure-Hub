import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  User,
  Stethoscope,
  Ear,
  Bone,
  Syringe,
  HeartPulse,
  ChevronRight,
  PersonStanding,
  PersonStandingIcon,
} from "lucide-react";
import { useState } from "react";

const data = [
  { name: "General Physician", value: 35, color: "#00bcd4", icon: Stethoscope },
  { name: "ENT", value: 15, color: "#ab47bc", icon: Ear },
  { name: "Orthopedic", value: 10, color: "#26c6da", icon: Bone },
  { name: "Dentist", value: 25, color: "#ffa726", icon: Syringe },
  { name: "Cardiology", value: 5, color: "#ffee58", icon: HeartPulse },
];

export default function TopDepartments() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white rounded-xl min-w-90 p-4 shadow flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-800">
          Top Patient Department
        </h2>
        <button className="text-sm text-gray-400 ">
          See More
        </button>
      </div>

      {/* Content: Chart + List */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Chart */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  wrapperStyle={{ zIndex: 50 }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const entry = payload[0].payload;
                      const Icon = entry.icon;
                      return (
                        <div className="bg-white border border-gray-200 rounded px-3 py-2 text-sm shadow flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: entry.color }}
                          >
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">{entry.name}</p>
                            <p className="text-gray-500">{entry.value}%</p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                  onMouseEnter={(_, index) => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      fillOpacity={hoveredIndex === null || hoveredIndex === index ? 1 : 0.3}
                      style={{ transition: "all 0.3s ease" }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <svg width="35" height="80" viewBox="0 0 42 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5127 54.8843C21.3713 56.55 22.5019 65.3667 23.0854 68.8238C23.3631 70.4615 24.1248 73.13 23.8508 74.5467C23.4595 76.5214 23.3464 79.0767 23.5618 80.5647C23.6977 81.4683 24.1253 85.6358 23.5134 87.1601C23.1933 87.9594 22.6066 92.0558 22.6066 92.0558C21.0781 95.9149 21.9408 95.725 21.9408 95.725C22.414 96.3057 23.2245 95.7706 23.2245 95.7706C23.8419 96.1643 24.2695 95.6771 24.2695 95.6771C24.7995 96.1159 25.4174 95.6231 25.4174 95.6231C26.0832 95.9688 26.7006 95.3314 26.7006 95.3314C27.0831 95.524 27.1766 95.2807 27.1766 95.2807C28.324 95.2072 26.5364 91.5352 26.5364 91.5352C26.1083 88.2372 26.9612 86.4017 26.9612 86.4017C29.7547 78.1173 29.8966 75.9189 28.78 72.7968C28.4654 71.8956 28.3859 71.5387 28.5306 71.1474C28.8651 70.2443 28.6213 66.6118 29.0294 65.1694C29.8166 62.3875 30.5932 55.3324 30.998 52.0405C31.5419 47.6064 29.0712 41.661 29.0712 41.661C28.5301 39.2415 29.3234 30.6212 29.3234 30.6212C30.4313 32.3451 30.3889 35.388 30.3889 35.388C30.213 38.5794 32.967 43.457 32.967 43.457C34.2903 45.4726 34.7914 47.3849 34.7914 47.5268C34.7914 48.1075 34.6644 49.5131 34.6644 49.5131L34.7151 50.7373C34.7379 51.049 34.9133 52.1224 34.885 52.6412C34.6784 55.834 35.1855 55.2333 35.1855 55.2333C35.6136 55.2333 36.084 52.664 36.084 52.664C36.084 53.3266 35.9221 55.3101 36.2794 56.0582C36.707 56.9507 37.0215 55.9052 37.0271 55.6953C37.1402 51.6301 37.3844 52.6952 37.3844 52.6952C37.6222 55.9931 37.9144 56.738 38.4383 56.4803C38.8352 56.2909 38.4723 52.5226 38.4723 52.5226C39.1521 54.761 39.6676 55.1174 39.6676 55.1174C40.7894 55.9052 40.0957 53.7295 39.9398 53.2987C39.1097 51.0095 39.0841 50.2162 39.0841 50.2162C40.1212 52.2732 40.9029 52.1969 40.9029 52.1969C41.9144 51.874 40.0189 48.9613 38.9082 47.5659C38.3415 46.8549 37.6106 45.903 37.3984 45.3377C37.0527 44.3801 36.7917 41.3018 36.7917 41.3018C36.687 37.6693 35.789 36.0915 35.789 36.0915C34.2536 33.6339 33.9646 29.0495 33.9646 29.0495L33.8967 21.3095C33.3584 16.0299 29.4681 15.9918 29.4681 15.9918C25.536 15.4065 24.9888 14.1362 24.9888 14.1362C24.156 12.9377 24.632 10.6401 24.632 10.6401C25.3229 10.078 25.5895 8.58587 25.5895 8.58587C26.7369 7.70602 26.6806 6.41858 26.1507 6.43254C25.7254 6.44371 25.8217 6.09149 25.8217 6.09149C26.5392 0.29592 21.3941 0 21.3941 0H20.6087C20.6087 0 15.4612 0.29592 16.1778 6.09009C16.1778 6.09009 16.2741 6.44278 15.8451 6.43114C15.3165 6.41719 15.2672 7.70462 16.4104 8.58447C16.4104 8.58447 16.6766 10.0762 17.368 10.6387C17.368 10.6387 17.844 12.9363 17.0111 14.1348C17.0111 14.1348 16.4658 15.4051 12.5318 15.9904C12.5318 15.9904 8.63507 16.0285 8.10511 21.3081L8.0316 29.0481C8.0316 29.0481 7.74825 33.6325 6.20676 36.0902C6.20676 36.0902 5.31295 37.6684 5.20966 41.3004C5.20966 41.3004 4.9477 44.3787 4.60339 45.3363C4.39355 45.8988 3.66306 46.8508 3.09169 47.5645C1.97129 48.9571 0.0882879 51.8637 1.09563 52.1955C1.09563 52.1955 1.88149 52.2718 2.91442 50.2148C2.91442 50.2148 2.89301 51.0025 2.06435 53.2973C1.9015 53.7225 1.20869 55.8982 2.33095 55.116C2.33095 55.116 2.85067 54.7592 3.52627 52.5212C3.52627 52.5212 3.16381 56.2895 3.56721 56.4789C4.09438 56.7371 4.38192 55.9917 4.61968 52.6938C4.61968 52.6938 4.86349 51.6287 4.97655 55.6939C4.98214 55.9038 5.28969 56.9493 5.71914 56.0568C6.0816 55.3087 5.91875 53.3284 5.91875 52.6626C5.91875 52.6626 6.38357 55.2319 6.81814 55.2319C6.81814 55.2319 7.32949 55.8326 7.11965 52.6398C7.08568 52.1182 7.26854 51.0476 7.29133 50.7359L7.34066 49.5117C7.34066 49.5117 7.21317 48.1093 7.21317 47.5254C7.21317 47.3807 7.71474 45.4712 9.03754 43.4556C9.03754 43.4556 11.7888 38.5757 11.6115 35.3866C11.6115 35.3866 11.5733 32.3437 12.6812 30.6198C12.6812 30.6198 13.4675 39.2397 12.9348 41.6596C12.9348 41.6596 10.4599 47.605 11.0057 52.0391C11.4077 55.3398 12.1829 62.3856 12.972 65.168C13.3842 66.6076 13.1404 70.2391 13.4708 71.146C13.6197 71.5401 13.5415 71.903 13.2214 72.7954C12.1107 75.9175 12.2522 78.1164 15.0457 86.4003C15.0457 86.4003 15.9056 88.2358 15.471 91.5338C15.471 91.5338 13.6862 95.2058 14.8294 95.2793C14.8294 95.2793 14.9187 95.5226 15.3054 95.33C15.3054 95.33 15.9228 95.9674 16.59 95.6217C16.59 95.6217 17.2079 96.1149 17.736 95.6757C17.736 95.6757 18.1594 96.1629 18.7768 95.7692C18.7768 95.7692 19.5874 96.3159 20.0689 95.7236C20.0689 95.7236 20.9246 95.9135 19.4013 92.0544C19.4013 92.0544 18.8178 87.9632 18.4963 87.1587C17.883 85.6349 18.3162 81.4585 18.447 80.5633C18.6577 79.067 18.5447 76.5177 18.1594 74.5453C17.8775 73.1318 18.641 70.4629 18.9229 68.8224C19.5022 65.3686 20.6375 56.5514 20.4956 54.8829L20.9646 55.0476C21.3005 55.0486 21.5127 54.8843 21.5127 54.8843Z" fill="#212529"/>
              </svg>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="mt-4 space-y-2">
          {data.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`flex items-center justify-between text-sm cursor-pointer transition-all duration-300 py-2 ${
                  hoveredIndex === null || hoveredIndex === i ? "opacity-100" : "opacity-40"
                } ${i !== data.length - 1 ? "border-b border-gray-200" : ""}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: d.color }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>

                  <p className="text-gray-600 font-semibold">{d.name}</p>
                <p className="text-gray-500">{d.value}%</p>
                  </div>
                </div>
                <ChevronRight size={16}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
