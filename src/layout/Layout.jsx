import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar className="h-screen" />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main  id="scroll-container" className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
