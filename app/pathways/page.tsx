import HeroSection from "@/components/ui/HeroSection";
import TrackCard from "@/components/ui/TrackCard";
import pathways from "@/data/pathways";
import Link from "next/link";

export const metadata = {
  title: "Programme Pathways | NPSP",
  description:
    "Explore the three NPSP pathways: Track A (new placement), Track B1 (formalization), and Track B2 (regularization via GTLE).",
};

const trackAccentColors: Record<string, string> = {
  A: "border-blue-600",
  B1: "border-[#006B3F]",
  B2: "border-[#CE1126]",
};

const trackBadgeBg: Record<string, string> = {
  A: "bg-blue-700",
  B1: "bg-[#006B3F]",
  B2: "bg-[#CE1126]",
};

export default function PathwaysPage() {
  return (
    <>
      <HeroSection
        heading="Three Pathways. One Stronger Teaching Workforce."
        subheading="NPSP provides a pathway for every eligible teacher — whether you are seeking your first placement, formalizing an existing engagement, or working toward full NTC licensure."
        backgroundVariant="blue"
      />

      {/* Three Track Cards */}
      <section className="bg-gray-50 py-16" aria-labelledby="pathways-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="pathways-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Programme Pathways
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the pathway that matches your current professional situation.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => (
              <TrackCard
                key={pathway.trackId}
                trackId={pathway.trackId}
                title={pathway.title}
                subtitle={pathway.subtitle}
                description={pathway.targetAudience}
                eligibilityCriteria={pathway.eligibilityCriteria}
                accentColor={trackAccentColors[pathway.trackId]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16" aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="benefits-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Key Benefits by Pathway
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => (
              <div key={pathway.trackId} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-extrabold text-white ${trackBadgeBg[pathway.trackId]}`}
                  >
                    {pathway.trackId}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm">
                    {pathway.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {pathway.keyBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway Steps */}
      <section className="bg-gray-50 py-16" aria-labelledby="steps-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="steps-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Pathway Steps
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => (
              <div key={pathway.trackId}>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-extrabold text-white ${trackBadgeBg[pathway.trackId]}`}
                  >
                    {pathway.trackId}
                  </span>
                  {pathway.subtitle}
                </h3>
                <div className="space-y-3">
                  {pathway.steps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-700 font-medium">
                        {step}
                      </span>
                      {index < pathway.steps.length - 1 && (
                        <span
                          className="text-gray-300 text-xs ml-auto"
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track B2 GTLE Callout */}
      <section className="bg-red-50 py-12" aria-labelledby="gtle-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="gtle-heading"
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Track B2 — The GTLE Pathway
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Teachers on Track B2 receive a provisional engagement identifier
              and participate in professional development while working toward
              full NTC licensure through the Ghana Teacher Licensure Examination
              (GTLE). Upon achieving licensure, they transition to full programme
              participation.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              {[
                "Declaration",
                "Provisional Identifier",
                "Professional Development",
                "GTLE Pathway",
                "Licensure",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="bg-red-100 border border-red-200 rounded-lg px-3 py-1.5 font-medium text-red-800">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-red-400" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-blue-900 py-16 text-white"
        aria-labelledby="pathways-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="pathways-cta-heading" className="text-3xl font-bold mb-4">
            Find Your Pathway
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Not sure which track applies to you? Learn more about how the full
            process works or register today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
