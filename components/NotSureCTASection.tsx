import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotSureCTASection() {
  return (
    <section className="relative w-full bg-white pt-10 sm:pt-12 pb-0 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Headline */}
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#0c3746] leading-[1.18] tracking-tight max-w-[620px] mx-auto">
          Not sure what your child needs yet?
        </h2>

        {/* Paragraph Description */}
        <p className="font-figma-copy mt-3 text-[10px] sm:text-[11px] text-[#4b5563] max-w-[540px] mx-auto leading-[1.5] font-normal">
          That is completely fine. Many parents begin with a concern rather than a diagnosis or therapy plan. Contact our team for a free introductory call and a clearer understanding of the next step.
        </p>

        {/* Dual CTA Buttons */}
        <div className="mt-5 flex flex-wrap justify-center items-center gap-2.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f15b2a] hover:bg-[#e04f1e] text-white text-[10px] font-bold transition-all shadow-xs"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0c3746] text-[#0c3746] hover:bg-[#0c3746]/5 text-[10px] font-bold transition-all"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* 4 Kids & Sun Line Illustration */}
        <div className="mt-7 w-full max-w-[560px] mx-auto relative px-4">
          <Image
            src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
            alt="Children jumping around the sun illustration"
            width={720}
            height={260}
            className="w-full h-auto mx-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
