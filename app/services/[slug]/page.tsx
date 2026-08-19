import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroMultiWave } from "@/components/Doodles";
import BehaviouralTherapyContentSection from "@/components/BehaviouralTherapyContentSection";
import ABATherapyContentSection from "@/components/ABATherapyContentSection";
import SpeechTherapyContentSection from "@/components/SpeechTherapyContentSection";
import OccupationalTherapyContentSection from "@/components/OccupationalTherapyContentSection";
import RemedialSupportContentSection from "@/components/RemedialSupportContentSection";
import SchoolReadinessContentSection from "@/components/SchoolReadinessContentSection";
import EarlyInterventionContentSection from "@/components/EarlyInterventionContentSection";
import AssessmentsContentSection from "@/components/AssessmentsContentSection";
import EnrichmentProgrammesContentSection from "@/components/EnrichmentProgrammesContentSection";
import ParentInvolvementSection from "@/components/ParentInvolvementSection";

// Service Detail Data Store
const serviceDetailsData: Record<
  string,
  {
    title: string;
    headline: string;
    description: string;
    parentTitle?: string;
    parentTitleUnderline?: string;
    parentInvolvement?: string;
  }
> = {
  "behavioural-therapy": {
    title: "Behavioural Therapy",
    headline: "Understanding behaviour and building more helpful ways to cope.",
    description:
      "Behaviour is communication. A child may cry, refuse, withdraw, become aggressive or struggle with routines because they do not yet have another way to express a need, manage discomfort or respond to a situation. Behavioural Therapy helps us understand the pattern and teach practical skills that support safer, more successful participation.",
    parentInvolvement:
      "Parents receive regular updates, clarity on goals, progress observations and practical strategies that can be used consistently at home. Specific guidance is included to support home activity and routine carryover.",
  },
  "aba-therapy": {
    title: "ABA Therapy",
    headline: "Structured, individualised support for learning and everyday skills.",
    description:
      "Applied Behaviour Analysis (ABA) focuses on building functional communication, daily skills, engagement and learning readiness through structured, individualised teaching. ABA strategies are used thoughtfully when a child needs meaningful skill building and support through an ABA programme.",
    parentInvolvement:
      "Parents receive regular updates and are guided on how to support progress at home between sessions. Formal progress reviews ensure that strategies remain aligned with family priorities.",
  },
  "speech-therapy": {
    title: "Speech Therapy",
    headline: "Helping children understand, express and connect.",
    description:
      "Communication is central to learning, relationships and everyday independence. Speech Therapy is provided when a child has difficulty understanding language, expressing needs, producing speech clearly or using communication socially with others.",
    parentInvolvement:
      "Parents receive guidance after sessions and practical communication strategies that can be used during ordinary routines to promote relaxed language growth and home carryover.",
  },
  "occupational-therapy": {
    title: "Occupational Therapy",
    headline: "Supporting regulation, movement and everyday independence.",
    description:
      "Occupational Therapy supports children in growing the physical, sensory, motor and practical skills needed for daily life, play, learning and self-care. Occupational Therapy is helpful when sensory processing differences, motor difficulties, or coordination challenges affect daily routines, learning or participation.",
    parentInvolvement:
      "Parents receive guidance on practical strategies and environmental adaptations that can be continued at home. Recommendations may include sensory routines, movement breaks, or task modifications.",
  },
  "remedial-support-therapy": {
    title: "Remedial Support & Therapy",
    headline: "Closing learning gaps through support that matches how the child learns.",
    description:
      "Not all children learn academic concepts in the same way or at the same pace. Remedial Support & Therapy provides targetted instruction to build specific academic skills, remedial support & therapy identifies where learning difficulty lies and builds flexible ways to learn, understand and retain.",
    parentInvolvement:
      "Parents receive regular updates and easy-to-manage home strategies whenever requested. Learning goals can coordinate with the school to support consistent learning support.",
  },
  "school-readiness": {
    title: "School Readiness",
    headline: "Building the skills children need to participate in school.",
    description:
      "School readiness involves more than academic skills—it includes emotional regulation, self-care, social communication, independence and motor skills. School Readiness supports children in developing the prerequisite skills needed to enter school and participate in classroom life with confidence.",
    parentInvolvement:
      "Parents receive guidance on home routines that encourage independence and classroom readiness. School coordination can be arranged when requested to help the child settle into group learning environments.",
  },
  "early-intervention": {
    title: "Early Intervention",
    headline: "Early support for emerging developmental concerns.",
    description:
      "When a young child shows early signs of a communication delay, sensory processing concerns, motor difficulties or behavioural challenges, early support makes a significant difference. Early Intervention is designed so that families do not have to wait for delays to broaden before receiving guidance.",
    parentInvolvement:
      "Parents are closely involved through session updates, guidance and regular progress reviews. This helps families understand how to support progress, home routines, and promote general growth.",
  },
  assessments: {
    title: "Assessments",
    headline: "Clarity before conclusions.",
    description:
      "Understanding a child's strengths and developmental needs is the first step toward effective support. Assessments clarify the nature of difficulty and what support should follow. We offer formal and informal assessments across developmental, psychological, communication, motor and academic areas.",
    parentTitle: "Formal and informal assessment",
    parentTitleUnderline: "assessment",
    parentInvolvement:
      "Formal assessments provide standardized scoring and diagnostic clarity, whereas informal assessments offer quick observations to guide therapy goals and intervention planning. Both are used based on clinical need.",
  },
  "enrichment-programmes": {
    title: "Enrichment Programmes",
    headline: "Learning, creativity and confidence beyond the therapy room.",
    description:
      "Children thrive when given varied opportunities to express, explore, and learn in social environments. Enrichment Programmes are open to all children and run throughout the year, including seasonal and interest-based themes.",
    parentTitle: "Programme schedules change throughout the year.",
    parentTitleUnderline: "year.",
    parentInvolvement:
      "Contact our team to enquire about current schedules and available sessions for your child.",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceDetailsData).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = serviceDetailsData[slug] || serviceDetailsData["enrichment-programmes"];

  const renderContentSection = () => {
    if (slug === "enrichment-programmes") {
      return <EnrichmentProgrammesContentSection />;
    }
    if (slug === "assessments") {
      return <AssessmentsContentSection />;
    }
    if (slug === "early-intervention") {
      return <EarlyInterventionContentSection />;
    }
    if (slug === "school-readiness") {
      return <SchoolReadinessContentSection />;
    }
    if (slug === "remedial-support-therapy") {
      return <RemedialSupportContentSection />;
    }
    if (slug === "occupational-therapy") {
      return <OccupationalTherapyContentSection />;
    }
    if (slug === "speech-therapy") {
      return <SpeechTherapyContentSection />;
    }
    if (slug === "aba-therapy") {
      return <ABATherapyContentSection />;
    }
    return <BehaviouralTherapyContentSection />;
  };

  return (
    <main className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      
      {/* Top Announcement Bar */}
      <TopBar variant="cream" />

      {/* Brand Navbar */}
      <Navbar variant="purple" activeNav="Services" />

      {/* Service Detail Hero Banner */}
      <section className="relative w-full bg-[#5b4bbb] pt-12 sm:pt-16 pb-28 sm:pb-36 text-white overflow-hidden">
        <div className="max-w-[1240px] xl:max-w-[1360px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Headline */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-extrabold text-white leading-[1.18] tracking-tight max-w-[1000px] mx-auto">
            {service.headline}
          </h1>

          {/* Paragraph */}
          <p className="mt-5 text-[14px] sm:text-[15px] lg:text-[16.5px] xl:text-[18.5px] 2xl:text-[20px] text-white/95 leading-[1.65] max-w-[880px] mx-auto font-medium">
            {service.description}
          </p>

        </div>

        {/* 3-Layered Wave Divider */}
        <HeroMultiWave />
      </section>

      {/* Detail Content Section */}
      {renderContentSection()}

      {/* "Parent involvement" / Pre-Footer CTA */}
      <ParentInvolvementSection
        title={service.parentTitle || "Parent involvement"}
        titleUnderline={service.parentTitleUnderline || "involvement"}
        description={service.parentInvolvement}
      />

      {/* Main Footer */}
      <Footer />

    </main>
  );
}
