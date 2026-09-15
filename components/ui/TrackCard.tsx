interface TrackCardProps {
  trackId: "A" | "B1" | "B2";
  title: string;
  subtitle: string;
  description: string;
  eligibilityCriteria: string[];
  accentColor: string;
}

const trackBadgeStyles: Record<TrackCardProps["trackId"], string> = {
  A: "bg-blue-700 text-white",
  B1: "bg-[#006B3F] text-white",
  B2: "bg-[#CE1126] text-white",
};

export default function TrackCard({
  trackId,
  title,
  subtitle,
  description,
  eligibilityCriteria,
  accentColor,
}: TrackCardProps) {
  return (
    <article
      className={`rounded-2xl border-t-4 ${accentColor} bg-white shadow-md hover:shadow-lg transition-shadow p-7 flex flex-col gap-5`}
      aria-labelledby={`track-${trackId}-heading`}
    >
      {/* Track badge + title */}
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex items-center justify-center w-14 h-14 rounded-full text-xl font-extrabold flex-shrink-0 ${trackBadgeStyles[trackId]}`}
          aria-label={`Track ${trackId}`}
        >
          {trackId}
        </span>
        <div>
          <h3
            id={`track-${trackId}-heading`}
            className="text-lg font-bold text-gray-900 leading-snug"
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-medium mt-0.5">{subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

      {/* Eligibility criteria */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
          Eligibility Criteria
        </h4>
        <ul className="space-y-2">
          {eligibilityCriteria.map((criterion, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center" aria-hidden="true">
                <svg className="w-2.5 h-2.5 text-green-700" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {criterion}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
