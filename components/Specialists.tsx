import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Specialists() {
  const doctors = [
    {
      name: "Dr James Whitmore",
      role: "Principal Dentist, Prosthodontist",
      img: "/images/doctor_1.png",
      exp: "18 Years of Clinical Experience",
      expertise: "implant dentistry, prosthodontics, and full occlusal rehabilitation"
    },
    {
      name: "Dr Matthew Collins",
      role: "Oral Surgeon, Implant Dentist",
      img: "/images/doctor_3.png",
      exp: "25 Years of Surgical Experience",
      expertise: "implant placement, bone augmentation, and advanced surgical extractions"
    },
    {
      name: "Dr Charlotte Bennett",
      role: "Consultant Periodontist",
      img: "/images/doctor_2.png",
      exp: "14 Years of Clinical Experience",
      expertise: "periodontal disease management, preventive dentistry, and long-term maintenance therapy"
    },
    {
      name: "Dr Edward Kensington",
      role: "General and Restorative Dentist",
      img: "/images/doctor_1.png",
      exp: "12 Years of Clinical Experience",
      expertise: "microscope-assisted endodontic treatment, aesthetic restorative dentistry, and caries management"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[#014d4e] mb-4">
          <span className="text-xl">✦</span>
          <span className="font-medium text-sm">Our Dentists</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#014d4e] mb-6 uppercase">
          OUR SPECIALISTS
        </h2>
        
        <p className="text-[#014d4e]/80 text-lg max-w-4xl mb-12">
          Each clinician holds a dedicated area of specialism and brings substantial practical experience in restorative, prosthodontic, and surgical dentistry.
        </p>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {doctors.map((doc, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] snap-center flex flex-col border border-gray-100">
                <div className="h-72 relative bg-gray-100">
                  <Image src={doc.img} alt={doc.name} fill className="object-cover object-top" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[#00a8a8] font-medium text-sm mb-2">{doc.role}</p>
                  <h3 className="text-2xl font-bold text-[#014d4e] mb-4">{doc.name}</h3>
                  <p className="text-[#014d4e]/80 text-sm mb-2 font-medium">{doc.exp}</p>
                  <p className="text-[#014d4e]/70 text-sm mb-8 flex-grow">
                    <span className="font-semibold text-[#014d4e]">Expertise</span> in {doc.expertise}
                  </p>
                  <Link href="/book-online" className="flex items-center justify-center gap-2 bg-[#014d4e] text-white px-6 py-3 rounded-full font-medium hover:bg-[#013d3e] transition-colors w-full">
                    Book an Appointment <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 w-12 h-12 bg-[#014d4e] text-white rounded-full flex items-center justify-center hover:bg-[#013d3e] transition-colors shadow-lg z-10 hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 w-12 h-12 bg-[#014d4e] text-white rounded-full flex items-center justify-center hover:bg-[#013d3e] transition-colors shadow-lg z-10 hidden md:flex">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
