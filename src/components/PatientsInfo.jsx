export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow p-0 overflow-hidden max-w-3xl w-full h-80">
      <div className="flex">
        {/* Left Section */}
        <div className="w-1/3 flex flex-col items-center justify-center py-6 border-r-2 border-gray-300">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mb-3"
          />
          <h2 className="text-base font-semibold">Sarah Lawsson</h2>
          <p className="text-sm text-gray-500 mb-3">sarah1234@gmail.com</p>

          {/* Stats */}
          <div className="flex items-center justify-between text-center mb-4 rounded-md overflow-hidden w-44">
            <div className="w-1/2 py-1">
              <p className="text-cyan-600 font-semibold text-sm">12</p>
              <p className="text-xs text-gray-500">Post</p>
            </div>
            <div className="h-full w-px bg-gray-300 mr-2" />
            <div className="w-1/2 py-1">
              <p className="text-cyan-600 font-semibold text-sm">1</p>
              <p className="text-xs text-gray-500">Upcoming</p>
            </div>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-8 py-1.5 rounded">
            Send Message
          </button>
        </div>

        {/* Right Section */}
        <div className="w-2/3 py-6 pl-10">
          <div className="flex flex-col   justify-between min-h-[260px] text-sm text-gray-700">
            {/* Row 1 */}
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-gray-500">Gender</p>
                <p className="font-medium">Female</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Birthday</p>
                <p className="font-medium">23.7.1997</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Phone Number</p>
                <p className="font-medium">(555) 123–4567</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-gray-500">Insurance</p>
                <p className="font-medium">Med Right</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Register Date</p>
                <p className="font-medium">4 Nov. 2020</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Marital Status</p>
                <p className="font-medium">Single</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-gray-500">Address</p>
                <p className="font-medium">12 Loran, Alex.</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-500">Postal Code</p>
                <p className="font-medium">5310002</p>
              </div>
              <div className="flex-1" /> {/* empty to balance flexbox */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
