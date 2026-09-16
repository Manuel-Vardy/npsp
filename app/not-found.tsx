import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Ghana accent bar */}
        <div className="flex h-1.5 rounded-full overflow-hidden mb-8 mx-auto max-w-xs">
          <div className="flex-1 bg-[#CE1126]" />
          <div className="flex-1 bg-[#FCD116]" />
          <div className="flex-1 bg-[#006B3F]" />
        </div>

        <p className="text-7xl font-bold text-blue-900 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Please check the URL or navigate back to the home page.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/about#contact"
            className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-blue-800 text-blue-800 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
