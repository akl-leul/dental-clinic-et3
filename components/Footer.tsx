import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#014d4e] text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl tracking-widest uppercase mb-4">Crystaldent</h3>
          <p className="text-white/70">
            A modern private dental clinic offering exceptional care and state-of-the-art facilities.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#00a8a8]">Quick Links</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/about" className="hover:text-white transition">About the Clinic</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/prices" className="hover:text-white transition">Prices</Link></li>
            <li><Link href="/credentials" className="hover:text-white transition">Credentials</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#00a8a8]">Services</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/services/restorative-dentistry" className="hover:text-white transition">Restorative Dentistry</Link></li>
            <li><Link href="/services/oral-surgery" className="hover:text-white transition">Oral Surgery</Link></li>
            <li><Link href="/services/prosthodontics" className="hover:text-white transition">Prosthodontics</Link></li>
            <li><Link href="/services/dental-implants" className="hover:text-white transition">Dental Implants</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#00a8a8]">Contact</h4>
          <ul className="space-y-2 text-white/70">
            <li>10 Harley Street</li>
            <li>London W1G 9PF, United Kingdom</li>
            <li className="mt-4"><a href="mailto:info@digital-crystal.ru" className="hover:text-white transition">info@digital-crystal.ru</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/50">
        <p>&copy; {new Date().getFullYear()} Crystaldent. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
