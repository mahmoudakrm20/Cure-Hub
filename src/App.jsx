import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments/Appointments";
import AppointmentList from "./pages/Appointments/AppointmentList";
import AppointmentRequests from "./pages/Appointments/AppointmentRequests";
import DoctorSchedule from "./pages/Appointments/DoctorSchedule";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments/>} >
          <Route index element={<AppointmentList />} />
            <Route path="requests" element={<AppointmentRequests />} />
            <Route path="schedule" element={<DoctorSchedule />} />
          </Route>
          <Route path="/patients" element={<div>Patients</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
