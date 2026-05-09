
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Dental Implants
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Permanent Solutions for Missing Teeth</h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Dental implants are the gold standard for replacing missing teeth. They look, feel, and function exactly like natural teeth. At Crystaldent, we use premium titanium implants and advanced 3D planning for flawless placement.
      </p>
      <div className="bg-[#e6f9f8] p-8 rounded-2xl mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-[#014d4e] mb-2">Special Offer</h3>
          <p className="text-gray-700 font-medium mb-4">Receive 10% OFF on an implant with a temporary crown when paid in full.</p>
          <a href="/book-online" className="inline-block bg-[#00a8a8] text-white px-6 py-2 rounded-full font-bold hover:bg-[#009090] transition-colors">Claim Offer</a>
        </div>
        <div className="absolute top-[-20%] right-[-5%] text-[#c0f2ee] text-9xl font-black opacity-50">%</div>
      </div>
      <h3 className="text-xl font-bold text-[#014d4e] mb-4">The Implant Journey</h3>
      <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-8">
        <li><strong className="text-[#014d4e]">Consultation & 3D Scan:</strong> Comprehensive assessment of your jawbone.</li>
        <li><strong className="text-[#014d4e]">Surgical Placement:</strong> Precision placement of the titanium fixture.</li>
        <li><strong className="text-[#014d4e]">Healing Phase:</strong> Allowing the implant to fuse securely with the bone.</li>
        <li><strong className="text-[#014d4e]">Final Restoration:</strong> Placement of the custom-crafted porcelain crown.</li>
      </ol>
      <a href="/enquire" className="inline-block border-2 border-[#014d4e] text-[#014d4e] px-8 py-4 rounded-full font-bold hover:bg-[#014d4e] hover:text-white transition-colors">Enquire Now</a>
    
        </div>
      </div>
    </div>
  );
}
