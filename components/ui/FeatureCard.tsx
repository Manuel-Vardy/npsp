import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function FeatureCard({ title, description, icon, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${className}`}>
      {icon && (
        <div className="text-blue-700 text-2xl w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
