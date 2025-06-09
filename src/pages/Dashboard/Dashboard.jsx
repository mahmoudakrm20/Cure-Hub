import CardStats from "./CardStats";
import DoctorSchedule from "./DoctorSchedule";
import GenderChart from "./GenderChart";
import TopDepartments from "./TopDepartments";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <CardStats />
      <div className="flex gap-6 items-stretch">
        
        <div className="flex flex-col gap-6 flex-[0.6]">
          <GenderChart />
          <DoctorSchedule />
        </div>
      
        <div className="flex-[0.4]">
          <TopDepartments />
        </div>
      </div>
    </div>
  );
}
