export interface PaymentStep {
  stepNumber: number;
  label: string;
  description: string;
}

const paymentSteps: PaymentStep[] = [
  {
    stepNumber: 1,
    label: "School Remits",
    description:
      "School transfers GH₵1,500 per engaged teacher to the CAMDM account.",
  },
  {
    stepNumber: 2,
    label: "School Verification",
    description:
      "School confirms teacher attendance and service for the month.",
  },
  {
    stepNumber: 3,
    label: "Teacher Confirmation",
    description:
      "Teacher confirms monthly service delivery via the platform.",
  },
  {
    stepNumber: 4,
    label: "NTC Standing Check",
    description:
      "NTC verifies the teacher's professional standing remains valid.",
  },
  {
    stepNumber: 5,
    label: "Verification Complete",
    description:
      "All three verifications passed; payment is authorized.",
  },
  {
    stepNumber: 6,
    label: "Payment Authorized",
    description:
      "PMU Finance Desk approves disbursement.",
  },
  {
    stepNumber: 7,
    label: "Teacher Paid",
    description:
      "Allowance disbursed to teacher's registered bank or mobile money account.",
  },
];

export default paymentSteps;
