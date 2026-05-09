
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Prosthodontics
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Restoring Function and Aesthetics</h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Prosthodontic rehabilitation at Crystaldent is meticulously planned. We focus on the perfect balance between flawless aesthetics and stable, long-lasting occlusal function. We manage complex cases involving full mouth and bite rehabilitation.
      </p>
      <div className="bg-gray-50 border-l-4 border-[#00a8a8] p-6 mb-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-[#014d4e] mb-2">Key Treatments:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Porcelain Crowns and Bridges</li>
          <li>Aesthetic Veneers</li>
          <li>Implant-Supported Prosthetics</li>
          <li>Full Arch Rehabilitation (All-on-4 / All-on-6)</li>
        </ul>
      </div>
      <p className="text-gray-700 mb-8">
        Our principal prosthodontists utilize digital smile design techniques to plan your new smile meticulously before any clinical work begins, guaranteeing predictable and stunning results.
      </p>
      <a href="/book-online" className="inline-block bg-[#014d4e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#013d3e] transition-colors">Book a Consultation</a>
    
        </div>
      </div>
    </div>
  );
}
