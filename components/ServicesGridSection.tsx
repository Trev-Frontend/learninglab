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
      image: "/newimages/service1.png",
      objectPosition: "center 75%",
    },
    {
      id: 2,
      slug: "aba-therapy",
      title: "ABA Therapy",
      description:
        "Structured, goal-based intervention using evidence-based teaching strategies and ongoing data to build functional skills.",
      image: "/newimages/service3.png",
      objectPosition: "center 60%",
    },
    {
      id: 3,
      slug: "speech-therapy",
      title: "Speech Therapy",
      description:
        "Support for speech development, language understanding, expression, communication and social interaction.",
      image: "/newimages/service2.png",
      objectPosition: "center 50%",
    },
    {
      id: 4,
      slug: "occupational-therapy",
      title: "Occupational Therapy",
      description:
        "Support for sensory processing, movement, fine motor skills, handwriting, self-care, regulation and independence.",
      image: "/newimages/service4.png",
      objectPosition: "center 45%",
    },
    {
      id: 5,
      slug: "remedial-support-therapy",
      title: "Remedial Support & Therapy",
      description:
        "Individualised academic support for reading, writing, numeracy, comprehension and learning gaps.",
      image: "/newimages/service5.png",
      objectPosition: "center 45%",
    },
    {
      id: 6,
      slug: "school-readiness",
      title: "School Readiness",
      description:
        "Preparation for classroom routines, communication, attention, social participation and early academic learning.",
      image: "/newimages/service7.png",
      objectPosition: "center 65%",
    },
    {
      id: 7,
      slug: "early-intervention",
      title: "Early Intervention",
      description:
        "Timely support for younger children showing emerging developmental, communication, behavioural or sensory concerns.",
      image: "/newimages/service6.png",
      objectPosition: "center center",
    },
    {
      id: 8,
      slug: "assessments",
      title: "Assessments",
      description:
        "Formal and informal assessment for psychological, developmental, speech, sensory, academic and cognitive concerns.",
      image: "/newimages/service8.png",
      objectPosition: "center 40%",
    },
    {
      id: 9,
      slug: "enrichment-programmes",
      title: "Enrichment Programmes",
      description:
        "Music, reading, arts and crafts, crochet, culinary and other purposeful programmes open to all children.",
      image: "/newimages/service9.jpg",
      objectPosition: "center center",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3x3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-[#f7fae2] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 lg:p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer"
            >
              {/* Card Image Frame */}
              <div className="relative w-full aspect-[4/2.7] rounded-[20px] overflow-hidden shadow-xs mb-5 bg-[#e8eed0]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  style={{ objectPosition: service.objectPosition }}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-extrabold text-[#0c3746] tracking-tight group-hover:text-[#f15b2a] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16.5px] 2xl:text-[18px] text-[#334650] leading-[1.6] font-medium">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
