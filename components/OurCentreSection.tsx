import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurCentreSection() {
  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 pb-0 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Headline */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
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
        <p className="mt-3.5 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] text-[#334650] max-w-[760px] mx-auto leading-[1.6] font-medium">
          Our DHA Phase 8 centre is designed to feel welcoming, safe and purposeful. Families are introduced to the environment during their first visit and receive clear information about available services, the consultation process and the most appropriate next step.
        </p>

        {/* Dual Action Buttons */}
        <div className="mt-6 sm:mt-7 flex flex-wrap justify-center items-center gap-3 sm:gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 sm:px-8 py-3 rounded-full text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] font-bold shadow-xs transition-all duration-200 group cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-[#0c3746]/20 hover:border-[#0c3746] text-[#0c3746] hover:bg-[#0c3746]/5 px-7 sm:px-8 py-3 rounded-full text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] font-bold transition-all duration-200 group cursor-pointer"
          >
            <span>Meet Our Services</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4 Kids & Sun Line Art Illustration */}
        <div className="mt-8 sm:mt-10 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] mx-auto relative px-2 sm:px-4">
          <Image
            src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
            alt="Children playing under the sun line illustration"
            width={840}
            height={300}
            className="w-full h-auto mx-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
