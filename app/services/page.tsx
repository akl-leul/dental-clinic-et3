
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <p className="text-gray-700 leading-relaxed mb-10 text-lg">
        At Crystaldent, every area of care is overseen by a specialist in that field. We offer a comprehensive suite of dental services tailored to your individual needs.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <a href="/services/restorative-dentistry" className="block p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-[#00a8a8] transition-colors group">
          <h3 className="text-xl font-bold text-[#014d4e] mb-2 group-hover:text-[#00a8a8] transition-colors">Restorative Dentistry</h3>
          <p className="text-gray-600">Management of dental caries, pulpitis, and periodontitis using magnification techniques.</p>
        </a>
        <a href="/services/oral-surgery" className="block p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-[#00a8a8] transition-colors group">
          <h3 className="text-xl font-bold text-[#014d4e] mb-2 group-hover:text-[#00a8a8] transition-colors">Oral Surgery</h3>
          <p className="text-gray-600">Complex surgical extractions, pre-implant preparation, and bone augmentation procedures.</p>
        </a>
        <a href="/services/prosthodontics" className="block p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-[#00a8a8] transition-colors group">
          <h3 className="text-xl font-bold text-[#014d4e] mb-2 group-hover:text-[#00a8a8] transition-colors">Prosthodontics</h3>
          <p className="text-gray-600">Rehabilitation focused on restoring function and aesthetics with meticulous planning.</p>
        </a>
        <a href="/services/dental-implants" className="block p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-[#00a8a8] transition-colors group">
          <h3 className="text-xl font-bold text-[#014d4e] mb-2 group-hover:text-[#00a8a8] transition-colors">Dental Implants</h3>
          <p className="text-gray-600">Permanent solutions for missing teeth using premium titanium implants.</p>
        </a>
      </div>
    
        </div>
      </div>
    </div>
  );
}
