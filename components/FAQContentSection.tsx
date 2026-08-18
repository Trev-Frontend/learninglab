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
      "Our team provides practical consultation around individual children, classrooms and primary level learning environments. Support is tailored to the school's concern rather than delivered as a generic package.",
  },
  {
    id: 2,
    question: "What age group does Learning Lab support?",
    answer: "",
  },
  {
    id: 3,
    question: "What happens after I contact you?",
    answer: "",
  },
  {
    id: 4,
    question: "Is the introductory call free?",
    answer: "",
  },
  {
    id: 5,
    question: "Do you provide online therapy?",
    answer: "",
  },
  {
    id: 6,
    question: "What is the difference between Behavioural Therapy and ABA Therapy?",
    answer: "",
  },
  {
    id: 7,
    question: "How do I know which therapy my child needs?",
    answer: "",
  },
  {
    id: 8,
    question: "How long is a therapy session?",
    answer: "",
  },
  {
    id: 9,
    question: "How often are sessions available?",
    answer: "",
  },
  {
    id: 10,
    question: "How are parents updated?",
    answer: "",
  },
  {
    id: 11,
    question: "How often is progress formally reviewed?",
    answer: "",
  },
  {
    id: 12,
    question: "Can parents observe sessions?",
    answer: "",
  },
  {
    id: 13,
    question: "Do you work with schools?",
    answer: "",
  },
  {
    id: 14,
    question: "Do you provide assessment reports?",
    answer: "",
  },
  {
    id: 15,
    question: "Do you provide progress reports?",
    answer: "",
  },
  {
    id: 16,
    question: "Are enrichment programmes only for children in therapy?",
    answer: "",
  },
  {
    id: 17,
    question: "Are teacher training programmes available internationally?",
    answer: "",
  },
  {
    id: 18,
    question: "What are your opening hours?",
    answer: "",
  },
  {
    id: 19,
    question: "Where are you located?",
    answer: "",
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
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        
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
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left font-bold text-[#0c3746] text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18.5px] leading-snug hover:text-[#f15b2a] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c3746] text-white rounded-full flex items-center justify-center transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Answer Content Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-[13px] sm:text-[13.5px] lg:text-[14.5px] xl:text-[16px] 2xl:text-[17.5px] text-[#475b65] font-medium leading-[1.65] border-t border-black/5">
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
            className="inline-flex items-center gap-2 bg-[#f15b2a] hover:bg-[#de4b1a] text-white px-7 xl:px-8 py-3 xl:py-3.5 rounded-full text-[13px] sm:text-[14px] xl:text-[15.5px] 2xl:text-[17px] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Have Question? Contact us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
