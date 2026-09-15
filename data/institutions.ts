export interface Institution {
  id: string;
  name: string;
  acronym: string;
  role: string;
  logoSrc?: string;
}

const institutions: Institution[] = [
  {
    id: "moe",
    name: "Ministry of Education",
    acronym: "MOE",
    role: "Policy oversight and national education governance.",
  },
  {
    id: "pmu",
    name: "Programme Management Unit",
    acronym: "PMU",
    role: "Operational nerve centre: centralized database, matching, monitoring, and CAMDM management.",
  },
  {
    id: "ntc",
    name: "National Teaching Council",
    acronym: "NTC",
    role: "Teacher licensing verification and professional standing checks.",
  },
  {
    id: "nasia",
    name: "National Schools Inspectorate Authority",
    acronym: "NaSIA",
    role: "School accreditation and compliance verification.",
  },
  {
    id: "ges",
    name: "Ghana Education Service",
    acronym: "GES",
    role: "Education delivery oversight.",
  },
  {
    id: "gnacops",
    name: "Ghana National Council of Private Schools",
    acronym: "GNACOPS",
    role: "Private school sector representation.",
  },
  {
    id: "gnaps",
    name: "Ghana National Association of Private Schools",
    acronym: "GNAPS",
    role: "Private school sector association.",
  },
  {
    id: "mof",
    name: "Ministry of Finance",
    acronym: "MOF",
    role: "Fiscal oversight and revenue coordination.",
  },
];

export default institutions;
