import React from "react";
import Image from "next/image";

export default function ParentsProcessSection() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_minmax(0,1fr)] xl:grid-cols-[540px_minmax(0,1fr)] gap-8 lg:gap-x-16 items-center">

          {/* Left Column: Heading & 2 Narrative Paragraphs */}
          <div className="relative z-10 flex flex-col justify-center max-w-[480px] xl:max-w-[540px] lg:ml-4">

            {/* Headline with Orange Underline under "the process." */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[42px] xl:text-[50px] 2xl:text-[56px] font-extrabold text-[#0c3746] leading-[1.18] tracking-tight">
              Parents remain part of<br />
              <span className="relative inline-block">
                the process.
                {/* Hand-drawn Orange underline */}
                <svg
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 7 C 60 12, 140 12, 198 4"
                    stroke="#f15b2a"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="font-figma-copy mt-4 sm:mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#334650] leading-[1.65] font-medium">
              Support does not end when the session finishes. Parents receive photographs or short
              videos through a dedicated WhatsApp group after each session, along with a verbal
              summary where appropriate. Progress is discussed every two weeks, and formal reviews
              are generally completed every three to six months.
            </p>

            {/* Paragraph 2 */}
            <p className="font-figma-copy mt-3.5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#334650] leading-[1.65] font-medium">
              Parents may observe from outside the therapy room and can request an earlier review
              whenever a concern needs attention.
            </p>

          </div>

          {/* Right Column: Creative 3-Image Collage */}
          <div className="relative flex justify-center items-center">

            {/* Collage Container */}
            <div className="relative w-full max-w-[450px] h-[360px] sm:h-[400px] lg:h-[430px]">

              {/* Butterfly Doodle Top Right */}
              <div className="absolute right-[-12px] sm:right-[-24px] top-[-20px] sm:top-[-28px] w-[52px] sm:w-[64px] pointer-events-none z-30 animate-float">
                <Image
                  src="/images/84e74243b968adb176374e184e08a6983976ff4c.png"
                  alt="Butterfly Doodle"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>

              {/* Yellow Scribble Doodle bottom-center */}
              <div className="absolute left-[52%] sm:left-[54%] bottom-[-28px] sm:bottom-[-34px] w-[42px] sm:w-[50px] pointer-events-none z-30 animate-pulse-subtle">
                <Image
                  src="/images/ae05386b562a482cdfc7de4ba45d8f737c503d64.png"
                  alt="Yellow Scribble Doodle"
                  width={60}
                  height={60}
                  className="w-full h-auto"
                />
              </div>

              {/* Image 1 (Top-Left, Smaller): Fruit basket & toys */}
              <div className="absolute left-0 top-0 w-[46%] h-[46%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md z-10">
                <Image
                  src="/images/55d503a4b6392e80c60437672acff2a217347654.jpg"
                  alt="Fruit basket and learning toys"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              {/* Image 2 (Bottom-Left, overlapping): Parent consultation meeting */}
              <div className="absolute left-0 bottom-0 w-[54%] h-[58%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg z-20">
                <Image
                  src="/images/2d214957761585d1a899f737eb876086eb45e60b.jpg"
                  alt="Parent consultation meeting"
                  fill
                  sizes="290px"
                  className="object-cover"
                />
              </div>

              {/* Image 3 (Right, Tall): Mushroom craft activity & counting beads */}
              <div className="absolute right-0 top-0 w-[56%] h-[96%] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg z-10">
                <Image
                  src="/images/60fc82890f279d5a0eb97b57183a18b50e4aa856.jpg"
                  alt="Craft activity monsters and counting beads"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
