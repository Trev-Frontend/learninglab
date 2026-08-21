import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ParentInvolvementSectionProps {
  title?: string;
  titleUnderline?: string;
  description?: string;
}

export default function ParentInvolvementSection({
  title = "Parent involvement",
  titleUnderline = "involvement",
  description = "Parents receive regular updates, clarity on goals, progress observations and practical strategies that can be used consistently at home. Specific guidance is included to support home activity and routine carryover.",
}: ParentInvolvementSectionProps) {
  // If title contains titleUnderline, split title around it for rendering the underline SVG
  const parts = title.split(titleUnderline);

  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 pb-0 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Headline */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
          {parts[0]}
          <span className="relative inline-block">
            {titleUnderline}
            {/* Hand-drawn Orange Underline */}
            <svg
              className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 7 C 50 12, 110 12, 158 4"
                stroke="#f15b2a"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {parts[1] || ""}
        </h2>

        {/* Intro Paragraph */}
        <p className="mt-3.5 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] text-[#334650] max-w-[760px] mx-auto leading-[1.6] font-medium">
          {description}
        </p>

        {/* Single Action Button */}
        <div className="mt-6 sm:mt-7 flex justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 sm:px-8 py-3 rounded-full text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[16.5px] font-bold shadow-xs transition-all duration-200 group cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4 Kids & Sun Line Art Illustration (Floating) */}
        <div className="mt-8 sm:mt-10 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] mx-auto relative px-2 sm:px-4 animate-float-subtle">
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
