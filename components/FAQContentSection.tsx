"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: 1,
    question: "Does my child need a diagnosis before contacting Learning Lab?",
    answer:
      "No. Many parents contact us because they have noticed a concern but do not yet know what it means. We can begin with a free introductory call and guide you towards consultation, assessment or the most suitable service.",
  },
  {
    id: 2,
    question: "What age group does Learning Lab support?",
    answer:
      "Our child-focused therapies, assessments, learning support and enrichment programmes are available for children up to 15 years old.",
  },
  {
    id: 3,
    question: "What happens after I contact you?",
    answer:
      "Our team first speaks with you to understand the concern. A parent-only consultation is then arranged when appropriate. Consultation and assessment findings help us recommend the next step.",
  },
  {
    id: 4,
    question: "Is the introductory call free?",
    answer:
      "Yes. The introductory call is free and may take approximately 5 to 30 minutes, depending on the concern. It is intended to understand your enquiry and explain the next step.",
  },
  {
    id: 5,
    question: "Do you provide online therapy?",
    answer:
      "In-person therapy is currently provided at our Karachi centre. Online parent consultations, teacher training and school consultancy are available worldwide.",
  },
  {
    id: 6,
    question: "What is the difference between Behavioural Therapy and ABA Therapy?",
    answer:
      "Behavioural Therapy provides practical support for behaviour, routines, regulation and communication. ABA is a more structured, data-led programme using specific teaching goals. The team recommends the approach that best fits the child’s assessed needs.",
  },
  {
    id: 7,
    question: "How do I know which therapy my child needs?",
    answer:
      "Parents are not expected to decide alone. We begin with consultation and, where needed, assessment so the team can recommend an appropriate service or combination of services.",
  },
  {
    id: 8,
    question: "How long is a therapy session?",
    answer:
      "Most sessions are approximately 45 to 60 minutes. The recommended duration and frequency depend on the child’s plan.",
  },
  {
    id: 9,
    question: "How often are sessions available?",
    answer:
      "Sessions may be scheduled on weekdays according to the child’s plan, therapist availability and agreed frequency.",
  },
  {
    id: 10,
    question: "How are parents updated?",
    answer:
      "Parents receive communication through a dedicated WhatsApp group, photographs or short video updates after sessions, verbal summaries where appropriate and every two weeks progress discussions.",
  },
  {
    id: 11,
    question: "How often is progress formally reviewed?",
    answer:
      "Formal progress reviews and written reports are generally completed every three to six months. Parents can request an earlier review when a concern needs attention.",
  },
  {
    id: 12,
    question: "Can parents observe sessions?",
    answer:
      "Parents may observe from outside the therapy room. This helps the child participate with the therapist while maintaining transparency for the family.",
  },
  {
    id: 13,
    question: "Do you work with schools?",
    answer:
      "Yes. With parental consent, Learning Lab can coordinate with schools, support IEP planning, provide teacher guidance and arrange a school visit when required.",
  },
  {
    id: 14,
    question: "Do you provide assessment reports?",
    answer:
      "Formal assessments include a written report and a separate parent feedback meeting. Informal assessments guide planning but may not include a formal written report.",
  },
  {
    id: 15,
    question: "Do you guarantee therapy results?",
    answer:
      "No responsible professional can guarantee a particular result or fixed timeline. Every child responds differently. We commit to ethical practice, clear goals, regular communication and ongoing review.",
  },
  {
    id: 16,
    question: "Are enrichment programmes only for children in therapy?",
    answer:
      "No. Enrichment programmes are open to neurodiverse and neurotypical children, including those who are not enrolled in therapy.",
  },
  {
    id: 17,
    question: "Are teacher training programmes available internationally?",
    answer:
      "Yes. Live online training and school consultancy can be arranged worldwide. Scheduled courses follow fixed dates, while organised groups may request a separate arrangement.",
  },
  {
    id: 18,
    question: "What are your opening hours?",
    answer:
      "Learning Lab is open Monday to Friday from 10:00 AM to 6:00 PM.",
  },
  {
    id: 19,
    question: "Where are you located?",
    answer:
      "Learning Lab is located at 201, 2nd Floor, Prime Tower, 5 Zulfiqar Avenue, DHA Phase 8, Zulfiqar and Al Murtaza Commercial Area, Karachi 75500",
  },
];

export default function FAQContentSection() {
  // Question 1 open by default
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[860px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Accordion Items */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqList.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#f4f5f0] border border-black/5 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Header Toggle Row */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-5 sm:px-6 xl:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-extrabold text-[#0c3746] text-[15px] sm:text-[16.5px] lg:text-[18px] xl:text-[20px] 2xl:text-[21.5px] leading-snug hover:text-[#f15b2a] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="flex-shrink-0 w-6 h-6 xl:w-7 xl:h-7 bg-[#0c3746] text-white rounded-full flex items-center justify-center transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Answer Content Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 xl:px-7 pb-5 xl:pb-6 pt-1 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-[#1c333d] font-semibold leading-[1.65] border-t border-black/5">
                    {faq.answer ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <p className="italic text-[#92a1a8]">
                        Details coming soon...
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 sm:px-8 xl:px-10 py-3.5 xl:py-4 rounded-full text-[13px] sm:text-[14px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Have Question? Contact us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
