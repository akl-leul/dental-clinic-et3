
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            About the Clinic
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          
      <h2 className="text-3xl font-bold mb-6 text-[#014d4e]">Welcome to Crystaldent</h2>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Located in the prestigious medical district of 10 Harley Street, London W1, Crystaldent is a modern private dental clinic offering exceptional care and state-of-the-art facilities. Our mission is to deliver comprehensive dental treatments in line with the highest modern clinical standards.
      </p>
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-[#e6f9f8] p-8 rounded-2xl border border-[#c0f2ee]">
          <h3 className="text-xl font-bold text-[#014d4e] mb-3">Our Mission</h3>
          <p className="text-gray-700">To provide unparalleled dental care using cutting-edge technology, ensuring our patients achieve optimal oral health and confidence in their smiles.</p>
        </div>
        <div className="bg-[#e6f9f8] p-8 rounded-2xl border border-[#c0f2ee]">
          <h3 className="text-xl font-bold text-[#014d4e] mb-3">Our Vision</h3>
          <p className="text-gray-700">To be the leading center for complex dental rehabilitation, recognized for our clinical excellence and patient-centered approach.</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-[#014d4e]">Why Choose Us?</h3>
      <ul className="space-y-4 mb-8 text-gray-700">
        <li className="flex items-center gap-3"><span className="text-[#00a8a8] text-xl">✦</span> Over 5,000 satisfied patients treated</li>
        <li className="flex items-center gap-3"><span className="text-[#00a8a8] text-xl">✦</span> Advanced 3D diagnostics and treatment planning</li>
        <li className="flex items-center gap-3"><span className="text-[#00a8a8] text-xl">✦</span> Multidisciplinary team of specialists with 7+ years experience each</li>
      </ul>
    
        </div>
      </div>
    </div>
  );
}
