import HeroSection from "@/components/ui/HeroSection";
import StatCard from "@/components/ui/StatCard";
import FeatureCard from "@/components/ui/FeatureCard";
import stats from "@/data/stats";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        heading="Placing licensed teachers in Ghana's private schools, with pay you can count on."
        subheading="NPSP matches licensed teachers to verified vacancies in registered private schools, checks that the work was actually done every month, and pays teachers directly so neither side has to chase the other for a placement or a payment."
        ctaButtons={[
          { label: "For Teachers", href: "#", variant: "primary" },
          { label: "For Schools", href: "#", variant: "primary" },
          { label: "Learn About NPSP", href: "#", variant: "secondary" },
        ]}
        backgroundVariant="blue"
        backgroundImage="/images/hero-img-1.jpg"
        align="left"
        className="pb-28 md:pb-32"
      />

      {/* 2. Impact Statistics — card overlaps the hero by ~40% of its own height */}
      <section
        className="relative z-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto -translate-y-[22%] -mb-10 sm:-mb-12 bg-white px-6 py-10 sm:px-12 sm:py-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          <h2 id="stats-heading" className="text-2xl font-normal text-gray-900 text-center mb-8">
            Programme at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Challenge */}
      <section className="bg-white py-16" aria-labelledby="challenge-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="challenge-heading" className="text-3xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-600 mb-14 leading-relaxed">
              Ghana's private education sector faces a persistent structural mismatch that affects
              teachers and schools alike.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12">
            {[
              { title: "Qualified Teachers Seeking Opportunities", desc: "Thousands of licensed teachers remain unemployed despite holding valid NTC qualifications.", image: "/images/img1.jpg", tag: "Unemployment" },
              { title: "Private Schools Need Qualified Teachers", desc: "Private schools struggle to attract and retain properly licensed teaching staff.", image: "/images/img2.jpg", tag: "Staffing" },
              { title: "Informal Arrangements", desc: "Many existing teachers work under informal arrangements without proper protections or formalised contracts.", image: "/images/img3.jpg", tag: "Informality" },
              { title: "Payment Coordination Gaps", desc: "Payment and verification processes lack the coordination needed to protect teacher allowances reliably.", image: "/images/teacher.jpg", tag: "Payments" },
            ].map((item, idx) => (
              <article key={item.title} className="group relative">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" aria-hidden="true" />
                </div>
                <div className="relative mx-5 -mt-10 bg-white ring-1 ring-gray-200">
                  <span
                    className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white bg-blue-950"
                  >
                    {item.tag}
                  </span>
                  <div className="px-7 pt-9 pb-7">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-blue-950 text-white hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 transition-colors duration-200 ease-out"
            >
              Understand the Challenge
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Solution */}
      <section className="bg-white py-20" aria-labelledby="solution-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2
                id="solution-heading"
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                The Solution
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                NPSP connects teachers and schools through a structured, verified, four-stage
                process that ensures every placement is transparent, every month of work is
                confirmed, and every allowance is paid on time.
              </p>

              {/* Steps — horizontal with arrows */}
              <div className="flex flex-wrap items-start gap-2 sm:gap-3 mb-10">
                {[
                  { num: 1, label: "Register" },
                  { num: 2, label: "Match" },
                  { num: 3, label: "Verify, every month" },
                  { num: 4, label: "Get paid" },
                ].map((step, i, arr) => (
                  <div key={step.num} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1.5 min-w-0">
                      <div
                        className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-blue-950 text-sm sm:text-base font-semibold flex-shrink-0 ring-2 ring-blue-950"
                      >
                        {step.num}
                      </div>
                      <h3 className="text-xs sm:text-sm font-light text-gray-700 leading-snug text-center whitespace-nowrap">
                        {step.label}
                      </h3>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex items-center pt-2 sm:pt-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-blue-950 text-white hover:bg-blue-900 hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 transition-all duration-200 ease-out"
              >
                See How It Works
              </Link>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/solution.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. For Teachers / For Schools teasers */}
      <section className="bg-white py-16" aria-labelledby="audiences-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="audiences-heading" className="sr-only">Who NPSP Serves</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Teacher Card */}
            <div className="relative overflow-hidden min-h-[320px]">
              <Image
                src="/images/teacher.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]" aria-hidden="true" />
              <div className="relative z-10 p-8 text-white flex flex-col gap-4 h-full min-h-[320px]">
                <h2 className="text-2xl font-bold">Are You a Teacher?</h2>
                <p className="text-blue-100 leading-relaxed">
                  Find opportunities, formalize your existing employment, track your engagement,
                  confirm your monthly work and monitor your allowance payments.
                </p>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-950 transition-all duration-200 w-fit"
                >
                  Teacher Information
                </Link>
              </div>
            </div>

            {/* School Card */}
            <div className="relative overflow-hidden min-h-[320px]">
              <Image
                src="/images/img2.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-[2px]" aria-hidden="true" />
              <div className="relative z-10 p-8 text-white flex flex-col gap-4 h-full min-h-[320px]">
                <h2 className="text-2xl font-bold">Are You a School?</h2>
                <p className="text-blue-100 leading-relaxed">
                  Declare vacancies, onboard qualified teachers, manage your staff participation and
                  maintain programme compliance.
                </p>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-950 transition-all duration-200 w-fit"
                >
                  School Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Where the Money Goes */}
      <section className="bg-gray-50 py-16" aria-labelledby="payment-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-12">
            <h2 id="payment-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Where the money goes
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              One fixed monthly remittance per teacher, split the same way every time. Schools pay
              into a central escrow account; nothing is disbursed until the monthly three-way
              verification clears.
            </p>
          </div>

          <div className="relative">
            {/* Top horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-300" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-3 py-6 sm:py-8">
              <div className="relative px-5 sm:px-7 py-5 sm:py-6 border-l border-r border-gray-300 md:border-l-0">
                <p className="text-[#007A7A] font-semibold text-sm sm:text-base mb-2">School pays, monthly</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                  GH₵1,500
                </p>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  per placed or onboarded teacher
                </p>
              </div>
              <div className="relative px-5 sm:px-7 py-5 sm:py-6 border-l border-r border-gray-300">
                <p className="text-[#007A7A] font-semibold text-sm sm:text-base mb-2">Teacher receives</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                  GH₵1,300
                </p>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  base allowance, direct to bank or mobile money
                </p>
              </div>
              <div className="relative px-5 sm:px-7 py-5 sm:py-6 border-l border-r border-gray-300 md:border-r-0">
                <p className="text-[#007A7A] font-semibold text-sm sm:text-base mb-2">Coordination fee</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                  GH₵200
                </p>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  funds PMU operations and monitoring — never deducted from the teacher&apos;s allowance
                </p>
              </div>
            </div>

            {/* Bottom horizontal line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300" aria-hidden="true" />
          </div>

          <div className="mt-10 text-left">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-blue-950 text-white hover:bg-blue-900 hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 transition-all duration-200 ease-out"
            >
              Understand Payments
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Who's Behind This */}
      <section className="bg-gray-50 py-16" aria-labelledby="impact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-12">
            <h2 id="impact-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Who&apos;s behind this
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              NPSP is a public-private partnership governed by a National Steering Committee, run
              day-to-day by a Programme Management Unit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "/images/MOE.png",
              "/images/NTC.png",
              "/images/NaSIA.png",
              "/images/GNACOPS.png",
              "/images/GNAPS.png",
              "/images/GES.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-8 md:p-10 flex items-center justify-center min-h-[140px] sm:min-h-[180px]"
              >
                <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-gray-50 py-20" aria-labelledby="final-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="final-cta-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Be Part of the Next Chapter of Ghana&apos;s Private Education Workforce
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you are a licensed teacher seeking opportunities or a private school ready to
            strengthen your team, NPSP has a pathway for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-blue-950 text-white hover:bg-blue-900 hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 transition-all duration-200 ease-out"
            >
              Register
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 transition-all duration-200 ease-out"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
