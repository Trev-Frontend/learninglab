import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const leadership = [
    {
      id: 1,
      name: "Dr. Farhad Karamally",
      role: "Co-Founder and Director",
      bio: "A corporate leadership master trainer, published author and entrepreneur with extensive experience across South-East Asia and the Middle East. His work spans leadership, inclusion, culture change and organisational development.",
      image: null, // Grey placeholder matching screenshot
    },
    {
      id: 2,
      name: "Nadya Farhad Karamally",
      role: "Co-Founder and Director",
      bio: "An MBA in Marketing with experience across FMCG and financial sectors. Her work at Learning Lab reflects a commitment to creating purposeful opportunities and nurturing environments where children can flourish beyond academics.",
      image: "/images/a3b9aed88346f0ff260af55d605d09166b18a27d.jpg",
    },
    {
      id: 3,
      name: "Raheela Damani",
      role: "CEO and Academic Catalyst",
      bio: "An educationist, UK-certified ECED Master Trainer, Academic Catalyst and Remedial Support Specialist who leads Learning Lab's academic direction, educator development and learning programmes.",
      image: "/images/f0911a77774c1e86b6b7f5b41669bcfd8e129a98.jpg",
    },
    {
      id: 4,
      name: "Shamsah Dhanani",
      role: "Director of Academic Training",
      bio: "Supports teacher development, academic training and school-focused programmes.",
      image: null, // Grey placeholder matching screenshot
    },
  ];

  const therapyTeam = [
    {
      id: 1,
      name: "Rutba Damani",
      role: "Lead Clinical Psychologist",
      bio: "An Associate Clinical Psychologist, ABA practitioner and RBT who leads clinical planning, behavioural support, assessment coordination and the development of personalised therapy goals.",
      image: "/images/d2d2e20ea9d60f757a4db4831c6a7885c3fda3de.jpg",
    },
    {
      id: 2,
      name: "Areesha Khan",
      role: "Senior Speech Therapist",
      bio: "Supports speech, language, communication and individualised therapy planning.",
      image: "/images/5dd920ed7ee200eabc100e85269e93021ce0e49c.jpg",
    },
    {
      id: 3,
      name: "Zulikha Khalique",
      role: "Occupational Therapist",
      bio: "Supports sensory processing, motor development, regulation and everyday independence.",
      image: "/images/7f7498c8d706ff50d5f763f1db0b785f850e9e0f.jpg",
    },
    {
      id: 4,
      name: "Hassan Merchant",
      role: "Music Therapist",
      bio: "Leads music-based enrichment experiences that support participation, expression and confidence.",
      image: null, // Grey placeholder matching screenshot
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subsection 1: Leadership */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
            <span className="relative inline-block">
              Leadership
              {/* Hand-drawn Orange Underline */}
              <svg
                className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-[10px] overflow-visible pointer-events-none"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 2 7 C 50 12, 110 12, 158 4"
                  stroke="#f15b2a"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-14">
          {leadership.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              {/* Portrait Card */}
              <div className="relative w-full aspect-[4/4.5] max-w-[260px] rounded-[24px] overflow-hidden shadow-sm bg-[#e2e5e7] flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="260px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#dbe0e3]" />
                )}
              </div>

              {/* Details */}
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0c3746] mt-4 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[11.5px] sm:text-[12px] font-bold text-[#f15b2a] mt-0.5">
                {member.role}
              </p>
              <p className="mt-2 text-[11.5px] sm:text-[12px] text-[#566e7a] leading-[1.5] font-medium max-w-[250px]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Subsection 2: Therapy and Academic Team */}
        <div className="relative text-center mt-20 sm:mt-24">
          
          {/* Blue Rainbow Doodle (Floating Top Right) */}
          <div className="absolute right-[4%] sm:right-[8%] -top-8 sm:-top-12 w-[60px] sm:w-[75px] pointer-events-none z-10 rotate-6">
            <Image
              src="/images/587145765f033a29e2cef38593dd34467bc7ddd3.png"
              alt="Blue Rainbow Doodle"
              width={90}
              height={70}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-[#0c3746] leading-[1.2] tracking-tight">
            Therapy and{" "}
            <span className="relative inline-block">
              Academic Team
              {/* Hand-drawn Orange Underline */}
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
        </div>

        {/* Therapy Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 sm:mt-14">
          {therapyTeam.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              {/* Portrait Card */}
              <div className="relative w-full aspect-[4/4.5] max-w-[260px] rounded-[24px] overflow-hidden shadow-sm bg-[#e2e5e7] flex items-center justify-center">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="260px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#dbe0e3]" />
                )}
              </div>

              {/* Details */}
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0c3746] mt-4 tracking-tight">
                {member.name}
              </h3>
              <p className="text-[11.5px] sm:text-[12px] font-bold text-[#f15b2a] mt-0.5">
                {member.role}
              </p>
              <p className="mt-2 text-[11.5px] sm:text-[12px] text-[#566e7a] leading-[1.5] font-medium max-w-[250px]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
