import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function RemedialSupportContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "This service may help..." */}
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
                  src="/images/2222bffd2516e13d69ea6b800b65d23aba10d65a.jpg"
                  alt="Child arranging magnetic letters and numbers on board"
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
                <span>Reading difficulties, letter confusion or phonics gaps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Writing challenges, sentence construction or spelling gaps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Early math difficulties (number concepts, calculation or problem solving)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Difficulty keeping up with grade-level classroom expectations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Slow task completion or difficulty following written work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Frustration, low confidence or academic anxiety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Specific learning difficulties (Dyslexia, Dyscalculia or SEN needs)</span>
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
                <span>Phonological awareness and decoding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Reading fluency and comprehension</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Handwriting, letter formation and spelling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Math concepts and practical problem solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Study habits, organization and task planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4.5 h-4.5 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Academic confidence and self-correction</span>
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
                  src="/images/31f3b6ee53764412e8d724f745c000c6404f4100.jpg"
                  alt="Girl writing numbers on green grid chalkboard with number tiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
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
                  src="/images/b9111bd89887124d902d760f273699b45174819f.jpg"
                  alt="Child writing cursive letters on lined paper"
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
              Academic assessment and observation help identify prerequisite skill gaps, learning style and foundational missing stages. Goals are linked to the child's educational needs and may draw on SEN guidance, school curriculum expectations and individual learning milestones.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
