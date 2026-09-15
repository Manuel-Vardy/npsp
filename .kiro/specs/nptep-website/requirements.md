# Requirements Document

## Introduction

The NPTEP (National Private Teacher Engagement Programme) Informational Website is a public-facing Next.js application that communicates the programme's purpose, structure, eligibility, payment model, and impact to teachers, private schools, and institutional stakeholders in Ghana. The site contains 11 informational pages plus a shared layout with navigation and footer. There is no authentication or login functionality — all content is static and publicly accessible. The site must be responsive, accessible, and convey a professional government/education aesthetic using Ghana's national colours as accents.

## Glossary

- **NPTEP**: National Private Teacher Engagement Programme — the Ghanaian government initiative connecting licensed teachers with private schools.
- **CAMDM**: Central Account Management and Disbursement Mechanism — the payment processing system used by the programme.
- **NTC**: National Teaching Council — the body responsible for teacher licensing and professional standing.
- **NaSIA**: National Schools Inspectorate Authority — responsible for school accreditation.
- **GES**: Ghana Education Service — the government body overseeing education delivery.
- **GNACOPS**: Ghana National Council of Private Schools.
- **GNAPS**: Ghana National Association of Private Schools.
- **PMU**: Programme Management Unit — the operational body managing NPTEP.
- **Ministry of Education**: The Ghanaian government ministry responsible for education policy.
- **Ministry of Finance**: The Ghanaian government ministry responsible for fiscal oversight.
- **GTLE**: Ghana Teacher Licensure Examination — the pathway for unlicensed teachers to gain NTC certification.
- **Track A**: New Licensed Teacher Placement pathway for unemployed licensed graduates.
- **Track B1**: Existing Licensed Teacher Formalization pathway.
- **Track B2**: Existing Unlicensed Teacher Regularization pathway with a GTLE route.
- **PWA**: Progressive Web App — a web application installable on mobile devices without an app store.
- **USSD**: Unstructured Supplementary Service Data — feature-phone interaction protocol used in Ghana for mobile services.
- **App_Router**: Next.js App Router architecture using the `/app` directory.
- **Website**: The NPTEP public informational website being specified in this document.
- **User**: Any visitor to the Website — teacher, school administrator, or member of the public.
- **GH₵**: Ghanaian Cedi, the currency used for all payment figures.

---

## Requirements

### Requirement 1: Shared Layout and Navigation

**User Story:** As a user, I want a consistent navigation bar and footer on every page, so that I can move between sections of the site easily and find key links.

#### Acceptance Criteria

1. THE Website SHALL render a navigation bar on every page containing the links: Home, About NPTEP, How It Works, For Teachers, For Schools, Payments & Protection, Impact, FAQs, and Contact.
2. THE Website SHALL display Login and Register links on the right side of the navigation bar.
3. WHEN a user views the Website on a viewport narrower than 768 px, THE Navigation SHALL collapse into a hamburger menu that expands on activation.
4. THE Website SHALL render a footer on every page containing programme attribution, quick links, and contact information.
5. THE Website SHALL apply the Poppins font (loaded via Google Fonts) as the default typeface across all pages.
6. WHEN a user navigates between pages, THE Website SHALL preserve scroll position at the top of the destination page.
7. THE Navigation SHALL visually indicate the currently active page link.

---

### Requirement 2: Home Page

**User Story:** As a prospective teacher or school administrator, I want to understand NPTEP's purpose at a glance, so that I can decide whether to engage further with the programme.

#### Acceptance Criteria

1. THE Home_Page SHALL display a hero section with the headline "Empowering Teachers. Strengthening Private Schools. Transforming Education."
2. THE Home_Page SHALL display introductory text summarising the programme's purpose beneath the hero headline.
3. THE Home_Page SHALL display three CTA buttons labelled "For Teachers", "For Schools", and "Learn About NPTEP", each linking to the corresponding page.
4. THE Home_Page SHALL display an impact statistics section showing the figures: 50,000 Teachers, 16,674 Private Schools, 24 Months, and 16 Regions.
5. THE Home_Page SHALL display a "The Challenge" section describing the problem the programme addresses.
6. THE Home_Page SHALL display a "The Solution" section showing a 5-stage process: Register → Verify → Match → Confirm → Get Paid.
7. THE Home_Page SHALL display a "For Teachers" teaser section linking to the For Teachers page.
8. THE Home_Page SHALL display a "For Schools" teaser section linking to the For Schools page.
9. THE Home_Page SHALL display a "Payment Assurance" teaser referencing the CAMDM mechanism and the GH₵1,500 monthly breakdown (GH₵1,300 teacher salary + GH₵200 levy).
10. THE Home_Page SHALL display a "National Impact" section describing the programme's nationwide reach.
11. THE Home_Page SHALL display a final CTA section with the call-to-action "Be Part of the Next Chapter".

---

### Requirement 3: About NPTEP Page

**User Story:** As a stakeholder or member of the public, I want to understand the institutional background of NPTEP, so that I can trust the programme's legitimacy and governance.

#### Acceptance Criteria

1. THE About_Page SHALL display a section explaining what NPTEP is, including the programme's vision and mission statements.
2. THE About_Page SHALL display a section explaining why NPTEP was created.
3. THE About_Page SHALL display institutional cards for each of the eight partner bodies: Ministry of Education, PMU, NTC, NaSIA, GES, GNACOPS, GNAPS, and Ministry of Finance.
4. THE About_Page SHALL display a governance structure section with a visual hierarchy showing the relationships between partner bodies.
5. THE About_Page SHALL display a "Legal & Institutional Foundation" section presented as cards or accordions.

---

### Requirement 4: How It Works Page

**User Story:** As a teacher or school administrator, I want to understand the full programme process step by step, so that I know what to expect from registration through to payment.

#### Acceptance Criteria

1. THE How_It_Works_Page SHALL display a hero section with the heading "From Registration to Opportunity".
2. THE How_It_Works_Page SHALL display a 7-step process covering: Registration, Verification, Matching & Formalization (with Track A and Track B variants), Monthly Verification, Payment Authorization, Disbursement, and Continue or Transition.
3. THE How_It_Works_Page SHALL display an interactive process diagram representing the sequence: REGISTER → VERIFY → MATCH/FORMALIZE → MONTHLY CONFIRMATION → 3-WAY VERIFICATION → AUTHORIZE → PAY → TRANSITION.
4. WHEN a user interacts with a step in the process diagram, THE How_It_Works_Page SHALL display additional detail for that step.

---

### Requirement 5: For Teachers Page

**User Story:** As a prospective or current programme teacher, I want to understand my eligibility, benefits, and journey within NPTEP, so that I can make an informed decision about participating.

#### Acceptance Criteria

1. THE For_Teachers_Page SHALL display a hero section with the heading "Your Teaching Career. A More Structured Path Forward."
2. THE For_Teachers_Page SHALL display a "Who Can Participate" section listing eligibility criteria: recognised teaching qualification, valid NTC licence, good professional standing, and CPD participation.
3. THE For_Teachers_Page SHALL display a "What Teachers Get" section as a set of cards covering: Teaching Opportunities, Structured Engagement, Payment Visibility, Professional Development, Payment Protection, Certificate of Service, and CPD Transcript.
4. THE For_Teachers_Page SHALL display a "Teacher Journey" section showing the steps a teacher follows through the programme.
5. THE For_Teachers_Page SHALL display a "Teacher Portal Preview" section showing a dashboard mockup illustrating the interface teachers will use.
6. THE For_Teachers_Page SHALL display a "Payment Problems" section explaining the mechanism teachers use to flag payment issues.

---

### Requirement 6: For Schools Page

**User Story:** As a private school administrator, I want to understand school eligibility, responsibilities, and how to engage with NPTEP, so that I can participate in the programme effectively.

#### Acceptance Criteria

1. THE For_Schools_Page SHALL display a hero section with the heading "Build a Stronger Teaching Workforce".
2. THE For_Schools_Page SHALL display a "Who Can Participate" section listing school eligibility requirements.
3. THE For_Schools_Page SHALL display a "What Schools Can Do" section as cards covering the eight responsibilities: Register School, Declare Vacancies, Upload Staff Roster, Review Candidates, Onboard Teachers, Complete Monthly Verification, Manage Remittances, and Monitor Compliance.
4. THE For_Schools_Page SHALL display a "School Journey" section showing the steps a school follows through the programme.
5. THE For_Schools_Page SHALL display a "School Financial Commitment" section showing the GH₵1,500 per teacher per month breakdown.
6. THE For_Schools_Page SHALL display a "School Dashboard Preview" section showing a dashboard mockup for school administrators.

---

### Requirement 7: Payments & Protection Page

**User Story:** As a teacher or school administrator, I want to understand how payments are processed and how payment problems are handled, so that I can trust the programme's financial safeguards.

#### Acceptance Criteria

1. THE Payments_Page SHALL display a hero section with the heading "A More Transparent Path to Teacher Payments".
2. THE Payments_Page SHALL display a section explaining the CAMDM mechanism.
3. THE Payments_Page SHALL display a "Monthly Payment Cycle" visual showing the sequence: School Remits → School Verification → Teacher Confirmation → NTC Standing Check → Verification Complete → Payment Authorized → Teacher Paid.
4. THE Payments_Page SHALL display a "Payment Breakdown" section showing the GH₵1,500 total split into GH₵1,300 teacher salary and GH₵200 levy.
5. THE Payments_Page SHALL display a "Payment Channels" section listing the four supported channels: Bank Transfer, MTN MoMo, Telecel Cash, and AT Money.
6. THE Payments_Page SHALL display a "Payment Protection" section explaining the five flaggable issue types: delayed payment, missing payment, partial payment, unauthorized deductions, and delivery failures.
7. THE Payments_Page SHALL display a "48-Hour Cure Process" visual showing the resolution workflow.

---

### Requirement 8: Programme Pathways Page

**User Story:** As a teacher, I want to understand which programme pathway applies to my professional situation, so that I can follow the correct track.

#### Acceptance Criteria

1. THE Pathways_Page SHALL display a hero section with the heading "Three Pathways. One Stronger Teaching Workforce."
2. THE Pathways_Page SHALL display a Track A card describing "New Licensed Teacher Placement" for unemployed licensed graduates.
3. THE Pathways_Page SHALL display a Track B1 card describing "Existing Licensed Teacher Formalization".
4. THE Pathways_Page SHALL display a Track B2 card describing "Existing Unlicensed Teacher Regularization" with reference to the GTLE pathway.
5. THE Pathways_Page SHALL present the three track cards in a visually prominent layout that distinguishes each pathway.

---

### Requirement 9: Impact Page

**User Story:** As a policymaker, donor, or member of the public, I want to understand the anticipated national impact of NPTEP, so that I can assess the programme's significance.

#### Acceptance Criteria

1. THE Impact_Page SHALL display a hero section with the heading "Building a Stronger Future for Ghana's Education Workforce".
2. THE Impact_Page SHALL display the programme-scale statistics: 50,000 Teachers, 16,674 Schools, and a 24-Month Journey.
3. THE Impact_Page SHALL display "Expected Impact" cards for the seven categories: Employment Opportunities, Teacher Professionalization, Private-School Staffing, Regulatory Compliance, Workforce Planning, Fiscal Efficiency, and Improved Education Delivery.
4. THE Impact_Page SHALL display a "National Coverage" section featuring a Ghana map visualisation referencing all 16 regions.
5. THE Impact_Page SHALL display a section describing transition possibilities for teachers after completing the programme.

---

### Requirement 10: Access & Technology Page

**User Story:** As a teacher or school administrator with varying levels of digital access, I want to understand how I can interact with NPTEP regardless of my device or connectivity, so that I can participate even in low-connectivity environments.

#### Acceptance Criteria

1. THE Access_Page SHALL display a hero section with the heading "Access NPTEP Wherever You Are".
2. THE Access_Page SHALL describe the three access channels: Web Portal, Progressive Web App (PWA), and USSD.
3. THE Access_Page SHALL display a USSD interaction visual illustrating the sequence: Dial → Check Payment → Flag Issue → Receive Status.
4. THE Access_Page SHALL display a "Security & Data Protection" section explaining how user data is protected.

---

### Requirement 11: FAQs Page

**User Story:** As a user with specific questions about NPTEP, I want to find answers quickly, so that I do not need to contact support for common queries.

#### Acceptance Criteria

1. THE FAQs_Page SHALL display FAQ items organised into the five categories: General, Teachers, Schools, Payments, and Programme.
2. THE FAQs_Page SHALL present each FAQ item as an accordion that expands to reveal the answer when activated.
3. WHEN a user activates a FAQ accordion item, THE FAQs_Page SHALL expand the item to reveal its answer and collapse any previously open item in the same category.
4. THE FAQs_Page SHALL include specific questions and answers drawn from the NPTEP programme documentation for each category.

---

### Requirement 12: Contact & Support Page

**User Story:** As a user needing assistance, I want to find the appropriate contact channel and submit a support request, so that I can get help relevant to my role.

#### Acceptance Criteria

1. THE Contact_Page SHALL display a hero section with the heading "We're Here to Help".
2. THE Contact_Page SHALL display contact information for five support channels: General Enquiries, Teacher Support, School Support, Payment Support, and Programme/Institutional Enquiries.
3. THE Contact_Page SHALL display a support form with the fields: Full Name, Email, Phone, User Type (dropdown), Subject, Message, and an optional Attachment field.
4. WHEN a user submits the support form with all required fields populated, THE Contact_Page SHALL display a confirmation message acknowledging receipt.
5. WHEN a user submits the support form with one or more required fields empty, THE Contact_Page SHALL display inline validation errors identifying each missing or invalid field.

---

### Requirement 13: Responsive Design

**User Story:** As a user on any device, I want the Website to display correctly and remain usable, so that I can access programme information on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL apply a mobile-first responsive layout that adapts to viewport widths of at least 375 px, 768 px, and 1280 px.
2. WHEN viewed on a viewport narrower than 768 px, THE Website SHALL stack multi-column content sections into single-column layouts.
3. THE Website SHALL scale images and media elements proportionally across all supported viewport widths.

---

### Requirement 14: Accessibility

**User Story:** As a user with accessibility needs, I want the Website to conform to accessibility standards, so that I can navigate and consume content regardless of assistive technology.

#### Acceptance Criteria

1. THE Website SHALL use semantic HTML elements (header, nav, main, section, article, footer) throughout all pages.
2. THE Website SHALL provide descriptive alt text for all non-decorative images.
3. THE Website SHALL maintain a logical heading hierarchy (h1 → h2 → h3) on every page with exactly one h1 per page.
4. THE Website SHALL ensure a colour contrast ratio of at least 4.5:1 for all normal body text against its background.
5. THE Website SHALL ensure all interactive elements (links, buttons, form controls) are keyboard-navigable and have visible focus indicators.
6. THE Website SHALL associate all form labels with their corresponding input elements using htmlFor / for attributes.

---

### Requirement 15: Visual Design & Branding

**User Story:** As a user, I want the Website to look professional and trustworthy, so that I feel confident in the programme's credibility.

#### Acceptance Criteria

1. THE Website SHALL apply Ghana flag accent colours (red #CE1126, gold #FCD116, green #006B3F) as design accents alongside a primary blue/white professional palette.
2. THE Website SHALL use Poppins as the sole typeface, with appropriate weight variations (400, 500, 600, 700) for hierarchy.
3. THE Website SHALL present a consistent visual language — spacing, card styles, button styles, and colour use — across all pages.
4. THE Website SHALL use Tailwind CSS utility classes for all styling with no inline style attributes except where dynamic values require them.

---

### Requirement 16: Performance & Technical

**User Story:** As a user, I want pages to load quickly and reliably, so that I can access information without delay.

#### Acceptance Criteria

1. THE Website SHALL use the Next.js App Router architecture with the `/app` directory convention.
2. THE Website SHALL use Next.js Image component for all images to enable automatic optimisation.
3. THE Website SHALL export a statically renderable build for all 11 informational pages.
4. WHEN the Website is built, THE Build_Process SHALL complete without TypeScript or ESLint errors.
