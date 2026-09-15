import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ProcessStep from "@/components/ui/ProcessStep";

export default function ForSchoolsPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <HeroSection
        heading="Build a Stronger Teaching Workforce"
        subheading="NPSP connects your school with verified, licensed teachers through a structured engagement framework with centralized payment assurance."
        ctaButtons={[
          { label: "Register Your School", href: "#", variant: "primary" },
        ]}
        backgroundVariant="green"
      />

      {/* ── 2. Who Can Participate ──────────────────────────────────────── */}
      <section
        aria-labelledby="who-can-participate-heading"
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="who-can-participate-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Who Can Participate?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            To join NPSP, your school must meet all of the following criteria:
          </p>

          <ul className="space-y-4 max-w-2xl" role="list">
            {[
              "Legally established",
              "Registered with the relevant government authority",
              "Approved by NaSIA or the relevant approving body",
              "Compliant with applicable educational standards",
              "Able to demonstrate eligible teaching vacancies",
              "Able to provide a safe and suitable teaching environment",
              "Prepared to participate in the programme framework and meet financial obligations",
            ].map((criterion) => (
              <li key={criterion} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#006B3F] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7l3.5 3.5L12 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. What Schools Can Do ──────────────────────────────────────── */}
      <section
        aria-labelledby="what-schools-can-do-heading"
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="what-schools-can-do-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
          >
            What Schools Can Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Register School"
              description="Submit your school details, registration certificates, and accreditation documents through the NPSP platform."
            />
            <FeatureCard
              title="Declare Vacancies"
              description="List your teaching vacancies by subject, level, and class to be matched with qualified teachers."
            />
            <FeatureCard
              title="Upload Staff Roster"
              description="For Track B participation, submit your current teaching staff census for formalization review."
            />
            <FeatureCard
              title="Review Candidates"
              description="Review teacher profiles matched to your declared vacancies before confirming placements."
            />
            <FeatureCard
              title="Onboard Teachers"
              description="Complete the onboarding process for matched or formalized teachers in your school."
            />
            <FeatureCard
              title="Complete Monthly Verification"
              description="Confirm each engaged teacher's service delivery every month through the school portal."
            />
            <FeatureCard
              title="Manage Remittances"
              description="Submit monthly remittances of GH₵1,500 per engaged teacher to the CAMDM account."
            />
            <FeatureCard
              title="Monitor Compliance"
              description="Track your school's compliance status, payment records, and programme obligations."
            />
          </div>
        </div>
      </section>

      {/* ── 4. School Journey ──────────────────────────────────────────── */}
      <section
        aria-labelledby="school-journey-heading"
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="school-journey-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
          >
            Your School&apos;s Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl">
            <ProcessStep
              stepNumber={1}
              title="Register"
              description="Submit school registration documents and create your school profile."
            />
            <ProcessStep
              stepNumber={2}
              title="Verify"
              description="Your school's registration and accreditation are verified against official records."
            />
            <ProcessStep
              stepNumber={3}
              title="Declare Vacancies / Staff"
              description="Declare teaching vacancies (Track A) or submit staff census (Track B)."
            />
            <ProcessStep
              stepNumber={4}
              title="Receive Matches"
              description="Receive matched teacher profiles or confirm existing staff formalization."
            />
            <ProcessStep
              stepNumber={5}
              title="Accept Teachers"
              description="Confirm placements and complete teacher onboarding."
            />
            <ProcessStep
              stepNumber={6}
              title="Complete Monthly Verification"
              description="Submit monthly confirmation of each teacher's service."
            />
            <ProcessStep
              stepNumber={7}
              title="Remit Programme Funds"
              description="Transfer GH₵1,500 per teacher to the CAMDM account each month."
            />
            <ProcessStep
              stepNumber={8}
              title="Maintain Compliance"
              description="Stay compliant with programme standards and NaSIA requirements."
            />
          </div>
        </div>
      </section>

      {/* ── 5. School Financial Commitment ─────────────────────────────── */}
      <section
        aria-labelledby="financial-commitment-heading"
        className="bg-blue-900 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2
            id="financial-commitment-heading"
            className="text-2xl sm:text-3xl font-bold mb-10 text-center"
          >
            School Financial Commitment
          </h2>

          {/* Total amount callout */}
          <div className="flex flex-col items-center mb-10">
            <p className="text-5xl sm:text-6xl font-bold text-[#FCD116] mb-2">
              GH₵1,500
            </p>
            <p className="text-lg text-white/80 tracking-wide">
              per Teacher per Month
            </p>
            <p className="text-sm text-white/60 mt-1">
              Total school remittance
            </p>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
            <div className="bg-blue-800 rounded-xl p-6 text-center border border-blue-700">
              <p className="text-3xl font-bold text-white mb-1">GH₵1,300</p>
              <p className="text-sm text-white/80">Teacher Allowance</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 text-center border border-blue-700">
              <p className="text-3xl font-bold text-white mb-1">GH₵200</p>
              <p className="text-sm text-white/80">
                Administrative &amp; Coordination Charge
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-start gap-3 bg-blue-800/50 rounded-lg px-5 py-4 border border-blue-700">
              <span className="flex-shrink-0 mt-0.5 text-[#FCD116]" aria-hidden="true">
                ℹ
              </span>
              <p className="text-sm text-white/90 leading-relaxed">
                Funds are held in the CAMDM account and only disbursed after
                three-way verification is complete.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-blue-800/50 rounded-lg px-5 py-4 border border-blue-700">
              <span className="flex-shrink-0 mt-0.5 text-[#FCD116]" aria-hidden="true">
                📌
              </span>
              <p className="text-sm text-white/90 leading-relaxed">
                For schools with 10 NPSP teachers:{" "}
                <strong className="text-white">GH₵15,000/month</strong> total
                remittance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. School Dashboard Preview ────────────────────────────────── */}
      <section
        aria-labelledby="dashboard-preview-heading"
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="dashboard-preview-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
          >
            School Dashboard Preview
          </h2>

          {/* Dashboard mockup */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* Title bar */}
            <div className="bg-[#006B3F] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold"
                  aria-hidden="true"
                >
                  S
                </div>
                <span className="text-white font-semibold text-sm">
                  School Admin Dashboard
                </span>
              </div>
              <span className="text-white/70 text-xs">NPSP Portal</span>
            </div>

            {/* Stat tiles */}
            <div className="bg-white grid grid-cols-2 sm:grid-cols-3 gap-px border-b border-gray-100">
              {[
                {
                  label: "Total NPSP Teachers",
                  value: "8",
                  colour: "text-[#006B3F]",
                },
                {
                  label: "Vacancies Declared",
                  value: "3",
                  colour: "text-blue-700",
                },
                {
                  label: "Staff Roster",
                  value: "Uploaded ✓",
                  colour: "text-[#006B3F]",
                },
                {
                  label: "Payment Status",
                  value: "Month 3 — GH₵12,000 Remitted",
                  colour: "text-gray-800",
                  wide: true,
                },
                {
                  label: "Compliance Clearance",
                  value: "✓ Cleared",
                  colour: "text-[#006B3F]",
                },
              ].map((tile) => (
                <div
                  key={tile.label}
                  className={`bg-white px-5 py-4 ${
                    tile.wide ? "col-span-2 sm:col-span-2" : ""
                  }`}
                >
                  <p className="text-xs text-gray-500 mb-1">{tile.label}</p>
                  <p className={`text-sm font-semibold ${tile.colour} leading-snug`}>
                    {tile.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Alerts row */}
            <div className="bg-white px-5 py-4 flex flex-col sm:flex-row gap-3 border-b border-gray-100">
              <div className="flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-sm">
                <span className="text-amber-600 font-semibold" aria-hidden="true">
                  ⚠
                </span>
                <span className="text-amber-800">
                  <span className="font-semibold">Verification Tasks:</span>{" "}
                  2 pending
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-4 py-2 text-sm">
                <span className="text-gray-500" aria-hidden="true">🔔</span>
                <span className="text-gray-700">
                  <span className="font-semibold">Notices:</span> 0 new notices
                </span>
              </div>
            </div>

            {/* Footer bar */}
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
              <span className="text-xs text-gray-400">
                Last updated: today
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#006B3F] font-medium">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-[#006B3F]"
                  aria-hidden="true"
                />
                Active
              </span>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            The school portal lets administrators manage teachers, verify service
            delivery, and track remittances — all in one place.
          </p>
        </div>
      </section>

      {/* ── 7. CTA ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="schools-cta-heading"
        className="bg-gradient-to-br from-[#006B3F] via-green-700 to-green-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2
            id="schools-cta-heading"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Ready to Join the Programme?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Register your school today and start connecting with verified,
            licensed teachers across Ghana.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-block px-7 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-700 transition-colors"
            >
              Register Your School
            </Link>
            <Link
              href="#"
              className="inline-block px-7 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
