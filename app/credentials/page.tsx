
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Clinic Credentials
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Excellence as Standard</h2>
      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        Crystaldent is fully registered with the Care Quality Commission (CQC) and adheres to the strict guidelines set out by the General Dental Council (GDC). Our commitment to continuous professional development ensures that our clinicians remain at the forefront of modern dentistry.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-8 bg-[#f8fcfb] rounded-2xl border border-gray-100">
          <div className="text-4xl mb-4 text-[#00a8a8]">✓</div>
          <h3 className="font-bold text-lg text-[#014d4e] mb-2">CQC Registered</h3>
          <p className="text-sm text-gray-600">Compliant with national standards of care.</p>
        </div>
        <div className="p-8 bg-[#f8fcfb] rounded-2xl border border-gray-100">
          <div className="text-4xl mb-4 text-[#00a8a8]">★</div>
          <h3 className="font-bold text-lg text-[#014d4e] mb-2">GDC Compliant</h3>
          <p className="text-sm text-gray-600">All specialists hold full GDC registration.</p>
        </div>
        <div className="p-8 bg-[#f8fcfb] rounded-2xl border border-gray-100">
          <div className="text-4xl mb-4 text-[#00a8a8]">✦</div>
          <h3 className="font-bold text-lg text-[#014d4e] mb-2">ISO 9001</h3>
          <p className="text-sm text-gray-600">Certified for quality management systems.</p>
        </div>
      </div>
    
        </div>
      </div>
    </div>
  );
}
