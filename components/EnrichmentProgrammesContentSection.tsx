import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function EnrichmentProgrammesContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "Current enrichment areas" */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[52%_48%_68%_32%/45%_55%_45%_55%] transform rotate-[-6deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[52%_48%_68%_32%/45%_55%_45%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/enrichment1.jpg"
                  alt="Child forming geometric shapes with rubber bands on wooden peg geoboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              Current{" "}
              <span className="relative inline-block">
                enrichment
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 160 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 50 9, 110 9, 158 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              areas
            </h2>

            {/* Checkmark Bullet Points */}
            <ul className="mt-6 space-y-3 text-[12.5px] sm:text-[13.5px] text-[#566e7a] font-medium leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Music Enrichment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Reading Club</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Art and Crafts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Creative</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Culinary Activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Other seasonal and interest-based activities</span>
              </li>
            </ul>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Left "How programmes are offered" + Right Organic Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              How programmes are{" "}
              <span className="relative inline-block">
                offered
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 30 9, 70 9, 98 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="mt-5 text-[13px] sm:text-[13.5px] text-[#566e7a] leading-[1.7] font-medium max-w-[540px]">
              Programmes may be scheduled individually or in groups, and are organized during announced periods. Activities are non-therapy, age-grouped and designed to support participation, creativity, communication, motor skills, confidence and enjoyment.
            </p>

          </div>

          {/* Organic Blob Photo (Right) */}
          <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[48%_52%_35%_65%/55%_42%_58%_45%] transform rotate-[8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[48%_52%_35%_65%/55%_42%_58%_45%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/enrichment2.jpg"
                  alt="Young Asian girl smiling through wooden wire bead maze toy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: Left Organic Photo + Right "A welcoming space for every learner" */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[460px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[65%_35%_55%_45%/45%_60%_40%_55%] transform rotate-[-8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[65%_35%_55%_45%/45%_60%_40%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/enrichment3.jpg"
                  alt="Two young boys building tall tower out of yellow plastic cups"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              A welcoming space for every{" "}
              <span className="relative inline-block">
                learner
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 110 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 35 9, 75 9, 108 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="mt-5 text-[13px] sm:text-[13.5px] text-[#566e7a] leading-[1.7] font-medium max-w-[540px]">
              Enrichment is open to all children. It is a wonderful opportunity for children to practice social skills, group participation, and everyday skills in an inclusive, relaxed environment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
