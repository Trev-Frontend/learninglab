import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurCentreSection() {
  return (
    <section className="relative w-full bg-white pt-16 sm:pt-20 pb-0 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Headline */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
          Our{" "}
          <span className="relative inline-block">
            Centre
            {/* Hand-drawn Orange Underline */}
            <svg
              className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
              viewBox="0 0 140 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 7 C 45 12, 95 12, 138 4"
                stroke="#f15b2a"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Intro Paragraph */}
        <p className="mt-4 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] text-[#475b65] max-w-[820px] mx-auto leading-[1.65] font-medium">
          Our DHA Phase 8 centre is designed to feel welcoming, safe and purposeful. Families are introduced to the environment during their first visit and receive clear information about available services, the consultation process and the most appropriate next step.
        </p>

        {/* Dual Action Buttons */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-[12px] sm:text-[13px] xl:text-[14.5px] 2xl:text-[16px] font-bold shadow-xs transition-all duration-200 group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#0c3746] text-[#0c3746] hover:bg-[#0c3746]/5 px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-[12px] sm:text-[13px] xl:text-[14.5px] 2xl:text-[16px] font-bold transition-all duration-200 group"
          >
            <span>Meet Our Services</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4 Kids & Sun Line Art Illustration */}
        <div className="mt-10 sm:mt-12 w-full max-w-[640px] mx-auto relative">
          <Image
            src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
            alt="Children playing under the sun line illustration"
            width={720}
            height={260}
            className="w-full h-auto mx-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
