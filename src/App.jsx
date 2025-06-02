import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/appointments" element={<div>Appointments</div>} />
          <Route path="/patients" element={<div>Patients</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
