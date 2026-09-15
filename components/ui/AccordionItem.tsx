interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

let _idCounter = 0;

export default function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  // Generate stable IDs for ARIA pairing.
  // In a real SSR context these would be provided externally; here we derive from the question text.
  const safeId = question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  const buttonId = `accordion-btn-${safeId}`;
  const panelId = `accordion-panel-${safeId}`;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 transition-colors"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-sm font-semibold text-gray-900 leading-snug">{question}</span>
          {/* Chevron icon */}
          <span
            className={`flex-shrink-0 text-blue-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
