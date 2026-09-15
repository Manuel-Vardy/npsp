export interface ProgrammePathway {
  trackId: "A" | "B1" | "B2";
  title: string;
  subtitle: string;
  targetAudience: string;
  eligibilityCriteria: string[];
  keyBenefits: string[];
  steps: string[];
}

const pathways: ProgrammePathway[] = [
  {
    trackId: "A",
    title: "New Licensed Teacher Placement",
    subtitle: "Track A",
    targetAudience: "Unemployed licensed graduates seeking placements in private schools.",
    eligibilityCriteria: [
      "Holds a recognised teaching qualification",
      "Possesses a valid NTC professional licence",
      "Currently unemployed or seeking formal placement",
      "Willing to participate in CPD activities",
    ],
    keyBenefits: [
      "Structured placement in a registered private school",
      "Monthly allowance of GH₵1,300",
      "Certificate of Service upon completion",
      "CPD transcript and professional development access",
    ],
    steps: [
      "Qualification",
      "Verification",
      "Matching",
      "Placement",
      "Engagement",
    ],
  },
  {
    trackId: "B1",
    title: "Existing Licensed Teacher Formalization",
    subtitle: "Track B1",
    targetAudience: "Licensed teachers already working informally in private schools.",
    eligibilityCriteria: [
      "Holds a valid NTC professional licence",
      "Currently employed (informally) in a registered private school",
      "School is willing to participate in the programme",
      "Good professional standing with NTC",
    ],
    keyBenefits: [
      "Formalization of existing employment under the programme",
      "Standardized monthly allowance of GH₵1,300",
      "Payment visibility and CAMDM protection",
      "CPD participation and transcript",
    ],
    steps: [
      "School Census",
      "Teacher Confirmation",
      "Formalization",
      "Standardized Programme",
    ],
  },
  {
    trackId: "B2",
    title: "Existing Unlicensed Teacher Regularization",
    subtitle: "Track B2",
    targetAudience:
      "Existing private-school teaching personnel without full NTC professional licensure.",
    eligibilityCriteria: [
      "Currently teaching in a registered private school",
      "Does not yet hold a valid NTC licence",
      "Willing to pursue the GTLE pathway",
      "School is willing to support regularization",
    ],
    keyBenefits: [
      "Provisional engagement identifier during regularization",
      "Structured pathway to NTC licensure via GTLE",
      "Professional development during the regularization period",
      "Full programme participation upon licensure",
    ],
    steps: [
      "Declaration",
      "Provisional Identifier",
      "Professional Development",
      "GTLE Pathway",
      "Licensure",
    ],
  },
];

export default pathways;
