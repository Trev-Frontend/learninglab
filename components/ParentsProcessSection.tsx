import React from "react";
import Image from "next/image";

export default function ParentsProcessSection() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left Column: Heading & 2 Narrative Paragraphs */}
          <div className="relative z-10 flex flex-col justify-center max-w-[540px]">

            {/* Headline with Orange Underline under "the process." */}
            <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-extrabold text-[#1a1a1a] leading-[1.18] tracking-tight">
              Parents remain part of<br />
              <span className="relative inline-block">
                the process.
                {/* Hand-drawn Orange underline brush */}
                <svg
                  className="absolute left-0 -bottom-2 sm:-bottom-2.5 w-[105%] h-[12px] overflow-visible pointer-events-none"
                  viewBox="0 0 210 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 3 6 C 55 12, 145 14, 207 4"
                    stroke="#f15b2a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-6 text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#4b5563] leading-[1.7] font-normal">
              Support does not end when the session finishes. Parents receive photographs or short
              videos through a dedicated WhatsApp group after each session, along with a verbal
              summary where appropriate. Progress is discussed every two weeks, and formal reviews
              are generally completed every three to six months.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#4b5563] leading-[1.7] font-normal">
              Parents may observe from outside the therapy room and can request an earlier review
              whenever a concern needs attention.
            </p>

          </div>

          {/* Right Column: 3-Image Collage with Doodles */}
          <div className="relative flex justify-center lg:justify-end items-center">

            {/* Collage Container */}
            <div className="relative w-full max-w-[480px] h-[380px] sm:h-[430px] lg:h-[460px]">

              {/* Butterfly Doodle Top Right */}
              <div className="absolute -right-2 sm:-right-6 -top-5 sm:-top-8 w-[58px] sm:w-[72px] pointer-events-none z-30">
                <Image
                  src="/images/84e74243b968adb176374e184e08a6983976ff4c.png"
                  alt="Butterfly Doodle"
                  width={90}
                  height={90}
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

              {/* Yellow Scribble Doodle bottom-right under right card */}
              <div className="absolute right-[22%] sm:right-[24%] -bottom-4 sm:-bottom-7 w-[46px] sm:w-[56px] pointer-events-none z-30">
                <Image
                  src="/images/ae05386b562a482cdfc7de4ba45d8f737c503d64.png"
                  alt="Yellow Scribble Doodle"
                  width={70}
                  height={70}
                  className="w-full h-auto"
                />
              </div>

              {/* Image 1 (Top-Left): Fruit basket & Noisy Farm book */}
              <div className="absolute left-0 top-0 w-[49%] h-[47%] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm z-10">
                <Image
                  src="/images/55d503a4b6392e80c60437672acff2a217347654.jpg"
                  alt="Fruit basket and learning toys"
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover object-center"
                />
              </div>

              {/* Image 2 (Bottom-Left): LearningLab sign post */}
              <div className="absolute left-0 bottom-0 w-[49%] h-[49%] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm z-10">
                <Image
                  src="/images/155d52f0b7e5a1fc6fc1b9e774c1f9d389faed13.jpg"
                  alt="LearningLab OT, BT, ST sign"
                  fill
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover object-left"
                />
              </div>

              {/* Image 3 (Right, Overlapping on Top): Monster crafts activity & counting beads */}
              <div className="absolute right-[6%] sm:right-[8%] top-[12%] w-[54%] h-[76%] rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-md z-20">
                <Image
                  src="/images/60fc82890f279d5a0eb97b57183a18b50e4aa856.jpg"
                  alt="Craft activity and counting beads"
                  fill
                  sizes="(max-width: 768px) 55vw, 300px"
                  className="object-cover object-center"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

