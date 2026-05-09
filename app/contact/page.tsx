
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Get in Touch</h2>
          <p className="text-gray-700 mb-8">We are here to help. Reach out to our reception team to book an appointment or ask any questions regarding your treatment.</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#e6f9f8] rounded-full flex items-center justify-center text-[#00a8a8] flex-shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-[#014d4e]">Address</h4>
                <p className="text-gray-600">10 Harley Street<br/>London W1G 9PF, United Kingdom</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#e6f9f8] rounded-full flex items-center justify-center text-[#00a8a8] flex-shrink-0">✉️</div>
              <div>
                <h4 className="font-bold text-[#014d4e]">Email</h4>
                <a href="mailto:info@digital-crystal.ru" className="text-gray-600 hover:text-[#00a8a8]">info@digital-crystal.ru</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#e6f9f8] rounded-full flex items-center justify-center text-[#00a8a8] flex-shrink-0">📞</div>
              <div>
                <h4 className="font-bold text-[#014d4e]">Phone</h4>
                <p className="text-gray-600">+44 20 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f8fcfb] p-8 rounded-3xl border border-gray-100 shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00a8a8]" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00a8a8]" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00a8a8]" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-[#014d4e] text-white py-4 rounded-xl font-bold hover:bg-[#013d3e] transition-colors mt-4">Send Message</button>
          </form>
        </div>
      </div>
    
        </div>
      </div>
    </div>
  );
}
