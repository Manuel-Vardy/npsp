"use client";

import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import InstitutionCard from "@/components/ui/InstitutionCard";
import AccordionItem from "@/components/ui/AccordionItem";
import institutions from "@/data/institutions";

const legalItems = [
  {
    question: "Education Act and Teacher Licensing Regulations",
    answer: "The National Teaching Council (NTC) is mandated under the Education Act to regulate teacher licensing in Ghana. All teachers participating in NPSP must hold a valid NTC professional licence, ensuring that only properly qualified professionals are engaged through the programme.",
  },
  {
    question: "Private School Registration & Accreditation Framework",
    answer: "Schools participating in NPSP must be registered with the Ghana Education Service (GES) and accredited by the National Schools Inspectorate Authority (NaSIA). This framework ensures that only legitimate, compliant schools benefit from the programme.",
  },
  {
    question: "Public-Private Partnership Framework",
    answer: "NPSP operates as a structured Public-Private Partnership (PPP) under the oversight of the Ministry of Education. The PPP framework defines the roles and responsibilities of public bodies (MOE, NTC, NaSIA, GES) and private sector representatives (GNACOPS, GNAPS) in delivering the programme.",
  },
  {
    question: "Payment & Disbursement Regulations",
    answer: "The CAMDM (Centralized Allowance Management and Disbursement Mechanism) operates under the fiscal oversight of the Ministry of Finance and relevant revenue authorities. All remittances and disbursements follow regulated financial protocols to ensure transparency and accountability.",
  },
  {
    question: "Data Protection and Professional Standards",
    answer: "Teacher personal data, licensing information, and financial records are protected under applicable data protection regulations. The programme maintains strict role-based access controls and audit trails to safeguard all participant information.",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <HeroSection
        heading="About NPSP"
        subheading="Understanding Ghana's National Private Teacher Engagement Programme — its purpose, governance, and institutional foundations."
        backgroundVariant="blue"
      />

      {/* About the Programme */}
      <section className="bg-white py-16" aria-labelledby="about-programme-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="about-programme-heading" className="text-3xl font-bold text-gray-900 mb-6">
              National Private Teacher Engagement Programme
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>NPSP</strong> — the National Private Teacher Engagement Programme — is a
                national Public-Private Partnership initiative established under the oversight of
                Ghana's Ministry of Education.
              </p>
              <p>
                The programme was created to address a critical structural gap: thousands of
                qualified, licensed teachers remain unemployed while Ghana's private pre-tertiary
                schools continue to struggle with staffing shortfalls. NPSP bridges this gap by
                providing a structured, verified framework for teacher engagement.
              </p>
              <p>
                NPSP's national purpose is to formalise teacher-school engagements across Ghana's
                16 regions, standardise payment through the CAMDM mechanism, and strengthen the
                private education sector through verified, compliant teacher placements.
              </p>
              <p>
                The programme works directly with Ghana's private pre-tertiary education sector —
                covering nursery, primary, junior high, and senior high schools — to ensure that
                every engaged teacher is properly licensed, every school is properly registered,
                and every payment is properly verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-blue-50 py-16" aria-labelledby="vision-mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vision-mission-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vision &amp; Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4" aria-hidden="true">
                <svg className="w-6 h-6 text-[#FCD116]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A stronger, more professional and better-connected private-school teaching workforce
                across Ghana.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-[#006B3F] flex items-center justify-center mb-4" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Creating teaching opportunities for licensed graduates",
                  "Formalizing existing teacher-school arrangements",
                  "Supporting professional standards and CPD",
                  "Improving payment reliability through CAMDM",
                  "Strengthening Ghana's private schools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#006B3F] mt-0.5" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why NPSP Was Created */}
      <section className="bg-white py-16" aria-labelledby="why-created-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="why-created-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Why NPSP Was Created
            </h2>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                <h3 className="font-bold text-red-900 mb-2">The Teacher Supply Paradox</h3>
                <p className="text-red-800 text-sm leading-relaxed">
                  Ghana produces thousands of qualified, NTC-licensed teachers each year. Yet many
                  remain unemployed or underemployed. At the same time, private schools across the
                  country report persistent difficulty finding and retaining qualified teaching staff.
                  NPSP was designed specifically to resolve this paradox.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
                <h3 className="font-bold text-yellow-900 mb-2">Private School Staffing Deficit</h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  With 16,674 registered private pre-tertiary schools operating across Ghana's 16
                  regions, the private education sector represents a significant share of the
                  national education workforce. Many of these schools have teachers working under
                  informal, unverified arrangements without payment protection or professional
                  recognition.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2">Payment Reliability Problems</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Before NPSP, there was no centralised mechanism to ensure teachers in private
                  schools were paid reliably, correctly, and on time. The CAMDM mechanism was
                  specifically designed to close this gap through structured three-way verification
                  before every disbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Behind NPSP */}
      <section className="bg-gray-50 py-16" aria-labelledby="partners-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="partners-heading" className="text-3xl font-bold text-gray-900 text-center mb-4">
            Who Is Behind NPSP?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            NPSP is a collaboration between Ghana's key education governance and sector bodies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutions.map((inst) => (
              <InstitutionCard
                key={inst.id}
                name={inst.name}
                acronym={inst.acronym}
                role={inst.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="bg-white py-16" aria-labelledby="governance-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="governance-heading" className="text-3xl font-bold text-gray-900 text-center mb-4">
            Governance Structure
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            The PMU is the operational nerve centre responsible for the centralized database,
            matching, monitoring and CAMDM.
          </p>
          <div className="max-w-2xl mx-auto">
            {/* Tier 1 */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-900 text-white rounded-xl px-8 py-4 text-center">
                <p className="font-bold text-sm">Ministry of Education</p>
                <p className="text-blue-200 text-xs mt-1">National Steering Committee</p>
              </div>
            </div>
            {/* Connector */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-blue-300" aria-hidden="true" />
            </div>
            {/* Tier 2 */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#006B3F] text-white rounded-xl px-8 py-4 text-center">
                <p className="font-bold text-sm">Programme Management Unit</p>
                <p className="text-green-200 text-xs mt-1">Operational nerve centre — database, matching, CAMDM</p>
              </div>
            </div>
            {/* Connector */}
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-blue-300" aria-hidden="true" />
            </div>
            {/* Tier 3 */}
            <div className="flex flex-wrap justify-center gap-3">
              {["NTC", "NaSIA", "GES", "GNACOPS", "GNAPS", "Other Stakeholders"].map((body) => (
                <div key={body} className="bg-gray-100 rounded-lg px-4 py-2 text-center">
                  <p className="text-xs font-semibold text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Institutional Foundation */}
      <section className="bg-gray-50 py-16" aria-labelledby="legal-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="legal-heading" className="text-3xl font-bold text-gray-900 text-center mb-4">
            Legal &amp; Institutional Foundation
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            NPSP operates within Ghana's existing statutory and regulatory framework.
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {legalItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
