
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Restorative Dentistry
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Preserving Your Natural Teeth</h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Our restorative dentistry services focus on the management of dental caries, pulpitis, and periodontitis. We utilize advanced magnification techniques, such as dental microscopes, to ensure precise treatment and the maximum preservation of healthy tooth tissue.
      </p>
      <div className="bg-gray-50 border-l-4 border-[#00a8a8] p-6 mb-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-[#014d4e] mb-2">Key Treatments:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Composite (White) Fillings</li>
          <li>Microscope-Assisted Root Canal Therapy</li>
          <li>Porcelain Inlays and Onlays</li>
          <li>Periodontal Disease Management</li>
        </ul>
      </div>
      <p className="text-gray-700 mb-8">
        We prioritize minimally invasive procedures. By detecting issues early with 3D diagnostics, we can intervene before extensive work is needed, keeping your natural smile healthy for years to come.
      </p>
      <a href="/book-online" className="inline-block bg-[#014d4e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#013d3e] transition-colors">Book a Consultation</a>
    
        </div>
      </div>
    </div>
  );
}
