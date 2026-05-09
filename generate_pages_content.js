const fs = require('fs');
const path = require('path');

const generateContent = (title, contentHTML) => `
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-[#014d4e] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            ${title}
          </h1>
          <div className="w-24 h-1 bg-[#00a8a8] mx-auto rounded-full"></div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
      </div>
      
      {/* Content Area */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-[#014d4e] prose-a:text-[#00a8a8]">
          ${contentHTML}
        </div>
      </div>
    </div>
  );
}
`;

const pages = {
  'about': {
    title: 'About the Clinic',
    content: `
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
    `
  },
  'services': {
    title: 'Our Services',
    content: `
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
    `
  },
  'prices': {
    title: 'Treatment Prices',
    content: `
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
    `
  },
  'credentials': {
    title: 'Clinic Credentials',
    content: `
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
    `
  },
  'contact': {
    title: 'Contact Us',
    content: `
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
    `
  },
  'services/restorative-dentistry': {
    title: 'Restorative Dentistry',
    content: `
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
    `
  },
  'services/oral-surgery': {
    title: 'Oral Surgery',
    content: `
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
    `
  },
  'services/prosthodontics': {
    title: 'Prosthodontics',
    content: `
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
    `
  },
  'services/dental-implants': {
    title: 'Dental Implants',
    content: `
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
    `
  },
  'book-online': {
    title: 'Book an Appointment',
    content: `
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#014d4e] to-[#00a8a8] rounded-t-3xl"></div>
        <h2 className="text-3xl font-bold mb-2 text-[#014d4e] text-center">Schedule Your Visit</h2>
        <p className="text-gray-500 text-center mb-8">Please fill in your details below and our reception team will contact you to confirm.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#014d4e] mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#014d4e] mb-2">Reason for Visit</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50 appearance-none">
              <option>General Checkup / Consultation</option>
              <option>Dental Implants</option>
              <option>Tooth Pain / Emergency</option>
              <option>Cosmetic Dentistry</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-[#014d4e] mb-2">Preferred Date</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00a8a8] focus:ring-1 focus:ring-[#00a8a8] transition-colors bg-gray-50" />
          </div>
          
          <button type="button" className="w-full bg-[#014d4e] text-white py-4 rounded-xl font-bold hover:bg-[#013d3e] transition-colors text-lg mt-4 shadow-lg">
            Request Appointment
          </button>
        </form>
      </div>
    `
  },
  'enquire': {
    title: 'Submit an Enquiry',
    content: `
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
    `
  }
};

const basePath = path.join(process.cwd(), 'app');

Object.keys(pages).forEach(pageKey => {
  const dirPath = path.join(basePath, pageKey);
  const data = pages[pageKey];
  const fileContent = generateContent(data.title, data.content);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), fileContent);
});

console.log('Successfully updated all pages with detailed content!');
