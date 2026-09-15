import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About NPSP", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "For Teachers", href: "#" },
  { label: "For Schools", href: "#" },
  { label: "Payments & Protection", href: "#" },
  { label: "Impact", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1628] text-blue-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Programme attribution */}
          <div>
            <p className="text-[#FCD116] font-bold text-lg mb-2">NPSP</p>
            <p className="text-sm font-medium text-white leading-snug mb-3">
              National Private Teacher<br />Engagement Programme
            </p>
            <p className="text-sm text-blue-300 leading-relaxed">
              A national Public-Private Partnership initiative connecting licensed teachers with
              opportunities in Ghana&apos;s private pre-tertiary education sector.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-400">
          <p>
            &copy; {currentYear} National Private Teacher Engagement Programme. All rights reserved.
          </p>
          <p>
            A Ministry of Education initiative &mdash; Republic of Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
}
