import HeroSection from "@/components/ui/HeroSection";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact & Support | NPSP",
  description:
    "Get in touch with NPSP support for teacher, school, payment, or programme enquiries.",
};

const contactChannels = [
  {
    title: "General Enquiries",
    description: "Questions about the programme, eligibility, or how NPSP works.",
    email: "npsp@example.gov.gh",
    icon: "📬",
  },
  {
    title: "Teacher Support",
    description: "Help with registration, placement, monthly confirmations, or your teacher portal.",
    email: "teachers@example.gov.gh",
    icon: "🧑‍🏫",
  },
  {
    title: "School Support",
    description: "Assistance with school registration, vacancy declarations, or staff census submission.",
    email: "schools@example.gov.gh",
    icon: "🏫",
  },
  {
    title: "Payment Support",
    description: "Issues with allowance payments, CAMDM remittances, or payment flags.",
    email: "payments@example.gov.gh",
    icon: "💳",
  },
  {
    title: "Programme / Institutional Enquiries",
    description: "For government bodies, regulators, or institutional partners seeking programme information.",
    email: "partners@example.gov.gh",
    icon: "🏛️",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        heading="We're Here to Help"
        subheading="Whether you are a teacher, a school, or an institutional partner, our support team is ready to assist you."
        backgroundVariant="blue"
      />

      {/* Contact Channels */}
      <section className="bg-gray-50 py-16" aria-labelledby="channels-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="channels-heading"
            className="text-3xl font-bold text-gray-900 text-center mb-4"
          >
            Contact Options
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Choose the support channel most relevant to your enquiry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactChannels.map((ch) => (
              <article
                key={ch.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3"
                aria-labelledby={`contact-${ch.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="text-3xl" aria-hidden="true">
                  {ch.icon}
                </div>
                <h3
                  id={`contact-${ch.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="font-bold text-gray-900 text-base"
                >
                  {ch.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {ch.description}
                </p>
                <a
                  href={`mailto:${ch.email}`}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                >
                  {ch.email}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
            Note: Contact details shown are placeholders. Official email addresses,
            office address, phone numbers, and social media accounts will be updated
            once they are officially provided by the programme.
          </p>
        </div>
      </section>

      {/* Support Form */}
      <section className="bg-white py-16" aria-labelledby="form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2
              id="form-heading"
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Use this form to submit your enquiry. Our support team will respond
              as soon as possible. For urgent payment issues, please use the
              Payment Flag feature inside your portal.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
