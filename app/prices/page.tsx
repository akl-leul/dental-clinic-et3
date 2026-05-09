
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Treatment Prices
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <p className="text-gray-700 leading-relaxed mb-8 text-lg text-center">
        We believe in complete transparency. Below is a guide to our treatment fees. A comprehensive, personalized treatment plan and estimate will be provided following your consultation.
      </p>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#014d4e] text-white px-8 py-4 font-bold text-lg uppercase tracking-wider">Consultations & Diagnostics</div>
        <div className="divide-y divide-gray-100">
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">New Patient Consultation</span><span className="font-bold text-[#014d4e]">£95</span></div>
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">Routine Examination</span><span className="font-bold text-[#014d4e]">£65</span></div>
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">3D CBCT Scan</span><span className="font-bold text-[#014d4e]">£150</span></div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-8">
        <div className="bg-[#014d4e] text-white px-8 py-4 font-bold text-lg uppercase tracking-wider">Restorative & Implants</div>
        <div className="divide-y divide-gray-100">
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">Composite Filling (from)</span><span className="font-bold text-[#014d4e]">£150</span></div>
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">Porcelain Crown (from)</span><span className="font-bold text-[#014d4e]">£795</span></div>
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">Dental Implant Placement</span><span className="font-bold text-[#014d4e]">£1,200</span></div>
          <div className="flex justify-between px-8 py-5 hover:bg-gray-50"><span className="text-gray-800 font-medium">Implant Crown</span><span className="font-bold text-[#014d4e]">£995</span></div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 italic mb-6">0% Finance options are available for treatments over £1,000.</p>
        <a href="/enquire" className="inline-block bg-[#00a8a8] text-white px-8 py-4 rounded-full font-bold hover:bg-[#009090] transition-colors">Enquire About Finance</a>
      </div>
    
        </div>
      </div>
    </div>
  );
}
