import HeroSection from "@/components/ui/HeroSection";
import StatCard from "@/components/ui/StatCard";
import FeatureCard from "@/components/ui/FeatureCard";
import stats from "@/data/stats";
import Link from "next/link";

export const metadata = {
  title: "Impact | NPSP",
  description:
    "Discover the national impact of NPSP across Ghana's education workforce — 50,000 teachers, 16,674 schools, 16 regions.",
};

const expectedImpacts = [
  {
    title: "Employment Opportunities",
    description:
      "Creating structured, formal employment for 50,000 licensed teachers across Ghana's private pre-tertiary education sector.",
  },
  {
    title: "Teacher Professionalization",
    description:
      "Elevating teaching standards through NTC licence verification, CPD requirements, and formal engagement frameworks.",
  },
  {
    title: "Private-School Staffing",
    description:
      "Helping 16,674 private schools access verified, qualified teachers to strengthen their educational delivery.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Driving compliance with registration, accreditation, and professional standards across the private school sector.",
  },
  {
    title: "Workforce Planning",
    description:
      "Building a national database of teacher placements, skills, and regional distribution to support evidence-based education policy.",
  },
  {
    title: "Fiscal Efficiency",
    description:
      "Centralizing allowance disbursement through CAMDM reduces leakage, delays, and administrative overhead in teacher compensation.",
  },
  {
    title: "Improved Education Delivery",
    description:
      "Qualified, motivated, professionally supported teachers deliver better outcomes for students in Ghana's private schools.",
  },
];

const ghanaRegions = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Northern",
  "Upper East",
  "Upper West",
  "Volta",
  "Bono",
  "Bono East",
  "Ahafo",
  "Western North",
  "Oti",
  "Savannah",
  "North East",
];

export default function ImpactPage() {
  return (
    <>
      <HeroSection
        heading="Building a Stronger Future for Ghana's Education Workforce"
        subheading="NPSP is designed to deliver measurable, lasting improvements across Ghana's private education sector — for teachers, schools, and the nation."
        backgroundVariant="green"
      />

      {/* Programme Scale */}
      <section className="bg-gray-50 py-16" aria-labelledby="scale-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="scale-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-10"
          >
            Programme Scale
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact Cards */}
      <section className="bg-white py-16" aria-labelledby="expected-impact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="expected-impact-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Expected Impact
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            The operational summary identifies these as key expected programme
            impacts across Ghana&apos;s education system.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectedImpacts.map((impact) => (
              <FeatureCard
                key={impact.title}
                title={impact.title}
                description={impact.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* National Coverage */}
      <section className="bg-gray-50 py-16" aria-labelledby="coverage-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="coverage-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            National Coverage
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            NPSP operates across all 16 regions of Ghana, ensuring no qualified
            teacher or eligible school is left behind.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {ghanaRegions.map((region) => (
                <div
                  key={region}
                  className="bg-white border border-[#006B3F]/20 rounded-lg px-3 py-2 text-center"
                >
                  <p className="text-xs font-semibold text-gray-700">{region}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#006B3F] rounded-2xl p-8 text-center text-white">
              <p className="text-5xl font-bold mb-2">16</p>
              <p className="text-green-200 font-semibold text-lg">
                Regions — 100% National Coverage
              </p>
              <p className="text-green-300 text-sm mt-2">
                Every region of Ghana is covered by the NPSP programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 24-Month Journey */}
      <section className="bg-white py-16" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="journey-heading"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              24-Month Development Journey
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              NPSP is not a permanent placement programme — it is a structured
              development journey. Teachers engage for 24 months, during which
              they build experience, accumulate CPD points, and develop their
              professional records. At the end of each cycle, teachers have clear
              transition options.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-50 rounded-2xl p-6">
              {["Register", "Verify", "Match", "Engage", "CPD", "Confirm Monthly", "Get Paid", "Transition"].map(
                (stage, i, arr) => (
                  <div key={stage} className="flex items-center gap-2">
                    <span className="bg-blue-800 text-white rounded-full px-4 py-1.5 text-xs font-semibold">
                      {stage}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-blue-300 text-xs" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Transition Possibilities */}
      <section className="bg-gray-50 py-16" aria-labelledby="transition-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="transition-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Teacher Transition Pathways
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            After completing the 24-month cycle, three clear pathways are
            available.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Permanent Private Contract",
                desc: "Transition directly into a permanent employment contract at the school where you completed your engagement.",
                color: "border-blue-500 bg-blue-50",
                badge: "Most common",
              },
              {
                title: "Public-Sector Opportunity",
                desc: "Pursue eligible opportunities in Ghana's public education sector, bringing your private-school experience with you.",
                color: "border-green-500 bg-green-50",
                badge: null,
              },
              {
                title: "Pipeline Renewal",
                desc: "Re-enter the NPSP pipeline for another engagement cycle, continuing to build experience and CPD points.",
                color: "border-yellow-500 bg-yellow-50",
                badge: null,
              },
            ].map((path) => (
              <div
                key={path.title}
                className={`rounded-xl border-t-4 ${path.color} p-6 relative`}
              >
                {path.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    {path.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-gradient-to-br from-[#006B3F] to-green-700 py-16 text-white"
        aria-labelledby="impact-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="impact-cta-heading" className="text-3xl font-bold mb-4">
            Be Part of the Impact
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Every teacher placed and every school enrolled contributes to a
            stronger, more professional education workforce for Ghana.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/for-teachers"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              For Teachers
            </Link>
            <Link
              href="/for-schools"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-900 transition-colors"
            >
              For Schools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
