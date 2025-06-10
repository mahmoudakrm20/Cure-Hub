import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointments/Appointments";
import AppointmentList from "./pages/Appointments/AppointmentList";
import AppointmentRequests from "./pages/Appointments/AppointmentRequests";
import DoctorSchedule from "./pages/Appointments/DoctorSchedule";
import Patients from "./pages/Patients/Patients";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments/>} >
          <Route index element={<AppointmentRequests />} />
            <Route path="list" element={<AppointmentList />} />
            <Route path="schedule" element={<DoctorSchedule />} />
          </Route>
          <Route path="/patients" element={<Patients/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
