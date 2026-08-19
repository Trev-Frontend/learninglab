import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ABATherapyContentSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "This service may help..." */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[52%_48%_68%_32%/45%_55%_45%_55%] transform rotate-[-6deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[52%_48%_68%_32%/45%_55%_45%_55%] overflow-hidden shadow-lg">
                <Image
                  src="/images/07f24b07c4f12c733912ddd2cc9c59a31253f30d.jpg"
                  alt="Therapist and child stacking colorful cups"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              This service may help when a child is{" "}
              <span className="relative inline-block">
                experiencing:
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 140 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 45 9, 95 9, 138 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Checkmark Bullet Points */}
            <ul className="mt-6 space-y-3.5 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] text-[#334650] font-medium leading-[1.65]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Communication difficulties affecting daily needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Limited learning readiness or developmental prerequisite skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Difficulties in engaging in persistent routines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Behavioural challenges related to frustration, learning, or participating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Challenges with social interaction and functional play</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Difficulty generalizing skills across home, school and community settings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>A need for structured, outcome-focused early or targeted ABA support</span>
              </li>
            </ul>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Left "Areas we may work on" + Right Organic Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              Areas we may{" "}
              <span className="relative inline-block">
                work on
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 35 9, 70 9, 98 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Checkmark Bullet Points */}
            <ul className="mt-6 space-y-3.5 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] text-[#334650] font-medium leading-[1.65]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Communication and requesting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Learning readiness and attention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Daily living and independence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Play and social participation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Following routines and instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Coping, waiting and flexibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Replacing barrier or limiting behaviour with functional skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Generalising skills across different people, places and routines</span>
              </li>
            </ul>

          </div>

          {/* Organic Blob Photo (Right) */}
          <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] xl:max-w-[520px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[48%_52%_35%_65%/55%_42%_58%_45%] transform rotate-[8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[48%_52%_35%_65%/55%_42%_58%_45%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/eeac278acb06664871abc7f3db82995012559953 (1).jpg"
                  alt="Children sitting on floor raising hands in classroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: Left Organic Photo + Right "How support is planned" */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[460px] xl:max-w-[520px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[65%_35%_55%_45%/45%_60%_40%_55%] transform rotate-[-8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[65%_35%_55%_45%/45%_60%_40%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/a5862f82a08b5e8e348cf44d2a1cb6f5665981c2 (1).jpg"
                  alt="Therapist working with girl at white curved table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              How support is{" "}
              <span className="relative inline-block">
                planned
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 110 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 38 9, 75 9, 108 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#334650] leading-[1.65] font-medium max-w-[580px]">
              An individual plan is created after consultation and assessment. The therapist breaks goals into achievable steps, records progress and adjusts teaching strategies according to the child's response. Sessions emphasize meaningful, practical, purposeful and relevant to everyday life, rather than overly rigid drill practice.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
