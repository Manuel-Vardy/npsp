import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ProcessStep from "@/components/ui/ProcessStep";

export const metadata = {
  title: "For Teachers | NPSP",
  description:
    "Discover how NPSP creates structured teaching opportunities for licensed teachers in Ghana's private pre-tertiary education sector.",
};

// ─── Static data ────────────────────────────────────────────────────────────

const eligibilityCriteria = [
  "Recognised teaching qualification from an accredited institution",
  "Valid NTC (National Teaching Council) professional licence",
  "Good professional standing with the NTC",
  "Willingness to participate in eligible private schools",
  "Participation in CPD (Continuing Professional Development) activities",
];

const teacherBenefits = [
  {
    title: "Teaching Opportunities",
    description:
      "Structured placement in a registered private school matched to your qualifications and location preferences.",
  },
  {
    title: "Structured Engagement",
    description:
      "A formal engagement framework with defined terms, obligations, and protections for teachers throughout the programme.",
  },
  {
    title: "Payment Visibility",
    description:
      "Track your monthly allowance status through the CAMDM platform in real time — no more uncertainty about when you will be paid.",
  },
  {
    title: "Professional Development",
    description:
      "Access to CPD activities that contribute to your NTC professional standing and help advance your teaching career.",
  },
  {
    title: "Payment Protection",
    description:
      "A formal payment flagging mechanism ensures your allowance is protected, with a 48-hour cure process for any issues raised.",
  },
  {
    title: "Certificate of Service",
    description:
      "Receive an official certificate upon programme completion recognising your service and commitment to Ghana's education sector.",
  },
  {
    title: "CPD Transcript",
    description:
      "A professional development transcript documenting your CPD participation during the engagement for your permanent records.",
  },
];

const journeySteps = [
  {
    stepNumber: 1,
    title: "Register",
    description:
      "Create your profile with your NTC licence details and personal information on the NPSP platform.",
  },
  {
    stepNumber: 2,
    title: "Verify Licence",
    description:
      "Your NTC licence is verified against official records to confirm your eligibility for the programme.",
  },
  {
    stepNumber: 3,
    title: "Create Profile",
    description:
      "Complete your teaching profile with subject specialisation, education level, and location preferences.",
  },
  {
    stepNumber: 4,
    title: "Get Matched / Confirm Employment",
    description:
      "Receive a placement match at a participating school (Track A) or confirm your existing employment arrangement (Track B).",
  },
  {
    stepNumber: 5,
    title: "Start Engagement",
    description:
      "Begin your structured engagement at the matched school under the formal NPSP framework.",
  },
  {
    stepNumber: 6,
    title: "Confirm Monthly Work",
    description:
      "Submit your monthly confirmation each month via the platform to trigger the payment verification process.",
  },
  {
    stepNumber: 7,
    title: "Receive Allowance",
    description:
      "Receive your GH₵1,300 monthly allowance through your chosen payment channel — bank transfer, MTN MoMo, Telecel Cash, or AT Money.",
  },
  {
    stepNumber: 8,
    title: "Build Experience",
    description:
      "Accumulate CPD points, professional experience, and build your teaching record throughout the 24-month engagement.",
  },
  {
    stepNumber: 9,
    title: "Transition",
    description:
      "After 24 months, transition to permanent employment at your school, pursue the public sector, or renew through the programme pipeline.",
  },
];

const paymentFlagTypes = [
  { issue: "Delayed?", action: "Raise a Payment Flag" },
  { issue: "Partial?", action: "Raise a Payment Flag" },
  { issue: "Missing?", action: "Raise a Payment Flag" },
  { issue: "Unauthorized deduction?", action: "Raise a Payment Flag" },
  { issue: "Bank/MoMo failure?", action: "Raise a Payment Flag" },
];

// ─── Page component ──────────────────────────────────────────────────────────

export default function ForTeachersPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        heading="Your Teaching Career. A More Structured Path Forward."
        subheading="NPSP creates structured opportunities for licensed teachers in Ghana's private pre-tertiary education sector, with verified placements, protected payments, and professional development."
        ctaButtons={[
          { label: "Register as a Teacher", href: "#", variant: "primary" },
        ]}
        backgroundVariant="blue"
      />

      {/* 2. Who Can Participate */}
      <section aria-labelledby="eligibility-heading" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="eligibility-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              Who Can Participate?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              NPSP is open to qualified teachers who meet the following criteria. The
              eligibility requirements are specified in the operational framework.
            </p>

            <ul className="space-y-4" role="list">
              {eligibilityCriteria.map((criterion) => (
                <li key={criterion} className="flex items-start gap-3">
                  {/* Green checkmark */}
                  <span
                    className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#006B3F] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{criterion}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-500 italic">
              Note: The eligibility requirements are specified in the operational framework.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Teachers Get */}
      <section aria-labelledby="benefits-heading" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="benefits-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            What Teachers Get
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherBenefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Teacher Journey */}
      <section aria-labelledby="journey-heading" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="journey-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            Your Journey with NPSP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {journeySteps.map((step) => (
              <ProcessStep
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Teacher Portal Preview */}
      <section aria-labelledby="portal-heading" className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="portal-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
          >
            Teacher Portal Preview
          </h2>
          <p className="text-blue-200 text-center mb-10 max-w-2xl mx-auto">
            The NPSP teacher portal gives you a clear view of your placement, payment status,
            and professional development progress — all in one place.
          </p>

          {/* Dashboard mockup */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-950 rounded-2xl border border-blue-700 p-6 shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-800">
                <div>
                  <p className="text-white font-semibold text-lg">Ama Mensah</p>
                  <p className="text-blue-300 text-sm">NTC Licence: Active</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-900/60 border border-green-600 text-green-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
                  Profile Verified
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    Placement
                  </p>
                  <p className="text-white font-semibold text-sm">Confirmed</p>
                  <p className="text-blue-300 text-xs mt-0.5">Track A · Accra</p>
                </div>

                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    Last Payment
                  </p>
                  <p className="text-white font-semibold text-sm">GH₵1,300</p>
                  <p className="text-green-400 text-xs mt-0.5 font-medium">Paid ✓</p>
                </div>

                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    CPD Points
                  </p>
                  <p className="text-white font-semibold text-sm">12</p>
                  <p className="text-blue-300 text-xs mt-0.5">This cycle</p>
                </div>

                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    Monthly Confirmation
                  </p>
                  <p className="text-green-400 font-semibold text-sm">✓ Submitted</p>
                </div>

                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    Engagement
                  </p>
                  <p className="text-white font-semibold text-sm">Month 3 of 24</p>
                  <div className="mt-2 w-full bg-blue-800 rounded-full h-1.5" aria-hidden="true">
                    <div
                      className="bg-[#FCD116] h-1.5 rounded-full"
                      style={{ width: "12.5%" }}
                    />
                  </div>
                </div>

                <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-800">
                  <p className="text-blue-400 text-xs font-medium uppercase tracking-wide mb-1">
                    Payment Flags
                  </p>
                  <p className="text-green-400 font-semibold text-sm">None active</p>
                </div>
              </div>

              {/* Footer notice */}
              <div className="bg-blue-800/40 rounded-lg px-4 py-3 border border-blue-700">
                <p className="text-blue-300 text-xs text-center">
                  Powered by <span className="text-white font-semibold">CAMDM</span> · Central
                  Account Management and Disbursement Mechanism
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Payment Problems */}
      <section aria-labelledby="payment-problems-heading" className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="payment-problems-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              Payment Problems?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              NPSP includes a formal payment flagging mechanism to protect your allowance.
              If you experience any of the following issues, you can raise a payment flag
              directly through the platform or via USSD.
            </p>

            {/* Flag types */}
            <ul className="space-y-3 mb-8" role="list">
              {paymentFlagTypes.map(({ issue, action }) => (
                <li
                  key={issue}
                  className="flex items-center justify-between bg-white rounded-xl border border-red-100 px-5 py-4 shadow-sm"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-gray-800">{issue}</span>
                  </span>
                  <span className="text-sm font-semibold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                    {action}
                  </span>
                </li>
              ))}
            </ul>

            {/* Resolution process */}
            <div className="bg-white rounded-xl border border-red-200 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                How the 48-Hour Process Works
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                When you raise a flag, a ticket is created, the school is notified, and the
                PMU Finance Desk reviews the case within{" "}
                <strong className="text-red-700">48 hours</strong>. You will receive a status
                update at each stage of the review process.
              </p>

              {/* Visual step indicators */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium">
                {["You Raise Flag", "Ticket Created", "School Notified", "PMU Reviews (48 h)", "Resolved"].map(
                  (label, index, arr) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-800 px-2.5 py-1 rounded-full border border-red-200">
                        {label}
                      </span>
                      {index < arr.length - 1 && (
                        <span className="text-gray-400" aria-hidden="true">
                          →
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section aria-labelledby="cta-heading" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of qualified teachers building structured, protected careers in
            Ghana's private education sector.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 transition-colors"
          >
            Register as a Teacher
          </Link>
        </div>
      </section>
    </>
  );
}
