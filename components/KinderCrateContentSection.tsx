import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function KinderCrateContentSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "Skills children can explore" */}
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
                  src="/images/kindercrate1.jpg"
                  alt="Child interacting with learning activity guided by teacher"
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
            <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[40px] 2xl:text-[46px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              Skills{" "}
              <span className="relative inline-block">
                children
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                  viewBox="0 0 140 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 5 C 40 9, 100 9, 138 3"
                    stroke="#f15b2a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              can explore
            </h2>

            {/* Checkmark Bullet Points */}
            <ul className="mt-6 space-y-3.5 text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] text-[#475b65] font-medium leading-[1.65]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Reading and early literacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Writing and communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Listening and following instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Fine motor and hand-eye coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Sensory exploration and creative expression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-4 h-4 bg-[#5b4bbb] text-white rounded-full flex items-center justify-center text-[10px] mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Observation and problem solving</span>
              </li>
            </ul>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Left "Designed for different ages and interests" + Right Organic Photo */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[40px] 2xl:text-[46px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              Designed for different{" "}
              <span className="relative inline-block">
                ages
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
              </span>{" "}
              and interests
            </h2>

            {/* Narrative Paragraph */}
            <p className="mt-5 text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17.5px] 2xl:text-[19px] text-[#475b65] leading-[1.7] font-medium max-w-[620px]">
              KinderCrate products cover a range of subjects and developmental skills for children aged 3 to 12. Packs may be used by parents, teachers and children as purposeful activities at home or in learning environments.
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
                  src="/images/kindercrate2.jpg"
                  alt="Colorful educational wooden toys, stacking pyramids and activity packs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 3: How to Purchase & Kids Illustration */}
        {/* ========================================================================= */}
        <div className="pt-8 text-center max-w-[800px] mx-auto">
          
          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
            How to{" "}
            <span className="relative inline-block">
              purchase
              {/* Hand-drawn Orange Underline */}
              <svg
                className="absolute left-0 -bottom-1.5 w-full h-[8px] overflow-visible pointer-events-none"
                viewBox="0 0 140 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 5 C 40 9, 100 9, 138 3"
                  stroke="#f15b2a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-[13px] sm:text-[14px] text-[#566e7a] font-medium leading-[1.65] max-w-[680px] mx-auto">
            Products will be available for online purchase. Individual product pages should include recommended age, learning goals, contents, price, delivery information and safety guidance.
          </p>

          {/* Kids Dancing Under Sun Illustration */}
          <div className="mt-10 sm:mt-12 w-full max-w-[640px] mx-auto">
            <Image
              src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
              alt="Children playing under the sun line illustration"
              width={720}
              height={260}
              className="w-full h-auto mx-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
