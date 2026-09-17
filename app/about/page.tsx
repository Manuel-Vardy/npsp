"use client";

import type { ReactNode } from "react";
import HeroSection from "@/components/ui/HeroSection";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";

const processSteps: Array<{
  label: string;
  title: string;
  description: string;
  detail: ReactNode;
}> = [
  {
    label: "Register",
    title: "Step 1 Registration & Verification",
    description:
      "Both teachers and schools register on the NPSP platform, and all credentials are verified against official records before any placement proceeds.",
    detail: (
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Teacher Registration
          </h4>
          <p className="text-sm text-gray-600">
            Teachers create a profile with their NTC licence details,
            qualifications, subject specialisations, location preferences, and
            personal information.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            School Registration
          </h4>
          <p className="text-sm text-gray-600">
            Schools submit their registration certificates, accreditation
            documents, and declare teaching vacancies or existing staff for
            formalization.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Credential Verification
          </h4>
          <p className="text-sm text-gray-600">
            The PMU verifies teacher licensing against NTC records and school
            compliance against NaSIA and GES records to confirm eligibility.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Match",
    title: "Step 2 Matching & Formalization",
    description:
      "Verified teachers and schools are matched, or existing arrangements are formalized.",
    detail: (
      <div className="space-y-3">
        <div className="bg-blue-50 rounded-lg p-3">
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Track A New Licensed Teacher Placement
          </h4>
          <p className="text-sm text-gray-600">
            The PMU matches verified teachers to verified school vacancies based
            on qualification, subject specialisation, and location.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <h4 className="font-semibold text-green-900 text-sm mb-1">
            Track B Existing Staff Formalization &amp; Regularization
          </h4>
          <p className="text-sm text-gray-600">
            Schools submit a staff census. Existing licensed teachers are
            formalized (B1) or placed on the regularization pathway toward NTC
            licensure (B2).
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Verify, every month",
    title: "Step 3 Monthly Verification & Authorization",
    description:
      "Every month, all three parties confirm the teacher's service delivery and the PMU Finance Desk authorizes disbursement.",
    detail: (
      <div className="space-y-3">
        <div className="space-y-2">
          {[
            {
              label: "School Confirmation",
              desc: "The school confirms the teacher attended and delivered service for the month.",
            },
            {
              label: "Teacher Confirmation",
              desc: "The teacher submits their own monthly confirmation through the platform.",
            },
            {
              label: "NTC Standing Check",
              desc: "The NTC verifies the teacher's professional standing remains valid.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
            >
              <span
                className="text-green-600 font-bold mt-0.5"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {item.label}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm text-gray-600">
            The school remits GH₵1,500 per engaged teacher to the CAMDM account.
            Once all three verifications are confirmed complete, the PMU Finance
            Desk approves the disbursement.
          </p>
        </div>
      </div>
    ),
  },

];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        heading="About NPSP"
        subheading="Understanding Ghana's National Private Teacher Engagement Programme, its purpose, governance, and institutional foundations."
        backgroundVariant="blue"
        backgroundImage="/images/informality.jpg"
        overlayClassName="bg-[#0B1628]/70"
        fullHeight={false}
        className="pt-[10rem] md:pt-[9rem]"
      />

      {/* About the Programme */}
      <section className="bg-white py-16" aria-labelledby="about-programme-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 id="about-programme-heading" className="text-3xl font-bold text-gray-900 mb-6">
                National Private Teacher Engagement Programme
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>NPSP</strong> the National Private Teacher Engagement Programme is a
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
                  The programme works directly with Ghana's private pre-tertiary education sector
                  covering nursery, primary, junior high, and senior high schools to ensure that
                  every engaged teacher is properly licensed, every school is properly registered,
                  and every payment is properly verified.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end h-full">
              <div className="relative w-full max-w-xl aspect-[4/3] lg:h-full lg:aspect-auto rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/program-1.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16" aria-labelledby="vision-mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vision-mission-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vision &amp; Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#0B1628] flex items-center justify-center mb-4" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <div className="bg-gray-100 p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#0B1628] flex items-center justify-center mb-4" aria-hidden="true">
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
          <div className="w-full">
            <h2 id="why-created-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Why NPSP Was Created
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative rounded-xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/teacher-supply.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 h-48 bg-[#0B1628]/70 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">The Teacher Supply Paradox</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Ghana graduates thousands of NTC-licensed teachers annually, yet many remain
                    unemployed while private schools struggle to find qualified staff. NPSP resolves
                    this paradox.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/dificit.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 h-48 bg-[#0B1628]/70 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Private School Staffing Deficit</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Over 16,674 private pre-tertiary schools across 16 regions face staffing
                    shortfalls, with many teachers working under informal, unverified arrangements
                    without payment protection.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/reliability.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 h-48 bg-[#0B1628]/70 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Payment Reliability Problems</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Before NPSP, there was no centralised mechanism to ensure reliable teacher
                    payments. The CAMDM system ensures verified, on-time disbursements through
                    three-way confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Process Breakdown */}
      <section
        className="bg-gray-50 py-16"
        aria-labelledby="steps-breakdown-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="steps-breakdown-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Full Process Breakdown
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.label}
                className="bg-white p-6 flex gap-5"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B1628] text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Comparison */}
      <section
        className="bg-gray-50 py-16"
        aria-labelledby="tracks-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="tracks-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Which Track Applies to You?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            NPSP has three pathways depending on your current situation.
          </p>
          <div className="border-y border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
            {[
              {
                track: "Track A",
                title: "New Placement",
                desc: "For newly licensed teachers seeking their first structured placement in a private school.",
              },
              {
                track: "Track B1",
                title: "Formalization",
                desc: "For licensed teachers already working informally in a private school who want to formalize their engagement.",
              },
              {
                track: "Track B2",
                title: "Regularization",
                desc: "For existing teachers without a full NTC licence who want to pursue the GTLE pathway toward licensure.",
              },
            ].map((t) => (
              <div
                key={t.track}
                className="py-10 px-6 sm:px-8 lg:px-10 flex flex-col justify-start"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {t.track}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {t.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
         </div>
       </section>

      {/* Send Us a Message */}
      <section id="contact" className="bg-white py-16" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="form-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Use this form to submit your enquiry. Our support team will respond
                as soon as possible. For urgent payment issues, please use the
                Payment Flag feature inside your portal.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
