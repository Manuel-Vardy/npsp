import HeroSection from "@/components/ui/HeroSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ProcessStep from "@/components/ui/ProcessStep";
import Image from "next/image";

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
    title: "Build Experience",
    description:
      "Accumulate CPD points, professional experience, and build your teaching record throughout the 24-month engagement.",
  },
  {
    stepNumber: 7,
    title: "Transition",
    description:
      "After 24 months, transition to permanent employment at your school, pursue the public sector, or renew through the programme pipeline.",
  },
];

// ─── Page component ──────────────────────────────────────────────────────────

export default function ForTeachersPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        heading="Your Teaching Career. A More Structured Path Forward."
        backgroundVariant="blue"
        backgroundImage="/images/img2.jpg"
        overlayClassName="bg-[#0B1628]/70"
        fullHeight={false}
        className="pt-[10rem] md:pt-[9rem]"
      />

      {/* 2. Who Can Participate */}
      <section aria-labelledby="eligibility-heading" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
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
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-npsp-1.jpg"
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
                 className="!shadow-none !rounded-none hover:!shadow-none"
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

      {/* 5. CTA */}
      <section aria-labelledby="cta-heading" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of qualified teachers building structured, protected careers in
            Ghana's private education sector.
          </p>
          <a
            href="https://teacher.samuelboateng.dev"
            className="inline-block px-8 py-3 rounded-lg font-semibold bg-[#0B1628] text-white hover:bg-[#0B1628]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1628] focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
          >
            Register as a Teacher
          </a>
        </div>
      </section>
    </>
  );
}
