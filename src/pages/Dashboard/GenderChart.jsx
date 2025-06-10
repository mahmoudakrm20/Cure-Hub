import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid  , ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Sat", women: 750, men: 600 },   
  { name: "Sun", women: 600, men: 550 },  
  { name: "Mon", women: 500, men: 700 },   
  { name: "Tues", women: 850, men: 400 },  
  { name: "Wed", women: 900, men: 600 },   
  { name: "Thur", women: 700, men: 650 }, 
  { name: "Friday", women: 800, men: 450 }, 
];


export default function GenderChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-700">Appointments By Gender</h2>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-orange-400  inline-block" />
              Women 67%
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-cyan-600  inline-block" />
              Men 33%
            </span>
          </div>

          <button className="flex items-center text-sm text-cyan-600 border border-cyan-600 px-2 py-1 rounded-md">
            Weekly <ChevronDown size={14} className="ml-1 text-cyan-600" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis  tick={{ fontWeight: 600, fill: '#000' }} dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            {/* <Tooltip /> */}
            <Bar dataKey="women" fill="#fb923c" radius={[5, 5, 0, 0]} barSize={13} />
            <Bar dataKey="men" fill="#06b6d4" radius={[5, 5, 0, 0]} barSize={13} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
