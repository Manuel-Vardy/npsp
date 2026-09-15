# Design Document: NPTEP Informational Website

## Overview

The NPTEP (National Private Teacher Engagement Programme) website is a static, publicly accessible informational site built with Next.js (App Router), Tailwind CSS, and Poppins font. It presents the programme to three primary audiences — teachers, private school administrators, and institutional stakeholders — across 11 content pages and a shared layout.

All pages are statically rendered at build time (no SSR or API routes needed). The site's visual identity uses a professional blue/white primary palette accented with Ghana's national colours (red, gold, green). No authentication, login, or data persistence is required.

---

## Architecture

```
nptep-website/
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout: font, nav, footer
│   ├── page.tsx                  # Home page (/)
│   ├── about/page.tsx            # About NPTEP (/about)
│   ├── how-it-works/page.tsx     # How It Works (/how-it-works)
│   ├── for-teachers/page.tsx     # For Teachers (/for-teachers)
│   ├── for-schools/page.tsx      # For Schools (/for-schools)
│   ├── payments/page.tsx         # Payments & Protection (/payments)
│   ├── pathways/page.tsx         # Programme Pathways (/pathways)
│   ├── impact/page.tsx           # Impact (/impact)
│   ├── access/page.tsx           # Access & Technology (/access)
│   ├── faqs/page.tsx             # FAQs (/faqs)
│   └── contact/page.tsx          # Contact & Support (/contact)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Top navigation + hamburger
│   │   └── Footer.tsx            # Global footer
│   ├── ui/
│   │   ├── HeroSection.tsx       # Reusable hero banner
│   │   ├── StatCard.tsx          # Impact statistic card
│   │   ├── FeatureCard.tsx       # Benefit / feature card
│   │   ├── ProcessStep.tsx       # Numbered step in a flow
│   │   ├── TrackCard.tsx         # Pathway track card (A/B1/B2)
│   │   ├── AccordionItem.tsx     # FAQ accordion row
│   │   ├── InstitutionCard.tsx   # Partner institution card
│   │   └── ContactForm.tsx       # Support form with validation
│   └── sections/                 # Page-specific section components
├── data/                         # Static JSON/TS content files
│   ├── faqs.ts
│   ├── institutions.ts
│   ├── pathways.ts
│   ├── stats.ts
│   └── paymentSteps.ts
├── public/
│   └── images/                   # Optimised assets
├── styles/
│   └── globals.css               # Tailwind base + custom tokens
├── tailwind.config.ts
└── next.config.ts
```

### Rendering Strategy

All 11 pages are **statically generated** (`generateStaticParams` not required — all routes are fixed). Next.js will pre-render every page at build time, producing HTML + minimal JS for hydration. This gives optimal performance and makes the site deployable to any static CDN or serverless host.

---

## Components and Interfaces

### Navbar

```typescript
// Props: none — reads current pathname via usePathname() hook
// Behaviour:
//   - Renders full link list on md+ viewports
//   - Renders hamburger toggle on <md viewports (mobile-first)
//   - Highlights active link using pathname comparison
//   - Login and Register always appear on the right
```

Key implementation notes:
- Use `"use client"` directive because it consumes `usePathname()` and manages mobile menu open/close state.
- Active link detection: `pathname === href` or `pathname.startsWith(href)` for nested routes.
- Hamburger icon toggles a `menuOpen` boolean state; menu renders as full-width overlay on mobile.

### Footer

Static server component. Contains programme name, quick links mirroring the nav, and a contact email.

### HeroSection

```typescript
interface HeroSectionProps {
  heading: string;
  subheading?: string;
  ctaButtons?: Array<{ label: string; href: string; variant: 'primary' | 'secondary' }>;
  backgroundVariant?: 'blue' | 'green' | 'dark';
}
```

### StatCard

```typescript
interface StatCardProps {
  value: string;   // e.g. "50,000"
  label: string;   // e.g. "Teachers"
  icon?: React.ReactNode;
}
```

### FeatureCard

```typescript
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
```

### ProcessStep

```typescript
interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isActive?: boolean;         // for interactive diagram
  onClick?: () => void;
}
```

### TrackCard

```typescript
interface TrackCardProps {
  trackId: 'A' | 'B1' | 'B2';
  title: string;
  subtitle: string;
  description: string;
  eligibilityCriteria: string[];
  accentColor: string;        // Tailwind colour class
}
```

### AccordionItem

```typescript
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
```

The FAQs page manages an `openIndex` state per category group. Clicking an item calls `setOpenIndex(i === openIndex ? null : i)` — expanding the clicked item and collapsing any previously open sibling.

### ContactForm

Client component managing form state with `useState`. Fields: `fullName`, `email`, `phone`, `userType`, `subject`, `message`, `attachment` (optional).

Validation logic (client-side):
- Required: fullName, email, phone, userType, subject, message
- Email: must match standard email regex
- On submit, run validation; if any field fails, set per-field error messages and do not proceed
- On valid submission: display confirmation message

```typescript
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  userType?: string;
  subject?: string;
  message?: string;
}
```

---

## Data Models

### FAQ Data

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: 'General' | 'Teachers' | 'Schools' | 'Payments' | 'Programme';
  items: FAQItem[];
}
```

### Institution Data

```typescript
interface Institution {
  id: string;
  name: string;
  acronym: string;
  role: string;           // Short description of role in NPTEP
  logoSrc?: string;
}
```

### Pathway / Track Data

```typescript
interface ProgrammePathway {
  trackId: 'A' | 'B1' | 'B2';
  title: string;
  subtitle: string;
  targetAudience: string;
  eligibilityCriteria: string[];
  keyBenefits: string[];
}
```

### Payment Step Data

```typescript
interface PaymentStep {
  stepNumber: number;
  label: string;          // e.g. "School Remits"
  description: string;
}
```

### Impact Stat Data

```typescript
interface ImpactStat {
  value: string;
  label: string;
  context?: string;
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature is a static informational website (Next.js, Tailwind CSS). Most acceptance criteria are configuration, rendering, and UI-state checks best validated through example-based tests. However, two areas have universal properties amenable to property-based testing:

1. **FAQ accordion state management** — for any sequence of FAQ item interactions, the open/closed state must remain consistent.
2. **Contact form validation** — for any combination of empty required fields, validation must produce errors for exactly those fields.
3. **Page heading hierarchy** — for every page in the site, the heading structure must satisfy structural invariants.

### Property 1: FAQ Accordion Mutual Exclusion

*For any* FAQ category containing N items, when a user activates item i (0 ≤ i < N), exactly one item in that category SHALL be expanded (item i) and all other items SHALL be collapsed — regardless of which item was previously open or the order in which items have been toggled.

**Validates: Requirements 11.3**

### Property 2: Contact Form Validation Completeness

*For any* submission of the contact form where one or more required fields (fullName, email, phone, userType, subject, message) are empty or invalid, the form validation function SHALL return an errors object containing an entry for each and every missing or invalid field — and SHALL NOT contain entries for fields that are correctly populated.

**Validates: Requirements 12.5**

### Property 3: Page Heading Hierarchy Invariant

*For any* page component in the Website, the rendered output SHALL contain exactly one `<h1>` element, and no heading level SHALL be skipped (i.e., an `<h3>` SHALL NOT appear unless preceded by an `<h2>` on the same page).

**Validates: Requirements 14.3**

---

## Error Handling

### Contact Form
- Client-side validation runs synchronously on form submission (no network call needed for the static version).
- Each required field displays its own inline error message below the input.
- The submit button is re-enabled after the user begins correcting errors (errors clear on field change).
- If the form is submitted successfully, a non-dismissible success banner replaces the form.

### Navigation / 404
- Next.js will automatically serve a 404 page for unknown routes. A custom `not-found.tsx` should provide a branded "Page Not Found" experience with a link back to Home.

### Image Loading
- All images use the Next.js `<Image>` component with explicit `width`, `height`, and `alt` props.
- Placeholder blur images are used where possible to prevent layout shift.

### JavaScript Disabled
- Navigation links are plain `<a>` / Next.js `<Link>` elements and remain functional without JS.
- Static content sections are server-rendered and readable without JS.
- The hamburger menu and accordion components require JS; they should fall back gracefully (menu visible, accordions open) when JS is unavailable.

---

## Testing Strategy

### Dual Testing Approach

Unit and component tests verify specific examples; property-based tests verify universal properties. Both are complementary and both are used in this project.

### Test Tooling

| Tool | Purpose |
|------|---------|
| **Jest** + **React Testing Library** | Unit and component tests |
| **fast-check** | Property-based testing (Properties 1–3) |
| **jest-axe** | Automated accessibility checks |
| **@testing-library/user-event** | Simulating keyboard and pointer interactions |

### Unit / Component Tests (Example-Based)

Each page component should have at least one rendering test confirming:
- The correct `<h1>` text is present
- Key section headings and landmark content are rendered
- CTA links point to the correct routes
- Navbar renders all required links
- Footer renders the attribution text

Each interactive UI component should have tests for:
- **Navbar**: link list presence, active link class, hamburger toggle opens/closes menu
- **AccordionItem**: renders question; on click, answer is visible
- **ContactForm**: all fields render; submitting empty form shows validation errors; submitting a valid form shows confirmation

### Property-Based Tests

Using **fast-check** with a minimum of **100 iterations** per property.

**Property 1 — FAQ Accordion Mutual Exclusion**
- Generator: an arbitrary FAQ category with 1–20 items; a sequence of 1–50 toggle operations (random item indices)
- Assertion: after each toggle, at most one item in the category is open, and the open item is the one most recently toggled (or null if toggled closed)
- Tag: `// Feature: nptep-website, Property 1: FAQ accordion mutual exclusion`

**Property 2 — Contact Form Validation Completeness**
- Generator: arbitrary form state objects where each required field is either a valid string value or an empty/whitespace-only string (chosen randomly)
- Assertion: `validateForm(state)` returns errors for exactly the empty/invalid fields and no others
- Tag: `// Feature: nptep-website, Property 2: Contact form validation completeness`

**Property 3 — Page Heading Hierarchy Invariant**
- Generator: render each of the 11 page components with RTL; extract all heading elements
- Assertion: exactly one `h1` exists; no heading level is skipped in the sequence
- This is effectively a parameterised example test over all pages (not random-input), implemented as a `test.each` suite
- Tag: `// Feature: nptep-website, Property 3: Page heading hierarchy invariant`

### Accessibility Tests

Each page is run through `jest-axe`'s `toHaveNoViolations()` assertion to catch WCAG-level issues automatically (missing alt text, unlabelled inputs, low contrast indicators).

### Test Configuration

- Minimum **100 iterations** for fast-check property tests
- All tests run in a single Jest pass (`jest --testPathPattern` per area)
- CI command: `npx jest --ci`
