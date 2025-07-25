import DocumentCard from './DocumentCard';
import PatientsInfo from './PatientsInfo';
import PrescriptionsCard from './PrescriptionsCard';
import TimelineCard from './TimelineCard';

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

      {/* First row*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PatientsInfo />
        </div>
        <div>
          <DocumentCard />
        </div>
      </div>

      {/*  Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TimelineCard />
        </div>
        <div>
          <PrescriptionsCard />
        </div>
      </div>
    </div>
  );
}
