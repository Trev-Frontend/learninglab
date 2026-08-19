import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TherapyBannerSection() {
  return (
    <section className="relative w-full bg-[#f4f6e1] pt-14 sm:pt-16 pb-20 sm:pb-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Tag/Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#e7ebce] text-[#5a6444] text-[11px] sm:text-[12px] xl:text-[13px] font-extrabold tracking-wider uppercase mb-5">
          ONLINE AND IN-PERSON
        </div>

        {/* Main Headline */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight max-w-[900px] mx-auto">
          Therapy in Karachi. Guidance and<br className="hidden sm:inline" />{" "}
          <span className="relative inline-block">
            training worldwide.
            {/* Orange Brush Stroke Underline */}
            <svg
              className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
              viewBox="0 0 240 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 7 C 80 12, 160 12, 238 4"
                stroke="#f15b2a"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Description Paragraph */}
        <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[19.5px] 2xl:text-[21px] text-[#1c333d] max-w-[820px] mx-auto leading-[1.65] font-semibold">
          In-person therapy, assessments and learning support are available at our DHA Phase 8 centre in Karachi. Online parent consultations, teacher training and school consultancy are available to families and educators worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 sm:mt-8 flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 xl:px-9 py-3 xl:py-3.5 rounded-full bg-[#f15b2a] hover:bg-[#e04f1e] text-white text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] font-bold transition-all shadow-xs"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href="tel:+923253276464"
            className="inline-flex items-center gap-2 px-6 sm:px-7 xl:px-9 py-3 xl:py-3.5 rounded-full border-2 border-[#0c3746] text-[#0c3746] hover:bg-[#0c3746]/5 text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] font-bold transition-all"
          >
            <span>Call Us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>

      {/* Scalloped Wave Bottom Divider transitioning to White */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none hidden">
        <svg
          className="relative block w-full h-[28px] sm:h-[36px] text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,140 900,-20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
