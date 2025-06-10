import { Search, Mail, Bell, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
      {/* Left side - Search or Dropdown */}
      <div className="w-1/2 max-w-md">
        {/* Search bar - visible on sm and up */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-md px-3 py-2">
          <Search className="text-gray-500 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className=" bg-transparent outline-none flex-grow text-gray-700"
          />
        </div>

        {/* Dropdown button - visible on small screens only */}
        <div className="sm:hidden relative">
          <button
            className="flex items-center gap-2 text-gray-600 border border-gray-300 px-3 py-2 rounded-md "
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <Menu size={25} />
            
          </button>

          {openDropdown && (
            <div onClick={()=> setOpenDropdown(false)} className="absolute mt-2 bg-white shadow-lg rounded-md border w-full z-10">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="/appointments"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Appointments
              </Link>
             
              <Link
                to="/patients"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Patients
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right side - always visible */}
      <div className="flex items-center w-1/2 justify-end gap-6 ml-2">
        <button className="relative text-gray-400 hover:text-gray-900 cursor-pointer">
          <Mail size={22} />
        </button>
        <button className="relative text-gray-400 hover:text-gray-900 cursor-pointer">
          <Bell size={22} />
        </button>

        {/* Doctor info */}
        <div className="flex items-center gap-6">
          <img
            src="/doctor5.jpg"
            alt="Doctor"
            className="w-10 h-10 border border-gray-600 rounded-full object-cover object-center"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Dr. John Doe</span>
            <span className="text-sm text-gray-500">Manager</span>
          </div>
          <ChevronDown size={22} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;