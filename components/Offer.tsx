import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Offer() {
  const implantImg = "/images/implant_3d.png";

  return (
    <section className="bg-gradient-to-r from-[#b5ece7] to-[#dcf7f5] py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#014d4e] mb-4">
              <span className="text-xl">✦</span>
              <span className="font-medium text-sm">Special Offer</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold text-[#014d4e] mb-6 uppercase leading-tight">
              10% OFF<br />DENTAL IMPLANTS
            </h2>

            <p className="text-[#014d4e]/80 text-lg max-w-md mb-10 leading-relaxed">
              Dental implant treatment is now more accessible at our clinic. Receive a 10% reduction on an implant with a temporary crown when paid in full.
            </p>

            <Link href="/book-online" className="inline-flex items-center gap-2 bg-[#014d4e] text-white px-8 py-4 rounded-full font-medium hover:bg-[#013d3e] transition-colors">
              Claim the Offer <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative h-[400px] lg:h-[600px] flex justify-center items-center">
            <div className="absolute text-[#8ee2dc] text-[400px] font-black -z-10 leading-none mr-20 opacity-70">
              %
            </div>
            <Image
              src={implantImg}
              alt="Dental Implant"
              width={400}
              height={500}
              className="object-contain z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
