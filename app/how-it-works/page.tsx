"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import HeroSection from "@/components/ui/HeroSection";
import Link from "next/link";

const processSteps: Array<{
  label: string;
  title: string;
  description: string;
  detail: ReactNode;
}> = [
  {
    label: "Register",
    title: "Step 1 — Registration",
    description:
      "Both teachers and schools begin by registering on the NPSP platform.",
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
      </div>
    ),
  },
  {
    label: "Verify",
    title: "Step 2 — Verification",
    description:
      "All credentials are verified against official records before any placement proceeds.",
    detail: (
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Teacher Verification
          </h4>
          <p className="text-sm text-gray-600">
            The PMU verifies teacher licensing information against NTC records
            to confirm valid professional standing.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            School Verification
          </h4>
          <p className="text-sm text-gray-600">
            School registration and compliance information is verified against
            NaSIA and GES records to confirm eligibility.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Match / Formalize",
    title: "Step 3 — Matching & Formalization",
    description:
      "Verified teachers and schools are matched, or existing arrangements are formalized.",
    detail: (
      <div className="space-y-3">
        <div className="bg-blue-50 rounded-lg p-3">
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Track A — New Licensed Teacher Placement
          </h4>
          <p className="text-sm text-gray-600">
            The PMU matches verified teachers to verified school vacancies based
            on qualification, subject specialisation, and location.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <h4 className="font-semibold text-green-900 text-sm mb-1">
            Track B — Existing Staff Formalization &amp; Regularization
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
    label: "Monthly Confirmation",
    title: "Step 4 — Monthly Verification",
    description:
      "Every month, all three parties confirm the teacher's service delivery.",
    detail: (
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
    ),
  },
  {
    label: "3-Way Verification",
    title: "Step 5 — Payment Authorization",
    description:
      "After all verifications pass, the PMU Finance Desk authorizes disbursement.",
    detail: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          The school remits GH₵1,500 per engaged teacher to the CAMDM account.
          Once all three verifications are confirmed complete, the PMU Finance
          Desk approves the disbursement.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "GH₵1,500 School Remits",
            "3-Way Verification",
            "PMU Authorizes",
          ].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                {step}
              </span>
              {i < arr.length - 1 && (
                <span className="text-blue-400" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Authorize",
    title: "Step 6 — Disbursement",
    description:
      "The teacher receives their GH₵1,300 monthly allowance through their registered payment channel.",
    detail: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">
          Teachers receive their allowance through validated payment channels:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {["Bank Transfer", "MTN MoMo", "Telecel Cash", "AT Money"].map(
            (channel) => (
              <div
                key={channel}
                className="bg-green-50 border border-green-100 rounded-lg p-2 text-center text-xs font-semibold text-green-800"
              >
                {channel}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    label: "Pay",
    title: "Step 7 — Continue or Transition",
    description:
      "After receiving payment, teachers continue their engagement or begin transitioning.",
    detail: (
      <div className="space-y-2">
        {[
          "Continue engagement for remainder of 24-month cycle",
          "Transition to permanent private employment",
          "Pursue eligible public-sector opportunities",
          "Exit through the structured process",
        ].map((option) => (
          <div key={option} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-blue-600 mt-0.5" aria-hidden="true">
              →
            </span>
            {option}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <HeroSection
        heading="From Registration to Opportunity"
        subheading="NPSP connects teachers and schools through a structured process of registration, verification, placement, monthly confirmation and centralized payment."
        backgroundVariant="blue"
      />

      {/* Interactive Process Diagram */}
      <section className="bg-white py-16" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="process-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            The NPSP Process
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Select any stage below to explore what happens at each step of the
            process.
          </p>

          {/* Step pills */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-8"
            role="tablist"
            aria-label="Process steps"
          >
            {processSteps.map((step, index) => (
              <button
                key={step.label}
                role="tab"
                aria-selected={activeStep === index}
                aria-controls={`step-panel-${index}`}
                id={`step-tab-${index}`}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeStep === index
                    ? "bg-blue-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            id={`step-panel-${activeStep}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${activeStep}`}
            className="max-w-2xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {activeStep + 1}
              </span>
              <h3 className="text-lg font-bold text-blue-900">
                {processSteps[activeStep].title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {processSteps[activeStep].description}
            </p>
            {processSteps[activeStep].detail}
          </div>
        </div>
      </section>

      {/* Full 7-step breakdown */}
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
                className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-sm"
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
        className="bg-white py-16"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                track: "Track A",
                title: "New Placement",
                desc: "For newly licensed teachers seeking their first structured placement in a private school.",
                color: "border-blue-600 bg-blue-50",
              },
              {
                track: "Track B1",
                title: "Formalization",
                desc: "For licensed teachers already working informally in a private school who want to formalize their engagement.",
                color: "border-green-600 bg-green-50",
              },
              {
                track: "Track B2",
                title: "Regularization",
                desc: "For existing teachers without a full NTC licence who want to pursue the GTLE pathway toward licensure.",
                color: "border-red-600 bg-red-50",
              },
            ].map((t) => (
              <div
                key={t.track}
                className={`rounded-xl border-t-4 ${t.color} p-6`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  {t.track}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              See Full Pathway Details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-blue-900 py-16 text-white"
        aria-labelledby="hiw-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="hiw-cta-heading" className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Whether you are a teacher or a school, NPSP has a structured path
            for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              For Teachers
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              For Schools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
