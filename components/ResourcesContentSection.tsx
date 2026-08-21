"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface ArticleCard {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  category: string;
  slug: string;
}

const articlesData: ArticleCard[] = [
  {
    id: 1,
    image: "/images/resources&blog2.jpg",
    title: "Speech Delay in Children:",
    subtitle: "When Should Parents Seek Guidance?",
    category: "Speech and Communication",
    slug: "speech-delay-in-children",
  },
  {
    id: 2,
    image: "/images/resources&blog1.jpg",
    title: "Tantrum, Overload or Communication Difficulty:",
    subtitle: "Understanding What Behaviour May Be Telling You",
    category: "Behaviour and Emotional Regulation",
    slug: "tantrum-overload-or-communication-difficulty",
  },
  {
    id: 3,
    image: "/images/resources&blog5.jpg",
    title: "Does My Child Need a Diagnosis Before Starting....",
    category: "Parent Guidance",
    slug: "does-my-child-need-a-diagnosis",
  },
  {
    id: 4,
    image: "/images/resources&blog4.jpg",
    title: "Sensory Overload in Children:",
    subtitle: "Signs Parents May Notice at Home",
    category: "Sensory Processing and Occupational Therapy",
    slug: "sensory-overload-in-children",
  },
  {
    id: 5,
    image: "/images/resources&blog6.jpg",
    title: "What Happens During a Child Development Assessment?",
    category: "Assessments and Developmental Clarity",
    slug: "what-happens-during-child-development-assessment",
  },
  {
    id: 6,
    image: "/images/resources&blog3.jpg",
    title: "School Readiness Is More Than ABCs:",
    subtitle: "Skills Children Need Before the Classroom",
    category: "School Readiness and Admissions",
    slug: "school-readiness-is-more-than-abcs",
  },
];

const categoriesList = [
  "Speech and Communication",
  "Behaviour and Emotional Regulation",
  "Sensory Processing and Occupational Therapy",
  "Learning and Remedial Support",
  "School Readiness and Admissions",
  "Assessments and Developmental Clarity",
  "Parent Guidance",
  "Inclusive Classrooms and Teacher Development",
];

export default function ResourcesContentSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on search query and category
  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.subtitle && article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative w-full bg-white py-12 sm:py-18 overflow-hidden">
      <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Sidebar (Categories & Search) + Right Grid (Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ========================================================================= */}
          {/* LEFT SIDEBAR (Search + Categories) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Search Input Box */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f4f5f0] border border-black/5 rounded-xl px-4 py-2.5 sm:py-3 pr-10 text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] text-[#0c3746] placeholder-[#829199] focus:outline-none focus:ring-2 focus:ring-[#5b4bbb]/30 transition-all font-medium"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#829199] pointer-events-none" />
            </div>

            {/* Categories Card Box */}
            <div className="bg-[#f4f5f0] border border-black/5 rounded-2xl p-5 sm:p-6">
              <h3 className="text-[15px] sm:text-[16.5px] xl:text-[18.5px] font-extrabold text-[#0c3746] mb-4 tracking-tight">
                Categories
              </h3>
              
              <ul className="space-y-3.5">
                {categoriesList.map((cat, idx) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <li key={idx}>
                      <button
                        onClick={() =>
                          setSelectedCategory(isActive ? null : cat)
                        }
                        className={`text-left w-full text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] xl:text-[17px] 2xl:text-[18px] font-medium transition-colors leading-snug ${
                          isActive
                            ? "text-[#f15b2a] font-bold"
                            : "text-[#566e7a] hover:text-[#0c3746]"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4 text-[13px] xl:text-[14.5px] font-bold text-[#f15b2a] underline hover:text-[#de4b1a]"
                >
                  Show All Categories
                </button>
              )}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT CONTENT GRID (6 Article Cards) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            {/* Cards Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#f4f7e1] border border-[#e4ebce] rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 group cursor-pointer"
                >
                  <div>
                    {/* Card Photo Container */}
                    <div className="relative w-full aspect-[1/0.68] rounded-xl overflow-hidden mb-3.5 bg-black/5">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Card Content Title & Subtitle */}
                    <h4 className="text-[15px] sm:text-[16px] lg:text-[17.5px] xl:text-[19.5px] 2xl:text-[21px] font-extrabold text-[#0c3746] leading-[1.35] tracking-tight">
                      {article.title}
                    </h4>
                    {article.subtitle && (
                      <p className="mt-1 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16.5px] 2xl:text-[18px] text-[#334650] font-semibold leading-[1.4]">
                        {article.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls Bar */}
            <div className="mt-10 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-lg text-[13px] font-extrabold flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? "bg-[#f15b2a] text-white shadow-xs"
                    : "bg-[#f4f6e6] text-[#4a6328] hover:bg-[#e4ebce]"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-lg text-[13px] font-extrabold flex items-center justify-center transition-all ${
                  currentPage === 2
                    ? "bg-[#f15b2a] text-white shadow-xs"
                    : "bg-[#f4f6e6] text-[#4a6328] hover:bg-[#e4ebce]"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-lg text-[13px] font-extrabold flex items-center justify-center transition-all ${
                  currentPage === 3
                    ? "bg-[#f15b2a] text-white shadow-xs"
                    : "bg-[#f4f6e6] text-[#4a6328] hover:bg-[#e4ebce]"
                }`}
              >
                3
              </button>
              <button
                onClick={() => setCurrentPage(4)}
                className={`w-8 h-8 rounded-lg text-[13px] font-extrabold flex items-center justify-center transition-all ${
                  currentPage === 4
                    ? "bg-[#f15b2a] text-white shadow-xs"
                    : "bg-[#f4f6e6] text-[#4a6328] hover:bg-[#e4ebce]"
                }`}
              >
                4
              </button>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* PRE-FOOTER DISCLAIMER & KIDS ILLUSTRATION */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-6 text-center max-w-[800px] mx-auto">
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17.5px] 2xl:text-[19px] text-[#334650] font-medium leading-[1.6]">
            Practical guidance for the questions parents and educators ask most. Browse articles on therapy, learning, development, school support and inclusive practice.
          </p>

          {/* Kids Dancing Under Sun Illustration (Floating) */}
          <div className="mt-8 sm:mt-10 w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] mx-auto relative px-2 sm:px-4 animate-float-subtle">
            <Image
              src="/images/11788e7f12548c0e6ac681e5791080ab41c8437b.png"
              alt="Children playing under the sun illustration"
              width={840}
              height={300}
              className="w-full h-auto mx-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
