import DocumentCard from '../../components/DocumentCard';
import PatientsInfo from '../../components/PatientsInfo';
import PrescriptionsCard from '../../components/PrescriptionsCard';
import TimelineCard from '../../components/TimelineCard';

import { Pencil, Printer } from 'lucide-react';

export default function Patients() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/*  Topbar */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <span className="text-cyan-600 font-medium cursor-pointer">Patients List</span>
          <span className="mx-2"> &gt; </span>
          <span className="font-semibold text-gray-700">Sarah Lawsson</span>
        </div>
        <div className="flex items-center gap-3">
          <Printer className="w-5 h-5 text-gray-500 cursor-pointer" />
          <button className="flex items-center gap-1 text-white bg-cyan-600 hover:bg-cyan-700 px-3 py-1.5 text-sm rounded-md">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>

     {/* First row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2">
    <PatientsInfo />
  </div>
  <div className="md:col-span-1">
    <DocumentCard />
  </div>
</div>

{/* Second row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2">
    <TimelineCard />
  </div>
  <div className="md:col-span-1">
    <PrescriptionsCard />
  </div>
</div>

    </div>
  );
}
