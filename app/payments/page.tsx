import HeroSection from "@/components/ui/HeroSection";
import paymentSteps from "@/data/paymentSteps";
import Link from "next/link";

export const metadata = {
  title: "Payments & Protection | NPSP",
  description:
    "Learn how NPSP's CAMDM mechanism ensures transparent, protected teacher allowance payments every month.",
};

export default function PaymentsPage() {
  return (
    <>
      <HeroSection
        heading="A More Transparent Path to Teacher Payments"
        subheading="NPSP's Centralized Allowance Management and Disbursement Mechanism (CAMDM) ensures every teacher allowance is collected, verified, and disbursed with full transparency."
        backgroundVariant="blue"
      />

      {/* CAMDM Explanation */}
      <section className="bg-white py-16" aria-labelledby="camdm-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="camdm-heading"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              CAMDM
            </h2>
            <p className="text-xl text-blue-800 font-semibold mb-6">
              Centralized Allowance Management and Disbursement Mechanism
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              CAMDM is the payment backbone of NPSP. Every month, schools remit
              funds to the CAMDM account. The funds remain held until all three
              verifications are completed — then allowances are disbursed directly
              to teachers through their registered payment channels.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This mechanism eliminates the risk of schools withholding, delaying,
              or misdirecting teacher payments — a common problem in informal
              arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Payment Cycle */}
      <section className="bg-gray-50 py-16" aria-labelledby="cycle-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="cycle-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Monthly Payment Cycle
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Every month follows the same transparent sequence from school
            remittance to teacher payment.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {paymentSteps.map((step, index) => {
              const badgeClass =
                index < 4
                  ? "bg-blue-100 text-blue-800"
                  : index === 4
                  ? "bg-yellow-100 text-yellow-800"
                  : index === 5
                  ? "bg-orange-100 text-orange-800"
                  : "bg-green-100 text-green-800";
              return (
                <div
                  key={step.stepNumber}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${badgeClass}`}
                    aria-hidden="true"
                  >
                    {step.stepNumber}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {step.label}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Breakdown */}
      <section
        className="bg-blue-900 py-16 text-white"
        aria-labelledby="breakdown-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="breakdown-heading"
            className="text-3xl font-bold text-center mb-10"
          >
            Payment Breakdown
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-800 rounded-2xl p-8 border border-blue-700 text-center mb-6">
              <p className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-2">
                School Monthly Remittance
              </p>
              <p className="text-5xl font-bold text-[#FCD116] mb-2">GH₵1,500</p>
              <p className="text-blue-300 text-sm">
                per engaged teacher per month
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex-1 h-px bg-blue-700" />
              <span className="text-blue-400 text-sm font-medium px-2">
                disbursed as
              </span>
              <div className="flex-1 h-px bg-blue-700" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-900/40 border border-green-600 rounded-xl p-6 text-center">
                <p className="text-green-300 text-sm font-medium uppercase tracking-wide mb-2">
                  Teacher Allowance
                </p>
                <p className="text-4xl font-bold text-white mb-1">GH₵1,300</p>
                <p className="text-green-300 text-xs">Paid directly to teacher</p>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-600 rounded-xl p-6 text-center">
                <p className="text-yellow-300 text-sm font-medium uppercase tracking-wide mb-2">
                  Admin &amp; Coordination
                </p>
                <p className="text-4xl font-bold text-white mb-1">GH₵200</p>
                <p className="text-yellow-300 text-xs">Programme operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Channels */}
      <section className="bg-white py-16" aria-labelledby="channels-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="channels-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Payment Channels
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Teachers receive their allowance through any of these validated
            channels.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Bank Transfer", icon: "🏦", desc: "Any registered Ghanaian bank account" },
              { name: "MTN MoMo", icon: "📱", desc: "MTN Mobile Money" },
              { name: "Telecel Cash", icon: "📲", desc: "Telecel Cash mobile money" },
              { name: "AT Money", icon: "💳", desc: "AirtelTigo Money" },
            ].map((ch) => (
              <div
                key={ch.name}
                className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center"
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {ch.icon}
                </div>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {ch.name}
                </p>
                <p className="text-xs text-gray-500">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Protection */}
      <section className="bg-gray-50 py-16" aria-labelledby="protection-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="protection-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Payment Protection
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Teachers can raise a formal payment flag for any of these issues
            through the platform or via USSD.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Delayed payments",
              "Missing payments",
              "Partial payments",
              "Unauthorized deductions",
              "Delivery failures",
            ].map((issue) => (
              <div
                key={issue}
                className="bg-white rounded-xl border border-red-100 p-5 flex items-start gap-3"
              >
                <span
                  className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-red-400 mt-1.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{issue}</p>
                  <p className="text-xs text-red-700 mt-1 font-medium">
                    → Raise a Payment Flag
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 48-Hour Cure Process */}
      <section className="bg-white py-16" aria-labelledby="cure-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="cure-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            48-Hour Cure Process
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            When a payment flag is raised, the programme follows a structured
            resolution process with a 48-hour cure notice.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              {[
                "Teacher Raises Flag",
                "Ticket Created",
                "School Notified",
                "PMU Finance Desk Reviews",
                "Resolution / Compliance Action",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                    <p className="text-xs font-semibold text-blue-900">{step}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-blue-400 font-bold" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 text-sm leading-relaxed">
                The documented process includes a{" "}
                <strong className="text-blue-800">48-hour cure notice</strong>{" "}
                issued to the school for relevant payment flags, providing a
                structured, time-bound resolution mechanism that protects teacher
                rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-blue-900 py-16 text-white"
        aria-labelledby="pay-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="pay-cta-heading" className="text-3xl font-bold mb-4">
            Protected Payments for Every Teacher
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            NPSP&apos;s CAMDM mechanism ensures your allowance reaches you —
            every month, without exception.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/for-teachers"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              For Teachers
            </Link>
            <Link
              href="/about#contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Payment Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
