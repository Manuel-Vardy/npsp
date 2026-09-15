interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function ProcessStep({
  stepNumber,
  title,
  description,
  isActive = false,
  onClick,
}: ProcessStepProps) {
  const isInteractive = typeof onClick === "function";

  const containerClass = [
    "rounded-xl border p-5 flex gap-4 transition-all",
    isActive
      ? "border-blue-600 bg-blue-50 shadow-md"
      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm",
    isInteractive ? "cursor-pointer" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {/* Step number badge */}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
          isActive ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600"
        }`}
        aria-hidden="true"
      >
        {stepNumber}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <p className={`font-semibold text-sm leading-snug ${isActive ? "text-blue-900" : "text-gray-800"}`}>
          {title}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </>
  );

  if (isInteractive) {
    return (
      <button
        type="button"
        className={`${containerClass} text-left w-full`}
        onClick={onClick}
        aria-pressed={isActive}
      >
        {content}
      </button>
    );
  }

  return <div className={containerClass}>{content}</div>;
}
