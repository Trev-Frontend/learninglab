import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const leadership = [
    {
      id: 1,
      name: "Dr. Farhad Karamally",
      role: "Co-Founder and Director",
      bio: "A corporate leadership master trainer, published author and entrepreneur with extensive experience across South-East Asia and the Middle East. His work spans leadership, inclusion, culture change and organisational development.",
      image: "/images/8778d9f2ba98bd1cd479b77f5676ff6f3f961f07.png",
      style: { objectPosition: "center top" },
    },
    {
      id: 2,
      name: "Nadya Farhad Karamally",
      role: "Co-Founder and Director",
      bio: "An MBA in Marketing with experience across FMCG and financial sectors. Her work at Learning Lab reflects a commitment to creating purposeful opportunities and nurturing environments where children can flourish beyond academics.",
      image: "/images/a3b9aed88346f0ff260af55d605d09166b18a27d.jpg",
      style: { transform: "scale(1.68)", transformOrigin: "50% 36%" },
    },
    {
      id: 3,
      name: "Raheela Damani",
      role: "CEO and Academic Catalyst",
      bio: "An educationist, UK-certified ECED Master Trainer, Academic Catalyst and Remedial Support Specialist who leads Learning Lab's academic direction, educator development and learning programmes.",
      image: "/images/f0911a77774c1e86b6b7f5b41669bcfd8e129a98.jpg",
      style: { transform: "scale(1.45)", transformOrigin: "50% 32%" },
    },
    {
      id: 4,
      name: "Shamsah Dhanani",
      role: "Director of Academic Training",
      bio: "Supports teacher development, academic training and school-focused programmes.",
      image: "/images/194fe366e7d460cfaf4010cd68926ba9ecd49fd9.png",
      style: { objectPosition: "center top" },
    },
  ];

  const therapyTeam = [
    {
      id: 1,
      name: "Rutba Damani",
      role: "Lead Clinical Psychologist",
      bio: "An Associate Clinical Psychologist, ABA practitioner and RBT who leads clinical planning, behavioural support, assessment coordination and the development of personalised therapy goals.",
      image: "/images/d2d2e20ea9d60f757a4db4831c6a7885c3fda3de.jpg",
      style: { objectPosition: "center top" },
    },
    {
      id: 2,
      name: "Areesha Khan",
      role: "Senior Speech Therapist",
      bio: "Supports speech, language, communication, individualised therapy planning, trained in Gestalt Language Processing (GLP), Padovan Method, supporting communication, language development, and overall functional skills.",
      image: "/images/5dd920ed7ee200eabc100e85269e93021ce0e49c.jpg",
      style: { objectPosition: "center top" },
    },
    {
      id: 3,
      name: "Zulikha Khalique",
      role: "Occupational Therapist",
      bio: "Supports sensory processing, motor development, regulation and everyday independence.",
      image: "/images/7f7498c8d706ff50d5f763f1db0b785f850e9e0f.jpg",
      style: { objectPosition: "center top" },
    },
    {
      id: 4,
      name: "Rabia Aftab",
      role: "BS Psychology/ABAT (QABA Board)",
      bio: "Provides individualized, evidence-based behavioral support to help children develop communication, social, and daily living skills under supervision",
      image: "/images/85e10214a847265a774811624bd9d1e2f76dfe23.jpg",
      style: { transform: "scale(1.48)", transformOrigin: "50% 28%" },
    },
    {
      id: 5,
      name: "Hassan Merchant",
      role: "Music Therapist",
      bio: "Leads music-based enrichment experiences that support participation, expression and confidence.",
      image: "/images/26c2e27bbab28c8e1395f930634ec5e4e1f12515.jpg",
      style: { transform: "scale(1.58)", transformOrigin: "50% 24%" },
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subsection 1: Leadership */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#111827] leading-[1.2] tracking-tight">
            <span className="relative inline-block">
              Leadership
              {/* Hand-drawn Orange Underline */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-[12px] overflow-visible pointer-events-none"
                viewBox="0 0 160 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 3 6 C 50 12, 110 13, 157 5"
                  stroke="#f15b2a"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Leadership Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-14">
          {leadership.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              {/* Portrait Card */}
              <div className="relative w-full aspect-[4/4.2] max-w-[270px] xl:max-w-[290px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#e6ebed] shadow-xs flex items-center justify-center">
                <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 290px"
                    style={member.style}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <h3 className="text-[16px] sm:text-[17px] lg:text-[18.5px] font-bold text-[#111827] mt-4 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-bold text-[#f15b2a] mt-1">
                {member.role}
              </p>
              <p className="mt-2 text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#4b5563] leading-[1.6] font-normal max-w-[280px]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Subsection 2: Therapy and Academic Team */}
        <div className="relative max-w-[1100px] mx-auto mt-24 sm:mt-28">
          
          {/* Blue Rainbow Doodle (Floating Top Right) */}
          <div className="absolute right-0 sm:right-2 -top-10 sm:-top-14 w-[65px] sm:w-[80px] pointer-events-none z-10 rotate-6">
            <Image
              src="/images/587145765f033a29e2cef38593dd34467bc7ddd3.png"
              alt="Blue Rainbow Doodle"
              width={90}
              height={70}
              className="w-full h-auto"
            />
          </div>

          <div className="text-center">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#111827] leading-[1.2] tracking-tight">
              Therapy and{" "}
              <span className="relative inline-block">
                Academic Team
                {/* Hand-drawn Orange Underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-[12px] overflow-visible pointer-events-none"
                  viewBox="0 0 200 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 3 6 C 60 12, 140 13, 197 5"
                    stroke="#f15b2a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Therapy Team Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 mt-12 sm:mt-14 justify-items-center">
            {therapyTeam.slice(0, 3).map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center group">
                {/* Portrait Card */}
                <div className="relative w-full aspect-[4/4.2] max-w-[300px] xl:max-w-[320px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#e6ebed] shadow-xs flex items-center justify-center">
                  <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 320px"
                      style={member.style}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-[16px] sm:text-[17px] lg:text-[18.5px] font-bold text-[#111827] mt-4 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-bold text-[#f15b2a] mt-1">
                  {member.role}
                </p>
                <p className="mt-2 text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#4b5563] leading-[1.6] font-normal max-w-[290px]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Last 2 members — centered row */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-10 xl:gap-12 mt-8 sm:mt-10">
            {therapyTeam.slice(3).map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center group max-w-[300px] xl:max-w-[320px] mx-auto sm:mx-0">
                {/* Portrait Card */}
                <div className="relative w-full aspect-[4/4.2] max-w-[300px] xl:max-w-[320px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#e6ebed] shadow-xs flex items-center justify-center">
                  <div className="w-full h-full relative transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 320px"
                      style={member.style}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-[16px] sm:text-[17px] lg:text-[18.5px] font-bold text-[#111827] mt-4 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-bold text-[#f15b2a] mt-1">
                  {member.role}
                </p>
                <p className="mt-2 text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#4b5563] leading-[1.6] font-normal max-w-[290px]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

