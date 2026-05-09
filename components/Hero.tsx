import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const dentistImg = "/images/hero_dentist.png";
  const toothImg = "/images/tooth.png";

  return (
    <section className="relative bg-gradient-to-br from-[#d4f8f4] to-[#aeebe5] pt-20 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 pb-20">
            <div className="flex items-center gap-2 text-[#014d4e] mb-6">
              <span className="text-xl">✦</span>
              <span className="font-medium text-sm">10 Harley Street, London W1G 9PF, United Kingdom</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#014d4e] leading-[1.1] mb-6 uppercase">
              A Modern Private<br />Dental Clinic
            </h1>
            <p className="text-[#014d4e]/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Implant dentistry, prosthodontics, aesthetic restorations, and comprehensive dental treatment delivered in line with modern clinical standards.
            </p>
            <Link href="/book-online" className="inline-flex items-center gap-2 bg-[#014d4e] text-white px-8 py-4 rounded-full font-medium hover:bg-[#013d3e] transition-colors">
              Book an appointment <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative h-[500px] lg:h-[700px] flex items-end justify-center">
            <Image
              src={dentistImg}
              alt="Dentist"
              fill
              className="object-contain object-bottom z-10"
              priority
            />
            <div className="absolute top-1/4 right-0 w-32 h-32 md:w-48 md:h-48 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <Image src={toothImg} alt="Tooth" fill className="object-contain drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-1/4 left-0 w-24 h-24 md:w-32 md:h-32 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Image src={toothImg} alt="Tooth" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="bg-[#12b3ad] w-full py-8 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l border-white/30 pl-6">
              <h3 className="font-bold text-xl mb-2">COMPLEX EXPERTISE</h3>
              <p className="text-sm text-white/90">We manage complex cases, from full mouth and bite rehabilitation.</p>
            </div>
            <div className="border-l border-white/30 pl-6 bg-white/10 p-4 -my-4 -ml-6 border-l-4 border-l-white">
              <h3 className="font-bold text-xl mb-2">5,000+ PATIENTS TREATED</h3>
              <p className="text-sm text-white/90">All treatments are carried out in line with modern clinical protocols, ensuring safe results.</p>
            </div>
            <div className="border-l border-white/30 pl-6">
              <h3 className="font-bold text-xl mb-2">3D DIAGNOSTICS</h3>
              <p className="text-sm text-white/90">3D imaging, digital treatment planning, and a detailed clinical plan before treatment begins.</p>
            </div>
            <div className="border-l border-white/30 pl-6">
              <h3 className="font-bold text-xl mb-2">7+ YEARS' EXPERIENCE</h3>
              <p className="text-sm text-white/90">Extensive practice in restorative, and prosthodontics dentistry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
