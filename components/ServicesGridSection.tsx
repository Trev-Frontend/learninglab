import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesGridSection() {
  const services = [
    {
      id: 1,
      slug: "behavioural-therapy",
      title: "Behavioural Therapy",
      description:
        "Support for tantrums, refusal, emotional regulation, routines, communication, social participation and everyday behaviour.",
      image: "/images/64cc31d70620c84412a1e2938e293e28e672fa75.jpg",
    },
    {
      id: 2,
      slug: "aba-therapy",
      title: "ABA Therapy",
      description:
        "Structured, goal-based intervention using evidence-based teaching strategies and ongoing data to build functional skills.",
      image: "/images/07f24b07c4f12c733912ddd2cc9c59a31253f30d.jpg",
    },
    {
      id: 3,
      slug: "speech-therapy",
      title: "Speech Therapy",
      description:
        "Support for speech development, language understanding, expression, communication and social interaction.",
      image: "/images/5400922f336eb9b1867b861c1c320672809f2492.jpg",
    },
    {
      id: 4,
      slug: "occupational-therapy",
      title: "Occupational Therapy",
      description:
        "Support for sensory processing, movement, fine motor skills, handwriting, self-care, regulation and independence.",
      image: "/images/cc96c9e4b77ac942ded12448b5960f78d2622ab5.jpg",
    },
    {
      id: 5,
      slug: "remedial-support-therapy",
      title: "Remedial Support & Therapy",
      description:
        "Individualised academic support for reading, writing, numeracy, comprehension and learning gaps.",
      image: "/images/8f91b3d527ffa5ef8c84e538e217d2c86c08df18.jpg",
    },
    {
      id: 6,
      slug: "school-readiness",
      title: "School Readiness",
      description:
        "Preparation for classroom routines, communication, attention, social participation and early academic learning.",
      image: "/images/91b3ac3538c5226eaaa0e2755d957b4eab38f81f.jpg",
    },
    {
      id: 7,
      slug: "early-intervention",
      title: "Early Intervention",
      description:
        "Timely support for younger children showing emerging developmental, communication, behavioural or sensory concerns.",
      image: "/images/061058ce938785f7f2a1d1ae3e221d374e4954ea.jpg",
    },
    {
      id: 8,
      slug: "assessments",
      title: "Assessments",
      description:
        "Formal and informal assessment for psychological, developmental, speech, sensory, academic and cognitive concerns.",
      image: "/images/452c101bdf2446c0b1317faf868439d37d4c766c.jpg",
    },
    {
      id: 9,
      slug: "enrichment-programmes",
      title: "Enrichment Programmes",
      description:
        "Music, reading, arts and crafts, crochet, culinary and other purposeful programmes open to all children.",
      image: "/images/d02e445d1f6d1f0d2bd0bc1b7bdfd8a232908a77.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3x3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-[#f7fae2] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer"
            >
              {/* Card Image Frame */}
              <div className="relative w-full aspect-[4/2.7] rounded-[20px] overflow-hidden shadow-xs mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold text-[#0c3746] tracking-tight group-hover:text-[#f15b2a] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13px] xl:text-[15px] 2xl:text-[16.5px] text-[#475b65] leading-[1.6] font-medium">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
