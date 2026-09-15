import HeroSection from "@/components/ui/HeroSection";
import Link from "next/link";

export const metadata = {
  title: "Access & Technology | NPSP",
  description:
    "Learn how to access NPSP via Web Portal, Progressive Web App, or USSD — wherever you are in Ghana.",
};

export default function AccessPage() {
  return (
    <>
      <HeroSection
        heading="Access NPSP Wherever You Are"
        subheading="NPSP is designed to be accessible to every teacher and school across Ghana's 16 regions — regardless of device or connectivity."
        backgroundVariant="dark"
      />

      {/* Three Access Channels */}
      <section className="bg-white py-16" aria-labelledby="channels-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="channels-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Three Ways to Access NPSP
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you have a computer, a smartphone, or a basic feature phone,
            there is a way for you to access NPSP.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Web Portal */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Web Portal
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Full-featured access via any modern web browser on a computer
                  or tablet. Designed for schools, PMU staff, and regulators who
                  need complete dashboard access.
                </p>
                <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-2">
                  Best for:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {["Schools (admin tasks)", "PMU staff", "Regulators", "Teachers with reliable internet"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-blue-500" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Progressive Web App */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-xl bg-[#006B3F] flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Progressive Web App
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Install the NPSP app on your smartphone without going through
                  an app store. Works even when connectivity is intermittent —
                  ideal for teachers in areas with variable signal.
                </p>
                <p className="text-xs font-semibold text-green-800 uppercase tracking-wide mb-2">
                  Best for:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    "Teachers with smartphones",
                    "Low-connectivity areas",
                    "On-the-go access",
                    "Offline-capable features",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-600" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* USSD */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8 flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-xl bg-[#CE1126] flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">USSD</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Access key NPSP functions from any mobile phone — including
                  basic feature phones — with no internet required. Simply dial
                  the NPSP USSD code.
                </p>
                <p className="text-xs font-semibold text-yellow-800 uppercase tracking-wide mb-2">
                  Best for:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    "No internet required",
                    "Basic feature phones",
                    "Remote areas",
                    "Quick payment checks",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-yellow-600" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USSD Interaction Visual */}
      <section className="bg-gray-900 py-16" aria-labelledby="ussd-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="ussd-heading"
            className="text-3xl font-bold text-white text-center mb-4"
          >
            How USSD Works
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            USSD lets any teacher check their payment status or raise a flag
            from any mobile phone — no data connection needed.
          </p>

          {/* Phone mockup with USSD flow */}
          <div className="max-w-xs mx-auto mb-10">
            <div className="bg-gray-800 rounded-3xl p-4 border border-gray-700 shadow-2xl">
              <div className="bg-black rounded-2xl p-4 font-mono text-green-400 text-xs space-y-2 min-h-48">
                <p className="text-gray-500 text-xs">Dial: *NPSP#</p>
                <p className="text-green-300">Welcome to NPSP</p>
                <p className="text-gray-400">─────────────────</p>
                <p>1. Check Payment Status</p>
                <p>2. Flag Payment Issue</p>
                <p>3. View Engagement Info</p>
                <p>4. Exit</p>
                <p className="text-gray-400">─────────────────</p>
                <p className="text-yellow-400">Enter selection: _</p>
              </div>
            </div>
          </div>

          {/* USSD flow steps */}
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto">
            {[
              { step: "Dial", desc: "Dial *NPSP# from any phone" },
              { step: "Check Payment", desc: "Select option to view payment" },
              { step: "Flag Issue", desc: "Raise a payment flag if needed" },
              { step: "Receive Status", desc: "Get instant status confirmation" },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="bg-yellow-400 text-gray-900 rounded-xl px-4 py-2 font-bold text-sm mb-1">
                    {item.step}
                  </div>
                  <p className="text-gray-400 text-xs max-w-24">{item.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gray-600 text-xl" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Data Protection */}
      <section className="bg-white py-16" aria-labelledby="security-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="security-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Security &amp; Data Protection
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            NPSP takes the security of teacher and school data seriously at
            every level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Role-Based Access",
                desc: "Each user type — teacher, school, PMU, regulator — has access only to the data and functions relevant to their role.",
                icon: "🔐",
              },
              {
                title: "Personal Information Protection",
                desc: "Teacher personal details, contact information, and identification data are stored securely and accessed only by authorised personnel.",
                icon: "👤",
              },
              {
                title: "Financial Information Security",
                desc: "Bank account details, mobile money numbers, and payment records are encrypted and protected against unauthorised access.",
                icon: "💰",
              },
              {
                title: "Licensing Data Integrity",
                desc: "NTC licence information is verified against official records and protected against tampering or falsification.",
                icon: "📜",
              },
              {
                title: "Full Auditability",
                desc: "All platform actions — verifications, payments, flag resolutions — are logged with timestamps for full audit trails.",
                icon: "📋",
              },
              {
                title: "Secure Institutional Access",
                desc: "School and government accounts require verified institutional credentials and are subject to additional access controls.",
                icon: "🏛️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6 flex flex-col gap-3"
              >
                <div className="text-3xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-blue-900 py-16 text-white"
        aria-labelledby="access-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="access-cta-heading" className="text-3xl font-bold mb-4">
            Ready to Connect?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Choose your access method and join the programme today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#FCD116] text-blue-900 hover:bg-yellow-300 transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
