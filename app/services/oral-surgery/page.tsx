
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Oral Surgery
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Advanced Surgical Procedures</h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Our dedicated oral surgeons perform complex surgical extractions, pre-implant preparations, and bone augmentation procedures. All surgeries are carried out under the precise guidance of advanced 3D diagnostic imaging to ensure maximum safety and predictability.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-xl">
          <h3 className="font-bold text-[#014d4e] text-lg mb-2">Wisdom Tooth Extraction</h3>
          <p className="text-gray-600 text-sm">Safe and painless removal of impacted or problematic wisdom teeth by specialized surgeons.</p>
        </div>
        <div className="bg-white shadow-sm border border-gray-100 p-6 rounded-xl">
          <h3 className="font-bold text-[#014d4e] text-lg mb-2">Bone Grafting</h3>
          <p className="text-gray-600 text-sm">Restoring jawbone volume to create a stable foundation for future dental implants.</p>
        </div>
      </div>
      <p className="text-gray-700 mb-8">
        We understand that surgery can cause anxiety. Our clinical environment is designed to be calming, and we offer conscious sedation options to ensure a completely stress-free experience.
      </p>
      <a href="/book-online" className="inline-block bg-[#014d4e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#013d3e] transition-colors">Book a Consultation</a>
    
        </div>
      </div>
    </div>
  );
}
