import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ProcessStep from "@/components/ui/ProcessStep";
import Image from "next/image";

export default function ForSchoolsPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <HeroSection
        heading="Build a Stronger Teaching Workforce"
        backgroundVariant="green"
        backgroundImage="/images/img1.jpg"
        overlayClassName="bg-[#0B1628]/70"
        fullHeight={false}
        className="pt-[10rem] md:pt-[9rem]"
      />

      {/* ── 2. Who Can Participate ──────────────────────────────────────── */}
      <section
        aria-labelledby="who-can-participate-heading"
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                id="who-can-participate-heading"
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Who Can Participate?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/participate.jpg"
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

      {/* ── 3. What Schools Can Do ──────────────────────────────────────── */}
      <section
        aria-labelledby="what-schools-can-do-heading"
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="what-schools-can-do-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            What Schools Can Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Register School"
              description="Submit your school details, registration certificates, and accreditation documents through the NPSP platform."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Declare Vacancies"
              description="List your teaching vacancies by subject, level, and class to be matched with qualified teachers."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Upload Staff Roster"
              description="For Track B participation, submit your current teaching staff census for formalization review."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Review Candidates"
              description="Review teacher profiles matched to your declared vacancies before confirming placements."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Onboard Teachers"
              description="Complete the onboarding process for matched or formalized teachers in your school."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Complete Monthly Verification"
              description="Confirm each engaged teacher's service delivery every month through the school portal."
              className="!shadow-none !rounded-none hover:!shadow-none"
            />
            <FeatureCard
              title="Monitor Compliance"
              description="Track your school's compliance status, payment records, and programme obligations."
              className="!shadow-none !rounded-none hover:!shadow-none"
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
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            Your School&apos;s Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
              title="Maintain Compliance"
              description="Stay compliant with programme standards and NaSIA requirements."
            />
          </div>
        </div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="schools-cta-heading"
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="schools-cta-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Join the Programme?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Register your school today and start connecting with verified,
            licensed teachers across Ghana.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://excelliumgh.com/npsp/school/#/register"
              className="inline-block px-7 py-3 rounded-lg font-semibold bg-[#0B1628] text-white hover:bg-[#0B1628]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1628] focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
            >
              Register Your School
            </a>
            <Link
              href="/about#contact"
              className="inline-block px-7 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
