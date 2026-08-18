import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrainingFormatSection() {
  const formats = [
    "Direct or in-person workshop",
    "In-service delivery arrangement",
    "Flexible scheduling for special requests",
    "Whole-management and multi-organisational groups",
    "Assigned project leader and dedicated support secretary",
  ];

  return (
    <section className="relative w-full bg-white pt-14 sm:pt-18 pb-0 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Headline */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
          Training{" "}
          <span className="relative inline-block">
            Format
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

        {/* Pill Badges Grid */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 max-w-[860px] mx-auto">
          {formats.map((fmt, idx) => (
            <span
              key={idx}
              className="bg-[#f0f6df] text-[#3c5625] px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold border border-[#d8e8b8]"
            >
              {fmt}
            </span>
          ))}
        </div>

        {/* Single Action Button */}
        <div className="mt-8 flex justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 py-3 rounded-full text-[13px] font-bold shadow-sm transition-all duration-200 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
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
