interface InstitutionCardProps {
  name: string;
  acronym: string;
  role: string;
}

export default function InstitutionCard({ name, acronym, role }: InstitutionCardProps) {
  return (
    <article
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4"
      aria-labelledby={`institution-${acronym}-heading`}
    >
      {/* Placeholder icon / acronym badge */}
      <div
        className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        <span className="text-white font-bold text-xs text-center leading-tight px-1">
          {acronym}
        </span>
      </div>

      <div>
        <h3
          id={`institution-${acronym}-heading`}
          className="text-sm font-bold text-gray-900 leading-snug mb-1"
        >
          {name}
        </h3>
        <p className="text-xs font-semibold text-blue-600 mb-2">{acronym}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{role}</p>
      </div>
    </article>
  );
}
