import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const toothImg = "/images/tooth.png";

  const services = [
    {
      title: "RESTORATIVE DENTISTRY",
      desc: "Management of dental caries, pulpitis, and periodontitis using magnification techniques to ensure precise treatment and maximum preservation of healthy tooth tissue.",
      img: toothImg,
      link: "/services/restorative-dentistry"
    },
    {
      title: "ORAL SURGERY",
      desc: "Complex surgical extractions, pre-implant preparation, and bone augmentation procedures, carried out with the guidance of advanced 3D diagnostic imaging.",
      img: toothImg,
      link: "/services/oral-surgery"
    },
    {
      title: "PROSTHODONTICS",
      desc: "Prosthodontic rehabilitation focused on restoring function and aesthetics. Occlusal load and treatment outcomes are meticulously planned in advance to ensure long-term stability and predictability.",
      img: toothImg,
      link: "/services/prosthodontics"
    }
  ];

  return (
    <section className="bg-[#c0f2ee] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-2 text-[#014d4e] mb-4">
          <span className="text-xl">✦</span>
          <span className="font-medium text-sm">Our Dental Services</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#014d4e] mb-6 uppercase">
          DENTAL SERVICES BY SPECIALISM
        </h2>

        <p className="text-[#014d4e]/80 text-lg max-w-4xl mb-12">
          Every area of care is overseen by a specialist in that field. Following comprehensive diagnostics, a tailored treatment plan is prepared and clearly explained at each stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#dcf7f5] rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow border border-[#aeebe5]">
              <div className="relative h-64 mb-8 bg-white/50 rounded-full flex items-center justify-center">
                <Image src={service.img} alt={service.title} width={180} height={180} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#014d4e] mb-4 uppercase">{service.title}</h3>
              <p className="text-[#014d4e]/70 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <Link href={service.link} className="inline-flex w-fit items-center gap-2 bg-[#014d4e] text-white px-6 py-3 rounded-full font-medium hover:bg-[#013d3e] transition-colors">
                Book an Appointment <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
