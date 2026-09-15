# Implementation Plan: NPTEP Informational Website

## Overview

Build the NPTEP public informational website as a Next.js (App Router) project with Tailwind CSS and Poppins font. Tasks are ordered to establish the shared infrastructure first, then build each page incrementally, with property-based and accessibility tests added close to the code they validate.

---

## Tasks

- [x] 1. Bootstrap project and configure global tooling
  - Initialise a Next.js 14+ project with TypeScript and App Router (`npx create-next-app@latest`)
  - Install and configure Tailwind CSS (`tailwind.config.ts`, `globals.css` with `@tailwind` directives)
  - Add Poppins font via `next/font/google` in `app/layout.tsx` and apply it as the default `font-sans` class
  - Configure Ghana accent colour tokens in `tailwind.config.ts` under `theme.extend.colors`: `ghana-red: '#CE1126'`, `ghana-gold: '#FCD116'`, `ghana-green: '#006B3F'`
  - Install testing dependencies: `jest`, `@testing-library/react`, `@testing-library/user-event`, `jest-axe`, `fast-check`, `@testing-library/jest-dom`
  - Configure `jest.config.ts` and `jest.setup.ts` with RTL and jest-axe matchers
  - _Requirements: 15.1, 15.2, 15.4, 16.1, 16.4_

- [x] 2. Create shared layout: Navbar and Footer
  - [x] 2.1 Implement `components/layout/Navbar.tsx`
    - Mark as `"use client"` (uses `usePathname` and hamburger state)
    - Render all 9 nav links (Home through Contact) on `md+` viewports
    - Render Login and Register links on the right side
    - Implement `menuOpen` state and hamburger toggle for `<md` viewports
    - Apply active-link styling using `pathname === href` comparison
    - _Requirements: 1.1, 1.2, 1.3, 1.7_
  - [ ]* 2.2 Write unit tests for Navbar
    - Test all 9 nav links are rendered
    - Test Login and Register links are present
    - Test hamburger button toggles menu visibility on narrow viewport mock
    - Test active link receives the active CSS class for the current pathname
    - _Requirements: 1.1, 1.2, 1.3, 1.7_
  - [x] 2.3 Implement `components/layout/Footer.tsx`
    - Server component; render programme attribution, quick links, and contact email
    - _Requirements: 1.4_
  - [x] 2.4 Wire Navbar and Footer into `app/layout.tsx`
    - Apply Poppins font class, render `<Navbar />` and `<Footer />` wrapping `{children}`
    - Set `<html lang="en">` for accessibility
    - _Requirements: 1.4, 1.5, 14.1_
  - [ ]* 2.5 Write accessibility test for root layout
    - Run `jest-axe` against a page render to confirm no violations
    - _Requirements: 14.1, 14.4, 14.5_

- [x] 3. Implement reusable UI components
  - [x] 3.1 Implement `components/ui/HeroSection.tsx`
    - Accept `heading`, `subheading`, `ctaButtons[]`, `backgroundVariant` props
    - Render as an accessible `<section>` with `<h1>` and optional CTA `<a>` elements
    - _Requirements: 2.1, 14.2, 14.3_
  - [x] 3.2 Implement `components/ui/StatCard.tsx`
    - Render value, label, and optional icon
    - _Requirements: 2.4_
  - [x] 3.3 Implement `components/ui/FeatureCard.tsx`
    - Render title, description, and optional icon inside a card container
    - _Requirements: 5.3, 6.3_
  - [x] 3.4 Implement `components/ui/ProcessStep.tsx`
    - Accept `stepNumber`, `title`, `description`, `isActive`, `onClick`
    - Render as a clickable element with active state visual indicator
    - _Requirements: 4.3, 4.4_
  - [x] 3.5 Implement `components/ui/TrackCard.tsx`
    - Accept `trackId`, `title`, `subtitle`, `description`, `eligibilityCriteria[]`, `accentColor`
    - Render as a large visually prominent card
    - _Requirements: 8.2, 8.3, 8.4, 8.5_
  - [x] 3.6 Implement `components/ui/InstitutionCard.tsx`
    - Render institution name, acronym, logo (via Next.js Image), and role description
    - _Requirements: 3.3_
  - [ ]* 3.7 Write unit tests for reusable UI components
    - Test HeroSection renders heading text and CTA buttons with correct href
    - Test StatCard renders value and label text
    - Test FeatureCard renders title and description
    - Test ProcessStep calls onClick and applies active class when isActive is true
    - Test TrackCard renders all eligibility criteria
    - _Requirements: 2.1, 2.3, 2.4_

- [x] 4. Implement `components/ui/AccordionItem.tsx` and FAQ state logic
  - [x] 4.1 Implement `AccordionItem.tsx`
    - Accept `question`, `answer`, `isOpen`, `onToggle` props
    - Render as a `<button>` triggering `onToggle`; show/hide answer based on `isOpen`
    - Use ARIA attributes: `aria-expanded`, `aria-controls`, `id` for panel
    - _Requirements: 11.2, 14.5_
  - [ ]* 4.2 Write property test for FAQ accordion mutual exclusion
    - **Property 1: FAQ Accordion Mutual Exclusion**
    - Use fast-check to generate a category of 1–20 items and a sequence of 1–50 toggle operations
    - After each toggle, assert exactly one item is open (the most recently activated), with all others closed
    - Minimum 100 iterations
    - **Validates: Requirements 11.3**
    - `// Feature: nptep-website, Property 1: FAQ accordion mutual exclusion`

- [x] 5. Implement `components/ui/ContactForm.tsx` with validation
  - [x] 5.1 Implement `ContactForm.tsx`
    - Client component with `useState` for field values and `FormErrors`
    - Render fields: Full Name, Email, Phone, User Type (select), Subject, Message, Attachment (optional)
    - Associate every `<label>` with its input via `htmlFor`
    - Implement `validateForm()` pure function: returns errors for each empty/invalid required field
    - On submit: run validation; if errors, set error state and do not proceed; if valid, show confirmation banner
    - On field change: clear the error for that field
    - _Requirements: 12.3, 12.4, 12.5, 14.5, 14.6_
  - [ ]* 5.2 Write property test for contact form validation completeness
    - **Property 2: Contact Form Validation Completeness**
    - Use fast-check to generate arbitrary form state objects where each required field is either a valid string or empty/whitespace-only
    - Assert `validateForm(state)` returns errors for exactly the invalid fields and no others
    - Minimum 100 iterations
    - **Validates: Requirements 12.5**
    - `// Feature: nptep-website, Property 2: Contact form validation completeness`
  - [ ]* 5.3 Write unit tests for ContactForm
    - Test all 6 required fields render with labels
    - Test submitting with all fields empty shows 6 error messages
    - Test submitting with all fields valid shows the confirmation message
    - Test correcting a field after an error clears that field's error
    - _Requirements: 12.3, 12.4, 12.5_

- [~] 6. Create static content data files
  - Create `data/stats.ts` exporting `ImpactStat[]` with the four programme statistics
  - Create `data/institutions.ts` exporting `Institution[]` for all 8 partner bodies
  - Create `data/pathways.ts` exporting `ProgrammePathway[]` for tracks A, B1, B2
  - Create `data/paymentSteps.ts` exporting `PaymentStep[]` for the 7-step payment cycle
  - Create `data/faqs.ts` exporting `FAQCategory[]` with all 5 categories and their question/answer items
  - _Requirements: 3.3, 7.3, 8.2–8.4, 9.2, 11.1, 11.4_

- [x] 7. Implement Home page (`app/page.tsx`)
  - Use `HeroSection` with the headline "Empowering Teachers. Strengthening Private Schools. Transforming Education." and three CTA buttons
  - Render impact statistics using `StatCard` components (50,000 Teachers, 16,674 Private Schools, 24 Months, 16 Regions)
  - Render "The Challenge" section, "The Solution" 5-stage process, "For Teachers" teaser, "For Schools" teaser, "Payment Assurance" teaser (CAMDM, GH₵1,500 → GH₵1,300 + GH₵200), "National Impact" section, and "Be Part of the Next Chapter" final CTA
  - _Requirements: 2.1–2.11_
  - [ ]* 7.1 Write unit tests for Home page
    - Test h1 heading text is present
    - Test impact stat values are rendered
    - Test CTA buttons link to correct pages
    - _Requirements: 2.1, 2.3, 2.4_

- [x] 8. Implement About NPTEP page (`app/about/page.tsx`)
  - Render Vision, Mission, and "Why NPTEP was created" sections
  - Render `InstitutionCard` for all 8 partner bodies from `data/institutions.ts`
  - Render governance structure section with a visual hierarchy diagram (CSS flexbox/grid)
  - Render "Legal & Institutional Foundation" section using accordion or cards
  - _Requirements: 3.1–3.5_
  - [ ]* 8.1 Write unit test for About page
    - Test h1 is present, all 8 institution names are rendered
    - _Requirements: 3.3_

- [x] 9. Implement How It Works page (`app/how-it-works/page.tsx`)
  - Render hero with heading "From Registration to Opportunity"
  - Render 7-step process detail sections using `ProcessStep` components
  - Implement interactive process diagram as a client component (`"use client"`) with `activeStep` state; clicking a step updates `activeStep` and reveals the detail panel
  - _Requirements: 4.1–4.4_
  - [ ]* 9.1 Write unit tests for How It Works page
    - Test hero heading renders
    - Test clicking a process step makes its detail content visible
    - _Requirements: 4.1, 4.4_

- [x] 10. Implement For Teachers page (`app/for-teachers/page.tsx`)
  - Render hero with heading "Your Teaching Career. A More Structured Path Forward."
  - Render "Who Can Participate" eligibility list (4 criteria)
  - Render "What Teachers Get" cards (7 benefit cards) using `FeatureCard`
  - Render "Teacher Journey" steps
  - Render "Teacher Portal Preview" dashboard mockup section
  - Render "Payment Problems" flagging mechanism section
  - _Requirements: 5.1–5.6_
  - [ ]* 10.1 Write unit test for For Teachers page
    - Test hero heading, eligibility criteria count, and benefit card titles render
    - _Requirements: 5.1–5.3_

- [x] 11. Implement For Schools page (`app/for-schools/page.tsx`)
  - Render hero with heading "Build a Stronger Teaching Workforce"
  - Render "Who Can Participate" eligibility section
  - Render "What Schools Can Do" 8 responsibility cards using `FeatureCard`
  - Render "School Journey" steps
  - Render "School Financial Commitment" section (GH₵1,500/teacher/month breakdown)
  - Render "School Dashboard Preview" mockup section
  - _Requirements: 6.1–6.6_
  - [ ]* 11.1 Write unit test for For Schools page
    - Test hero heading, 8 responsibility card titles render, GH₵1,500 appears
    - _Requirements: 6.1, 6.3, 6.5_

- [x] 12. Implement Payments & Protection page (`app/payments/page.tsx`)
  - Render hero with heading "A More Transparent Path to Teacher Payments"
  - Render CAMDM explanation section
  - Render "Monthly Payment Cycle" visual using `ProcessStep` components in a horizontal flow (data from `data/paymentSteps.ts`)
  - Render "Payment Breakdown" section (GH₵1,500 / GH₵1,300 / GH₵200)
  - Render "Payment Channels" section (4 channels)
  - Render "Payment Protection" section (5 flaggable issue types)
  - Render "48-Hour Cure Process" visual
  - _Requirements: 7.1–7.7_
  - [ ]* 12.1 Write unit test for Payments page
    - Test hero heading, payment breakdown figures, and all 4 channel names render
    - _Requirements: 7.1, 7.4, 7.5_

- [x] 13. Implement Programme Pathways page (`app/pathways/page.tsx`)
  - Render hero with heading "Three Pathways. One Stronger Teaching Workforce."
  - Render three `TrackCard` components (A, B1, B2) from `data/pathways.ts`
  - Apply distinct accent colours per track for visual differentiation
  - _Requirements: 8.1–8.5_
  - [ ]* 13.1 Write unit test for Pathways page
    - Test hero heading and all three track card titles render
    - _Requirements: 8.1–8.4_

- [x] 14. Implement Impact page (`app/impact/page.tsx`)
  - Render hero with heading "Building a Stronger Future for Ghana's Education Workforce"
  - Render statistics (50,000 Teachers, 16,674 Schools, 24-Month Journey) using `StatCard`
  - Render 7 "Expected Impact" `FeatureCard` items
  - Render "National Coverage" section with a Ghana map visualisation (SVG or image) referencing 16 regions
  - Render "Transition Possibilities" section
  - _Requirements: 9.1–9.5_
  - [ ]* 14.1 Write unit test for Impact page
    - Test hero heading, stat values, and 7 impact card titles render
    - _Requirements: 9.1–9.4_

- [x] 15. Implement Access & Technology page (`app/access/page.tsx`)
  - Render hero with heading "Access NPTEP Wherever You Are"
  - Render three access channel sections: Web Portal, PWA, USSD
  - Render USSD interaction visual (Dial → Check Payment → Flag Issue → Receive Status) as a step diagram
  - Render "Security & Data Protection" section
  - _Requirements: 10.1–10.4_
  - [ ]* 15.1 Write unit test for Access page
    - Test hero heading, three channel names, and USSD step labels render
    - _Requirements: 10.1–10.3_

- [x] 16. Implement FAQs page (`app/faqs/page.tsx`)
  - Mark page as `"use client"` to manage per-category accordion state
  - Import `FAQCategory[]` from `data/faqs.ts`
  - For each category, render a section heading and a list of `AccordionItem` components
  - Manage `openIndex` state per category; pass `isOpen` and `onToggle` to each `AccordionItem`
  - _Requirements: 11.1–11.4_
  - [ ]* 16.1 Write unit tests for FAQs page
    - Test all 5 category headings render
    - Test that clicking a FAQ item expands it
    - Test that clicking a second FAQ item in the same category collapses the first
    - _Requirements: 11.1–11.3_

- [x] 17. Implement Contact & Support page (`app/contact/page.tsx`)
  - Render hero with heading "We're Here to Help"
  - Render 5 contact channel cards (General Enquiries, Teacher Support, School Support, Payment Support, Programme/Institutional Enquiries)
  - Render `<ContactForm />` component
  - _Requirements: 12.1–12.5_
  - [ ]* 17.1 Write unit test for Contact page
    - Test hero heading and all 5 contact channel names render
    - _Requirements: 12.1, 12.2_

- [x] 18. Add custom 404 page (`app/not-found.tsx`)
  - Render branded "Page Not Found" message with a link back to Home
  - _Requirements: 16.1_

- [x] 19. Checkpoint — ensure all tests pass
  - Run `npx jest --ci` and confirm all unit, property-based, and accessibility tests pass
  - Fix any failures before continuing
  - Ask the user if any questions arise at this point

- [x] 20. Implement page-level heading hierarchy property test
  - Create a test file that renders each of the 11 page components using RTL
  - For each page, extract all heading elements (`h1`–`h6`)
  - Assert exactly one `<h1>` exists per page
  - Assert no heading level is skipped in the sequence
  - Run as `test.each` parameterised over all 11 pages (minimum coverage equivalent to 100 scenarios)
  - **Property 3: Page Heading Hierarchy Invariant**
  - **Validates: Requirements 14.3**
  - `// Feature: nptep-website, Property 3: Page heading hierarchy invariant`

- [x] 21. Implement accessibility audit tests for all pages
  - Create a test file that renders each of the 11 pages using RTL and runs `jest-axe` `toHaveNoViolations()` against each
  - Fix any violations found (missing alt text, unlabelled inputs, colour contrast flags)
  - _Requirements: 14.1, 14.2, 14.4, 14.5, 14.6_

- [ ] 22. Responsive layout verification and Tailwind polish
  - Review all pages at 375 px, 768 px, and 1280 px breakpoints (use RTL viewport mocking or browser DevTools)
  - Ensure multi-column sections collapse to single-column on mobile using Tailwind responsive prefixes (`md:`, `lg:`)
  - Verify all images use `<Image>` component with explicit dimensions and `alt` text
  - _Requirements: 13.1, 13.2, 13.3, 14.2, 16.2_

- [x] 23. Final checkpoint — build and full test suite
  - Run `npx next build` and confirm it completes without TypeScript or ESLint errors
  - Run `npx jest --ci` one final time and confirm all tests pass
  - Ensure all 11 pages are present in the build output
  - Ask the user if any questions arise

---

## Notes

- Tasks marked with `*` are optional test sub-tasks and can be skipped for a faster MVP build
- Each task references specific requirements for traceability
- All monetary values use Ghanaian Cedi (GH₵)
- Poppins font is loaded once in `app/layout.tsx` and propagated via Tailwind's `font-sans` override
- Ghana accent colours (`ghana-red`, `ghana-gold`, `ghana-green`) are available as Tailwind utilities throughout the project
- Property tests (Tasks 4.2, 5.2, 20) validate universal correctness guarantees; each runs a minimum of 100 iterations
- The `validateForm()` function in `ContactForm.tsx` is a pure function and should be extracted to `lib/validateContactForm.ts` to make it independently testable
