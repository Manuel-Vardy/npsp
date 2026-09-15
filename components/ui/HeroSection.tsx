import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  ctaButtons?: Array<{ label: string; href: string; variant: "primary" | "secondary" }>;
  backgroundVariant?: "blue" | "green" | "dark";
  backgroundImage?: string;
  align?: "left" | "center";
  className?: string;
}

const backgroundClasses: Record<NonNullable<HeroSectionProps["backgroundVariant"]>, string> = {
  blue: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white",
  green: "bg-gradient-to-br from-[#006B3F] via-green-700 to-green-600 text-white",
  dark: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white",
};

export default function HeroSection({
  heading,
  subheading,
  ctaButtons = [],
  backgroundVariant = "blue",
  backgroundImage,
  align = "center",
  className = "",
}: HeroSectionProps) {
  const textAlign = align === "left" ? "text-left" : "text-center";
  const contentContainerClass =
    align === "left" ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" : "";
  const innerContentClass =
    align === "left" ? "max-w-3xl" : "max-w-4xl mx-auto";
  const justifyButtons = align === "left" ? "justify-start" : "justify-center";
  const subheadingMax = align === "left" ? "max-w-2xl" : "max-w-2xl mx-auto";
  const bgClass = backgroundImage
    ? "bg-black text-white"
    : backgroundClasses[backgroundVariant];

  return (
    <section
      className={`${bgClass} ${
        backgroundImage
          ? "w-full min-h-svh flex items-center -mt-[6.5rem] md:-mt-[7.5rem]"
          : "-mt-[6.5rem] md:-mt-[7.5rem]"
      } ${
        align === "left" ? "py-20 md:py-28" : "pb-20 px-4 sm:px-6 lg:px-8 pt-[6.5rem] md:pt-[7.5rem]"
      } relative overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        </>
      )}

      {/* Decorative Ghana accent stripe */}

      <div className={`${contentContainerClass} relative z-10`}>
        <div className={`${innerContentClass} ${textAlign}`}>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            {heading}
          </h1>

          {subheading && (
            <p className={`text-lg sm:text-xl text-white/80 mb-8 leading-relaxed ${subheadingMax}`}>
              {subheading}
            </p>
          )}

          {ctaButtons.length > 0 && (
            <div className={`flex flex-wrap gap-4 ${justifyButtons}`}>
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  className={
                    btn.variant === "primary"
                      ? "inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#FCD116] text-blue-950 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCD116] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-200 ease-out"
                      : "inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-200 ease-out"
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
