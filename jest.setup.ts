import "@testing-library/jest-dom";
import { configureAxe } from "jest-axe";

// Extend jest-axe matchers
configureAxe({
  rules: {
    // Disable colour-contrast rule in unit tests — tested manually in browser
    "color-contrast": { enabled: false },
  },
});

// Extend expect with jest-axe matchers
import { toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);
