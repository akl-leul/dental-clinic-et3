
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Book an Appointment
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#014d4e] to-[#00a8a8] rounded-t-3xl"></div>
        <h2 className="text-3xl font-bold mb-2 text-[#014d4e] text-center">Schedule Your Visit</h2>
        <p className="text-gray-500 text-center mb-8">Please fill in your details below and our reception team will contact you to confirm.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#014d4e] mb-2">Reason for Visit</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50 appearance-none">
              <option>General Checkup / Consultation</option>
              <option>Dental Implants</option>
              <option>Tooth Pain / Emergency</option>
              <option>Cosmetic Dentistry</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-[#014d4e] mb-2">Preferred Date</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
          </div>
          
          <button type="button" className="w-full bg-[#014d4e] text-white py-4 rounded-xl font-bold hover:bg-[#013d3e] transition-colors text-lg mt-4 shadow-lg">
            Request Appointment
          </button>
        </form>
      </div>
    
        </div>
      </div>
    </div>
  );
}
