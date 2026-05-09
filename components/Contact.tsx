import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const dentistImg = "/images/hero_dentist.png";
  const toothImg = "/images/tooth.png";

  return (
    <section className="bg-gradient-to-b from-[#aeebe5] to-[#c0f2ee] pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-2 text-[#014d4e] mb-4">
              <span className="text-xl">✦</span>
              <span className="font-medium text-sm">Ready to Take the First Step Towards a Healthier Smile?</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-[#014d4e] mb-6 uppercase leading-none">
              GET IN TOUCH<br />TODAY
            </h2>
            
            <p className="text-[#014d4e]/80 text-lg max-w-md mb-10 leading-relaxed">
              Looking after your dental health should not be postponed. Our reception team will assist you in selecting a convenient appointment time and provide clear answers to any questions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="mailto:info@digital-crystal.ru" className="inline-flex items-center justify-center bg-[#014d4e] text-white px-8 py-4 rounded-full font-medium hover:bg-[#013d3e] transition-colors min-w-[160px]">
                Email Us
              </Link>
              <Link href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#00a8a8] text-white px-8 py-4 rounded-full font-medium hover:bg-[#009090] transition-colors min-w-[160px]">
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image 
              src={dentistImg} 
              alt="Dentist holding tools" 
              fill 
              className="object-contain object-bottom z-10 drop-shadow-2xl" 
            />
            <div className="absolute top-0 left-0 w-32 h-32 z-20 animate-bounce" style={{animationDuration: '3.5s'}}>
              <Image src={toothImg} alt="Tooth" fill className="object-contain drop-shadow-2xl" />
            </div>
            <div className="absolute text-[#8ee2dc] text-[350px] font-black right-0 top-0 -z-10 leading-none opacity-60">
              ?
            </div>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="bg-[#effaf9] rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm border border-white">
          <h3 className="text-3xl md:text-4xl font-bold text-[#111] mb-4 uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="text-[#333] mb-8">
            We respect your inbox. You will receive only relevant updates on special offers and new services, no more than twice per week.
          </p>
          
          <form className="max-w-xl mx-auto mb-6 relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white rounded-full px-6 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#014d4e] shadow-sm"
              required
            />
            <button 
              type="submit" 
              className="absolute right-2 top-2 bottom-2 bg-[#1a1a1a] text-white px-8 rounded-full font-medium hover:bg-black transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <div className="flex items-start gap-3 text-left max-w-xl mx-auto text-sm text-gray-600">
            <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={12} className="text-gray-400" />
            </div>
            <p>
              By submitting this form, you expressly consent to the collection, processing, and storage of your personal data in accordance with the terms set out in the Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
