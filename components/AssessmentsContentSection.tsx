import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AssessmentsContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "Assessments available" */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[460px] xl:max-w-[520px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[52%_48%_68%_32%/45%_55%_45%_55%] transform rotate-[-6deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[52%_48%_68%_32%/45%_55%_45%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/46b49e1b30a0b2ce04e8a9a94e20689fe18d8696.jpg"
                  alt="Boy pointing to mouth during speech assessment with therapist holding clipboard"
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
            <ul className="mt-6 space-y-3.5 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] text-[#334650] font-medium leading-[1.65]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Speech & Language Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Occupational Therapy & Sensory Profile Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>ABA & Behavioural Functional Assessment (FBA)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Psycho-educational & Academic Learning Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>School Readiness & Early Developmental Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Diagnostic & Neurodevelopmental Assessment (Autism, ADHD, Learning Profiles)</span>
              </li>
            </ul>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Left "Why request an assessment" + Right Organic Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headline */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              Why request an{" "}
              <span className="relative inline-block">
                assessment
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
                <span>To gain clear understanding of your child's strengths and challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>To guide target selection for therapy and educational plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>To support school admissions, accommodations or SEN placement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>To monitor progress over time and update intervention goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>To receive formal clinical reports accepted by schools and healthcare partners</span>
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
                  src="/images/4a2b046ed4a1f72a824727d6c49c19af56f4db3a.jpg"
                  alt="Team of professional clinicians reviewing assessment files with laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
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
            <div className="relative w-full max-w-[460px] xl:max-w-[520px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[65%_35%_55%_45%/45%_60%_40%_55%] transform rotate-[-8deg] translate-x-2 translate-y-2 opacity-95 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[65%_35%_55%_45%/45%_60%_40%_55%] overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/627c1593c9a79ff57fd4c858c35d4aaf9d381598.jpg"
                  alt="Girl placing colored wooden rings onto pegs during assessment"
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
            <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#334650] leading-[1.65] font-medium max-w-[580px]">
              The purpose of assessment is to provide clarity and recommendations, not to box a child into a label. Support recommendations are practical, clinically appropriate and set within the functional context of the child's life. Reports may support school admissions, regional service applications, IEP planning, therapeutic placement or provide guidance for home and school professionals, depending on the type and purpose of the assessment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
