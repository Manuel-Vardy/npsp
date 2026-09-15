export interface ImpactStat {
  value: string;
  label: string;
  context?: string;
}

const stats: ImpactStat[] = [
  {
    value: "50,000",
    label: "Teachers Targeted",
    context: "Licensed teachers to be engaged across Ghana",
  },
  {
    value: "16,674",
    label: "Private Schools",
    context: "Private pre-tertiary schools across Ghana",
  },
  {
    value: "24 Months",
    label: "Engagement Cycle",
    context: "Standard programme engagement duration",
  },
  {
    value: "16 Regions",
    label: "National Coverage",
    context: "All 16 regions of Ghana covered",
  },
];

export default stats;
