
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Submit an Enquiry
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed mb-10 text-lg">
          Have a specific question about our treatments, financing, or the clinic? Send us a message and our specialists will respond directly.
        </p>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-left">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Your Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Your Enquiry</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"></textarea>
            </div>
            <button type="button" className="w-full bg-[#00a8a8] text-white py-4 rounded-xl font-bold hover:bg-[#009090] transition-colors text-lg shadow-lg">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    
        </div>
      </div>
    </div>
  );
}
