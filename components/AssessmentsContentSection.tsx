import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AssessmentsContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "Assessments available" */}
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
                  src="/images/46b49e1b30a0b2ce04e8a9a94e20689fe18d8696.jpg"
                  alt="Boy pointing to mouth during speech assessment with therapist holding clipboard"
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
              Assessments{" "}
              <span className="relative inline-block">
                available
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 130 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 40 9, 85 9, 128 3"
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
                <span>Psychological Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Developmental Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Speech Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Sensory Profiling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Academic Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>IQ Assessment</span>
              </li>
            </ul>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Left "How the assessment process works" + Right Organic Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              How the assessment process{" "}
              <span className="relative inline-block">
                works
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 90 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 30 9, 60 9, 88 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Step-by-step Purple Circle List */}
            <ul className="mt-6 space-y-4 text-[12.5px] sm:text-[13.5px] text-[#566e7a] font-medium leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Parent consultation:</strong>{" "}
                  Initial intake meeting to understand background, concerns, history and the reason for seeking assessment.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Assessment planning:</strong>{" "}
                  Selection of appropriate, standardized or informal tools matching the child's age and profile.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Assessment sessions:</strong>{" "}
                  Direct observation, structured tasks and interactive activities with the child in a supportive setting.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Clinical interpretation:</strong>{" "}
                  Information gathering, scoring and clinical analysis by qualified clinicians.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Written report and feedback:</strong>{" "}
                  Detailed summary report provided with a dedicated parent feedback meeting.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-1">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <div>
                  <strong className="text-[#0c3746] font-bold">Recommendations:</strong>{" "}
                  Practical, actionable guidance outlining the child's learning profile and recommendations for therapy or school support where appropriate.
                </div>
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
                  src="/images/4a2b046ed4a1f72a824727d6c49c19af56f4db3a.jpg"
                  alt="Team of professional clinicians reviewing assessment files with laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: Left Organic Photo + Right "What parents can expect" */}
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
                  src="/images/627c1593c9a79ff57fd4c858c35d4aaf9d381598.jpg"
                  alt="Girl placing colored wooden rings onto pegs during assessment"
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
              What parents can{" "}
              <span className="relative inline-block">
                expect
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

            {/* Narrative Paragraph */}
            <p className="mt-5 text-[13px] sm:text-[13.5px] text-[#566e7a] leading-[1.7] font-medium max-w-[540px]">
              The purpose of assessment is to provide clarity and recommendations, not to box a child into a label. Support recommendations are practical, clinically appropriate and set within the functional context of the child's life. Reports may support school admissions, regional service applications, IEP planning, therapeutic placement or provide guidance for home and school professionals, depending on the type and purpose of the assessment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
