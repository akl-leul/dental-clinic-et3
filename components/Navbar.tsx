"use client";

import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#014d4e] text-white py-4 px-6 md:px-12 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center relative z-50">
          <span className="font-bold text-xl tracking-widest uppercase">Crystaldent</span>
          <div className="ml-1 flex">
            <div className="w-3 h-3 bg-white rotate-45 transform origin-center"></div>
            <div className="w-3 h-3 bg-white/50 rotate-45 transform origin-center -ml-1"></div>
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm">
        <Link href="/about" className="hover:text-teal-200 transition">About the Clinic</Link>
        <Link href="/services" className="hover:text-teal-200 transition">Services</Link>
        <Link href="/prices" className="hover:text-teal-200 transition">Prices</Link>
        <Link href="/credentials" className="hover:text-teal-200 transition">Credentials</Link>
        <Link href="/contact" className="hover:text-teal-200 transition">Contact</Link>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <div className="text-right text-xs leading-tight">
          <p>10 Harley Street, London W1</p>
          <p>info@digital-crystal.ru</p>
        </div>
        <div className="flex gap-3">
          <Link href="/book-online" className="bg-white text-[#014d4e] px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition whitespace-nowrap">
            Book Online
          </Link>
          <Link href="/enquire" className="bg-[#00a8a8] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#009090] transition">
            Enquire
          </Link>
        </div>
      </div>
      
      <button 
        className="lg:hidden text-white relative z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#014d4e] z-40 flex flex-col pt-24 px-6 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 text-xl font-medium tracking-wide">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About the Clinic</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/prices" onClick={() => setIsMobileMenuOpen(false)}>Prices</Link>
          <Link href="/credentials" onClick={() => setIsMobileMenuOpen(false)}>Credentials</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="h-px bg-white/20 my-4 w-full"></div>
          
          <Link href="/book-online" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-[#014d4e] text-center py-4 rounded-full font-bold shadow-lg">
            Book Online
          </Link>
          <Link href="/enquire" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#00a8a8] text-white text-center py-4 rounded-full font-bold shadow-lg">
            Enquire
          </Link>
        </div>
      </div>
    </nav>
  );
}
