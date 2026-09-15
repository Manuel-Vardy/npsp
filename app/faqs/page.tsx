"use client";

import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import AccordionItem from "@/components/ui/AccordionItem";
import faqs from "@/data/faqs";

export default function FAQsPage() {
  // Track open index per category: category id → open item index or null
  const [openIndexes, setOpenIndexes] = useState<Record<string, number | null>>(
    () => Object.fromEntries(faqs.map((cat) => [cat.id, null]))
  );

  const toggle = (categoryId: string, itemIndex: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [categoryId]:
        prev[categoryId] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <>
      <HeroSection
        heading="Frequently Asked Questions"
        subheading="Find answers to common questions about NPSP — from registration and eligibility to payments and programme rules."
        backgroundVariant="blue"
      />

      <section className="bg-white py-16" aria-labelledby="faqs-intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faqs-intro-heading" className="sr-only">
            FAQ Categories
          </h2>

          {/* Category navigation */}
          <nav
            className="flex flex-wrap gap-2 justify-center mb-12"
            aria-label="FAQ category links"
          >
            {faqs.map((cat) => (
              <a
                key={cat.id}
                href={`#faq-${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors border border-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* FAQ sections */}
          <div className="max-w-3xl mx-auto space-y-16">
            {faqs.map((category) => (
              <section
                key={category.id}
                id={`faq-${category.id}`}
                aria-labelledby={`faq-category-${category.id}`}
              >
                <h2
                  id={`faq-category-${category.id}`}
                  className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100"
                >
                  {category.name}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={item.id}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndexes[category.id] === index}
                      onToggle={() => toggle(category.id, index)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 max-w-3xl mx-auto text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help. Reach out through the contact
              page and we&apos;ll get back to you.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
