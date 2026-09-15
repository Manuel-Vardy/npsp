export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  name: "General" | "Teachers" | "Schools" | "Payments" | "Programme";
  items: FAQItem[];
}

const faqs: FAQCategory[] = [
  {
    id: "general",
    name: "General",
    items: [
      {
        id: "general-1",
        question: "What is NPSP?",
        answer:
          "NPSP (National Private Teacher Engagement Programme) is a national Public-Private Partnership initiative connecting qualified licensed teachers with opportunities in Ghana's private pre-tertiary education sector. It is overseen by the Ministry of Education and managed by the Programme Management Unit (PMU), in collaboration with NTC, NaSIA, GES, GNACOPS, and GNAPS.",
      },
      {
        id: "general-2",
        question: "Why was NPSP created?",
        answer:
          "NPSP was created to address the Teacher Supply Paradox: thousands of qualified teachers are unemployed while private schools struggle to find qualified staff. The programme formalises engagements, ensures payment protection, and strengthens the private education sector through structured, regulated teacher placements.",
      },
      {
        id: "general-3",
        question: "Who is behind NPSP?",
        answer:
          "NPSP is a collaboration involving the Ministry of Education, the Programme Management Unit (PMU), the National Teaching Council (NTC), NaSIA, GES, GNACOPS, and GNAPS. Each body plays a defined role in governance, verification, accreditation, and operational delivery.",
      },
      {
        id: "general-4",
        question: "How many teachers are targeted?",
        answer:
          "The programme targets 50,000 licensed teachers across Ghana's 16 regions.",
      },
      {
        id: "general-5",
        question: "How many schools are covered?",
        answer:
          "The programme covers 16,674 registered private pre-tertiary schools nationwide.",
      },
    ],
  },
  {
    id: "teachers",
    name: "Teachers",
    items: [
      {
        id: "teachers-1",
        question: "Who can participate as a teacher?",
        answer:
          "Teachers must hold a recognised teaching qualification, a valid NTC licence, maintain good professional standing, and be willing to participate in CPD activities.",
      },
      {
        id: "teachers-2",
        question: "How do I register as a teacher?",
        answer:
          "Visit the NPSP platform, select \"Register as a Teacher,\" and complete the onboarding form with your NTC licence details and personal information.",
      },
      {
        id: "teachers-3",
        question: "How does placement work?",
        answer:
          "After verification, the PMU matches your profile to eligible school vacancies based on qualification, subject specialisation, and location preferences.",
      },
      {
        id: "teachers-4",
        question: "What is Track A?",
        answer:
          "Track A is for newly licensed teachers seeking their first placement in a private school through the programme.",
      },
      {
        id: "teachers-5",
        question: "What is Track B?",
        answer:
          "Track B covers existing private-school teachers — either licensed (B1) or unlicensed (B2) — whose employment is being formalised through the programme.",
      },
      {
        id: "teachers-6",
        question: "How do I confirm my monthly work?",
        answer:
          "Each month, log into your teacher portal and submit your monthly confirmation to validate your service for that month.",
      },
    ],
  },
  {
    id: "schools",
    name: "Schools",
    items: [
      {
        id: "schools-1",
        question: "Who can participate as a school?",
        answer:
          "Schools must be legally established, registered, approved, and compliant with applicable standards, with demonstrated eligible vacancies.",
      },
      {
        id: "schools-2",
        question: "How do schools declare vacancies?",
        answer:
          "After registering and verifying your school, use the School Dashboard to declare open teaching positions with subject and class-level requirements.",
      },
      {
        id: "schools-3",
        question: "How does the staff census work?",
        answer:
          "For Track B schools, you submit a census of your current teaching staff, which the PMU uses to formalize existing unlicensed or informally employed teachers.",
      },
      {
        id: "schools-4",
        question: "What does the school pay?",
        answer:
          "Schools remit GH₵1,500 per engaged teacher per month. This covers GH₵1,300 teacher allowance and GH₵200 administrative and coordination charge.",
      },
      {
        id: "schools-5",
        question: "How does compliance work?",
        answer:
          "Schools must maintain registration, approval status, and monthly verification participation. Non-compliance may result in programme suspension.",
      },
    ],
  },
  {
    id: "payments",
    name: "Payments",
    items: [
      {
        id: "payments-1",
        question: "How much is the teacher allowance?",
        answer:
          "Teachers receive GH₵1,300 per month. The school remits GH₵1,500, of which GH₵200 covers programme administration and coordination.",
      },
      {
        id: "payments-2",
        question: "What is CAMDM?",
        answer:
          "CAMDM (Centralized Allowance Management and Disbursement Mechanism) is the payment system that collects school remittances, runs three-way verification, and disburses teacher allowances.",
      },
      {
        id: "payments-3",
        question: "How does payment verification work?",
        answer:
          "Each month, three checks must pass: the school confirms the teacher worked, the teacher confirms their service, and the NTC confirms the teacher's licence is in good standing.",
      },
      {
        id: "payments-4",
        question: "How do teachers receive payment?",
        answer:
          "Teachers receive their allowance through a validated bank account or a supported mobile money channel (MTN MoMo, Telecel Cash, or AT Money).",
      },
      {
        id: "payments-5",
        question: "What happens if payment is delayed?",
        answer:
          "Teachers can raise a Payment Flag through the platform. The PMU Finance Desk will investigate and issue a 48-hour cure notice to the school if warranted.",
      },
    ],
  },
  {
    id: "programme",
    name: "Programme",
    items: [
      {
        id: "programme-1",
        question: "How long is the engagement?",
        answer:
          "The standard engagement cycle is 24 months, after which teachers can transition to permanent private employment, pursue public-sector opportunities, or re-enter the programme pipeline.",
      },
      {
        id: "programme-2",
        question: "Can a teacher leave early?",
        answer:
          "Yes, through the structured exit process. Early departures must follow the programme's formal exit procedure.",
      },
      {
        id: "programme-3",
        question: "What happens after 24 months?",
        answer:
          "Teachers can pursue a permanent private contract, eligible public-sector opportunities, or pipeline renewal for another cycle.",
      },
      {
        id: "programme-4",
        question: "What is CPD?",
        answer:
          "CPD (Continuing Professional Development) is ongoing training that teachers are expected to participate in during their engagement, contributing to their professional growth and NTC standing.",
      },
      {
        id: "programme-5",
        question: "What happens to a vacant programme slot?",
        answer:
          "If a teacher exits early or a placement is terminated, the PMU will work to fill the vacancy through the matching process.",
      },
    ],
  },
];

export default faqs;
