import React from "react";
import Image from "next/image";

export default function BehaviouralTherapyContentSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* ========================================================================= */}
        {/* ROW 1: Left Organic Photo + Right "This service may help..." */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[52%_48%_68%_32%/45%_55%_45%_55%] transform rotate-[-6deg] translate-x-2 translate-y-2 opacity-90 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[52%_48%_68%_32%/45%_55%_45%_55%] overflow-hidden shadow-md">
                <Image
                  src="/images/7cb00f40c2e5008440b6da61110a81489afc990c.jpg"
                  alt="Therapist working with child on floor"
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-extrabold text-[#0c3746] leading-[1.25] tracking-tight">
              This service may help when a child is<br />
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

            {/* Hyphen Bullet Points */}
            <ul className="mt-6 space-y-3 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] text-[#334650] font-medium leading-[1.65]">
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Frequent tantrums, crying or emotional outbursts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Refusal, stubborn behaviour or difficulty following routines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Aggression, hitting, pushing or unsafe behaviour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Difficulty with transitions, waiting or accepting change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Challenges communicating needs appropriately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Difficulty managing frustration or strong emotions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Social, play or independence concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Behaviour affecting home, school or community participation</span>
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

            {/* Hyphen Bullet Points */}
            <ul className="mt-6 space-y-3 text-[13.5px] sm:text-[14.5px] lg:text-[16px] xl:text-[18px] 2xl:text-[19.5px] text-[#334650] font-medium leading-[1.65]">
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Functional communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Emotional regulation and coping skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Daily routines and transitions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Following instructions and task participation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Social interaction and play</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Independence and self-management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0c3746] font-bold select-none">-</span>
                <span>Positive replacement skills for behaviours that create barriers</span>
              </li>
            </ul>

          </div>

          {/* Organic Blob Photo (Right) */}
          <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[48%_52%_35%_65%/55%_42%_58%_45%] transform rotate-[8deg] translate-x-2 translate-y-2 opacity-90 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[48%_52%_35%_65%/55%_42%_58%_45%] overflow-hidden shadow-md">
                <Image
                  src="/images/79e0c6b8a2db9cff9fcb888d207e737a7639d6a7.jpg"
                  alt="Child raising hand in classroom"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Organic Blob Photo (Left) */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] aspect-[1/0.95]">
              
              {/* Orange Accent Backdrop Blob */}
              <div className="absolute inset-0 bg-[#f15b2a] rounded-[65%_35%_55%_45%/45%_60%_40%_55%] transform rotate-[-8deg] translate-x-2 translate-y-2 opacity-90 scale-105" />
              
              {/* Main Image Blob */}
              <div className="relative w-full h-full rounded-[65%_35%_55%_45%/45%_60%_40%_55%] overflow-hidden shadow-md">
                <Image
                  src="/images/cf837cadf615949b7c3fda73376b06348b44240e.jpg"
                  alt="Therapist sitting with child playing drum"
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
              The therapist begins by understanding what happens before, during and after the behaviour. Goals are then selected according to the child's assessed needs. Sessions may use play, visual support, structured practice, positive reinforcement and real-life routines. Behavioural Therapy is distinct from a formal ABA programme and may be recommended when broader behavioural guidance is more suitable.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
