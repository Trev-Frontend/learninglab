import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f7fae2] pt-14 sm:pt-16 pb-44 sm:pb-52 overflow-visible border-t border-[#e3e7c8]">
      
      {/* Top Right Bunny Basket Illustration (Fully visible, no clipping) */}
      <div className="absolute right-[5%] sm:right-[8%] -top-16 sm:-top-24 w-[140px] sm:w-[180px] pointer-events-none z-30">
        <img
          src="/images/30941b92a7cb19efbaa8e455138eed542128ac0b.png"
          alt="Bunny in Easter Basket"
          width={180}
          height={140}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Column 1: Brand Info & Socials (4 cols) */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/images/learning-lab-logo-mark 1.png"
                  alt="Learning Lab Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-[#0c3746] text-[16px] xl:text-[18px] 2xl:text-[20px] block leading-tight">
                  Learning Lab
                </span>
                <span className="text-[10.5px] xl:text-[12px] 2xl:text-[13px] text-[#718096] font-medium block">
                  Global Facilitation Pvt. Ltd
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-[11px] sm:text-[12px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] text-[#334650] leading-[1.6] font-medium max-w-[320px]">
              Learning Lab supports children under 16 with developmental, learning, communication, sensory, behavioral, and school-readiness needs in Karachi.
            </p>

            {/* Social Icons Row: White Square Pill Buttons with Orange Icons */}
            <div className="mt-4 flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white hover:bg-white/90 text-[#f15b2a] flex items-center justify-center transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white hover:bg-white/90 text-[#f15b2a] flex items-center justify-center transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white hover:bg-white/90 text-[#f15b2a] flex items-center justify-center transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white hover:bg-white/90 text-[#f15b2a] flex items-center justify-center transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-[#070713] text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16.5px] 2xl:text-[18px] mb-2.5">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-1.5 text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] text-[#334650] font-medium">
              <Link href="/" className="hover:text-[#f15b2a] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#f15b2a] transition-colors">About</Link>
              <Link href="/services" className="hover:text-[#f15b2a] transition-colors">Services</Link>
              <Link href="/parent-support" className="hover:text-[#f15b2a] transition-colors">Parent Support</Link>
              <Link href="/schools-training" className="hover:text-[#f15b2a] transition-colors">Schools & Training</Link>
              <Link href="/resources" className="hover:text-[#f15b2a] transition-colors">Resources</Link>
              <Link href="/contact" className="hover:text-[#f15b2a] transition-colors">Contact</Link>
              <Link href="/faq" className="hover:text-[#f15b2a] transition-colors">FAQs</Link>
            </div>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-[#070713] text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16.5px] 2xl:text-[18px] mb-2.5">
              Services
            </h4>
            <ul className="space-y-1.5 text-[11.5px] sm:text-[12.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] text-[#334650] font-medium">
              <li><Link href="/services/behavioural-therapy" className="hover:text-[#f15b2a] transition-colors">Behavioral Therapy</Link></li>
              <li><Link href="/services/speech-therapy" className="hover:text-[#f15b2a] transition-colors">Speech Therapy</Link></li>
              <li><Link href="/services/occupational-therapy" className="hover:text-[#f15b2a] transition-colors">Occupational Therapy</Link></li>
              <li><Link href="/services/remedial-support-therapy" className="hover:text-[#f15b2a] transition-colors">Remedial Therapy</Link></li>
              <li><Link href="/services/aba-therapy" className="hover:text-[#f15b2a] transition-colors">ABA Therapy</Link></li>
              <li><Link href="/services/assessments" className="hover:text-[#f15b2a] transition-colors">Assessments</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Us */}
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#f15b2a] mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-[#070713] text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15.5px] leading-tight">
                  Email us
                </h5>
                <p className="text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14.5px] text-[#334650] font-medium mt-0.5">
                  info@learninglabpk.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#f15b2a] mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-[#070713] text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15.5px] leading-tight">
                  Location
                </h5>
                <p className="text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14.5px] text-[#334650] font-medium mt-0.5">
                  DHA Phase 8, Karachi
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Legal Links Bar */}
        <div className="mt-8 pt-4 border-t border-[#e3e7c8]/80 flex flex-wrap justify-between items-center text-[10px] sm:text-[11px] lg:text-[12.5px] xl:text-[14px] 2xl:text-[15px] text-[#4b5563] font-medium gap-4 pr-16 sm:pr-28">
          <p>© 2026 Learning Lab Global Facilitation Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:text-[#0c3746] transition-colors">Privacy policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-[#0c3746] transition-colors">Terms & Condition</Link>
          </div>
        </div>

      </div>

      {/* Grass & Wildflowers Bottom Full-Width Illustration */}
      <div className="absolute bottom-0 left-0 w-full h-44 sm:h-52 lg:h-60 overflow-hidden leading-none pointer-events-none z-10">
        <Image
          src="/images/620c9aaf7fe8c0ae07ad459fbace618b31b5a089.png"
          alt="Grass and wildflowers border"
          width={1400}
          height={200}
          className="w-full h-full object-cover object-bottom"
        />
      </div>

    </footer>
  );
}
