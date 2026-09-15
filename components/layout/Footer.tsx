export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/45 backdrop-blur-xl border-t border-white/10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white text-center sm:text-left">
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
