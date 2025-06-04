import { Search, Mail,Bell,ChevronDown } from 'lucide-react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
      {/* Search bar - left side */}
      <div className="flex items-center w-1/2 max-w-md border-1 border-gray-300 rounded-md px-3 py-2">
        <Search className="text-gray-500 mr-3" size={20} />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none flex-grow text-gray-700"
        />
      </div>

      {/* Right side - messages + doctor info */}
      <div className="flex items-center w-1/2 justify-end gap-6">
        
        
        <button className="relative text-gray-600 hover:text-gray-900 cursor-pointer">
          <Mail size={22} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className="relative text-gray-600 hover:text-gray-900 cursor-pointer">
          <Bell size={22} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
                 

        {/* Doctor info */}
        <div className="flex items-center gap-6">
          <img
            src="/doctor5.jpg"  
            alt="Doctor"
            className="w-10 h-10 rounded-full object-cover object-center"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Dr. John Doe</span>
            <span className="text-sm text-gray-500">Manager</span>
          </div>
          <div>
            <ChevronDown  size={22}/>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
