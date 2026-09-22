"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About NPSP", href: "/about" },
  { label: "For Teachers", href: "/for-teachers" },
  { label: "For Schools", href: "/for-schools" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#0B1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
            NPSP-National Private School Platform
          </p>
        </div>
      </div>
      <div className="relative bg-black/45 backdrop-blur-xl border-b border-white/10 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logos/Npsp-logo.png"
              alt="National Private School Platform"
              width={280}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 flex-wrap justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out ${
                    active ? "text-white" : "text-white/90 hover:text-[#FCD116]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 rounded-full transition-all duration-300 ease-out ${
                      active ? "w-[calc(100%-1.5rem)] bg-white" : "w-0 bg-[#FCD116] group-hover:w-[calc(100%-1.5rem)]"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop auth links */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white/90 border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Login
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-52 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 py-1.5 shadow-2xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200 ease-out"
              >
                <a
                  href="https://excelliumgh.com/npsp/teacher/#/login"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FCD116] transition-colors duration-150"
                >
                  Login as Teacher
                </a>
                <div className="h-px bg-white/10 mx-2 my-0.5" aria-hidden="true" />
                <a
                  href="https://excelliumgh.com/npsp/school/#/login"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FCD116] transition-colors duration-150"
                >
                  Login as School
                </a>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#FCD116] text-blue-950 hover:bg-yellow-400 hover:shadow-md transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCD116] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Register
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 py-1.5 shadow-2xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200 ease-out"
              >
                <a
                  href="https://excelliumgh.com/npsp/teacher/#/register"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FCD116] transition-colors duration-150"
                >
                  Register as Teacher
                </a>
                <div className="h-px bg-white/10 mx-2 my-0.5" aria-hidden="true" />
                <a
                  href="https://excelliumgh.com/npsp/school/#/register"
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FCD116] transition-colors duration-150"
                >
                  Register Your School
                </a>
              </div>
            </div>
          </div>

          {/* Hamburger toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-200 ease-out"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              /* X icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

        {/* Mobile menu — overlays the page instead of expanding the header */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 pb-4 shadow-lg"
          >
            <div className="max-w-7xl mx-auto flex flex-col gap-1 pt-2 border-t border-white/10">
              {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group relative pl-3 pr-4 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                    active ? "text-white" : "text-white/90 hover:text-[#FCD116]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={`absolute top-0 bottom-0 left-0 w-1 rounded-r-full transition-all duration-300 ease-out ${
                      active ? "h-full bg-white" : "h-0 bg-[#FCD116] group-hover:h-full"
                    }`}
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              );
            })}

              <div className="pt-2 mt-1 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-white/50 px-3 pb-1.5 pt-0.5">Register</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://excelliumgh.com/npsp/teacher/#/register"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#FCD116] text-blue-950 hover:bg-yellow-400 transition-all duration-200 ease-out"
                  >
                    Register as Teacher
                  </a>
                  <a
                    href="https://excelliumgh.com/npsp/school/#/register"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium text-white/90 border border-white/20 hover:bg-white/10 hover:text-white transition-all duration-200 ease-out"
                  >
                    Register Your School
                  </a>
                </div>
              </div>

              <div className="pt-2 mt-1 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-white/50 px-3 pb-1.5 pt-0.5">Login</p>
                <div className="flex flex-col gap-1">
                  <a
                    href="https://excelliumgh.com/npsp/teacher/#/login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-white/90 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Login as Teacher
                  </a>
                  <a
                    href="https://excelliumgh.com/npsp/school/#/login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-white/90 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Login as School
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
