import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function EarlyInterventionContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "This service may help..." */}
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
                  src="/images/e0d29bf099e57bdce1041671cb5227e8e24e310f.jpg"
                  alt="Young girl in white dress playing with colorful blocks with clinician"
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
            <ul className="mt-6 space-y-3 text-[12.5px] sm:text-[13.5px] text-[#566e7a] font-medium leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Delayed speech, play or social interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Limited responsiveness and difficulty engaging with others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Irritability, restlessness or unusual sensory responses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Difficulty adapting to routines or everyday environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Delayed movement, fine motor or self-care skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Concerns about developmental milestones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Recommendation for early therapeutic support</span>
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
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
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
            <ul className="mt-6 space-y-3 text-[12.5px] sm:text-[13.5px] text-[#566e7a] font-medium leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Communication and interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Play and imitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Attention and shared engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Movement and sensory regulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Everyday routines and early independence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Parent understanding and practical home strategies</span>
              </li>
            </ul>

          </div>

          {/* Organic Blob Photo (Right) */}
          <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[460px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[48%_52%_35%_65%/55%_42%_58%_45%] transform rotate-[8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[48%_52%_35%_65%/55%_42%_58%_45%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/881f0f303f87c8d43369a8c870cc8b2cf0652180.jpg"
                  alt="Child placing wooden shape pegs into sorter board"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
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
            <div className="relative w-full max-w-[460px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[65%_35%_55%_45%/45%_60%_40%_55%] transform rotate-[-8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[65%_35%_55%_45%/45%_60%_40%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/f0fa6229d5531d034edac4ec64e73deeb7899a46.jpg"
                  alt="Child playing matching flashcard game with sand timer and bell"
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
            <p className="mt-5 text-[13px] sm:text-[13.5px] text-[#566e7a] leading-[1.7] font-medium max-w-[540px]">
              Support begins with parent consultation and assessment. Depending on the child's needs, the plan may combine speech, occupational, behavioural, ABA, learning or combined intervention. Goals are practical, developmentally appropriate and relevant to the child's environment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
