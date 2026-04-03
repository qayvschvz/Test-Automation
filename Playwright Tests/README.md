# Playwright Automated Tests

This directory contains Playwright direct automation test files for testing the XPeng Configurator website.

## Overview

These are TypeScript-based Playwright tests that directly automate user interactions on the website. Unlike the Cucumber/Gherkin tests, these are written in technical code and designed for developers and QA engineers.

## Test Files

**Total Tests: 32 across 8 files**

- `configurator-ui.spec.ts` - Initial UI tests (3 tests)
- `configurator-load-display.spec.ts` - Page load & display tests (7 tests)
- `configurator-navigation.spec.ts` - Navigation & footer tests (5 tests)
- `configurator-privacy.spec.ts` - Privacy popup tests (4 tests)
- `configurator-responsive.spec.ts` - Responsive design tests (3 tests)
- `configurator-accessibility.spec.ts` - Accessibility tests (5 tests)
- `configurator-data-validation.spec.ts` - Data validation tests (4 tests)
- `configurator-error-handling.spec.ts` - Error handling tests (4 tests)

## Running Tests

### Install Dependencies

```bash
npm install @playwright/test
```

### Run All Tests

```bash
npm test
# or
npm run test:playwright
```

### Run with UI Mode

```bash
npm run test:playwright:ui
```

Opens interactive Playwright UI showing test execution step-by-step.

### Run Specific Test File

```bash
npx playwright test configurator-load-display.spec.ts
```

### Run Single Test

```bash
npx playwright test configurator-load-display.spec.ts -g "Initial page loads"
```

### Run in Debug Mode

```bash
npx playwright test --debug
```

## Test Structure

Each test file follows this pattern:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Test Suite Name', () => {
  test.beforeEach(async ({ page }) => {
    // Setup: Navigate and handle popup
    await page.goto(baseURL);
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko")');
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
  });

  test('Test Case Name', async ({ page }) => {
    // Test implementation
    await expect(page.getByText('Expected Text')).toBeVisible();
  });
});
```

## Key Testing Patterns

### Handling Privacy Popup

```typescript
const acceptButton = page.locator(
  'button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko'
).first();
if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
  await acceptButton.click();
}
```

### Using Regex Patterns for Dynamic Content

```typescript
// Prices may have spaces as thousands separators
const prices = [
  /194\s*900\s*PLN/,
  /252\s*900\s*PLN/,
  /197\s*900\s*PLN/
];

for (const price of prices) {
  await expect(page.getByText(price).first()).toBeVisible();
}
```

### Responsive Testing with Different Viewports

```typescript
const context = await browser.newContext({
  viewport: { width: 375, height: 667 },
  isMobile: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)'
});
const page = await context.newPage();
```

### Safe Element Interactions

```typescript
// Check visibility before clicking
if (await button.isVisible({ timeout: 3000 }).catch(() => false)) {
  await button.click();
}

// Handle missing elements gracefully
const link = page.locator('a:has-text("Text")').first();
if (await link.isVisible().catch(() => false)) {
  await expect(link).toBeEnabled();
}
```

## Configuration

Tests use default Playwright configuration. Key settings:

- **Timeout**: 30 seconds per test
- **Retries**: 0 (no automatic retries)
- **Workers**: Parallel test execution
- **Report**: HTML report generated in playwright-report/

View the report:

```bash
npx playwright show-report
```

## Browser Support

By default, tests run on Chromium. To run on other browsers:

```bash
# Firefox
npx playwright test --project=firefox

# WebKit (Safari)
npx playwright test --project=webkit

# All browsers
npx playwright test --project=chromium --project=firefox --project=webkit
```

## Debugging

### Using DevTools Inspector

```bash
npx playwright test --debug
```

This pauses at each step and opens the Playwright Inspector for interactive debugging.

### Adding Breakpoints

```typescript
await page.pause(); // Manual breakpoint in test
```

### Screenshots and Videos

See `playwright.config.ts` for screenshot and video recording settings:

```typescript
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
}
```

## Common Issues & Solutions

### Privacy Popup Not Dismissing

Problem: Privacy popup selector doesn't match
Solution: Verify the current button text on the website

```typescript
// Alternative selectors to try
const btn1 = page.locator('button:has-text("Zaakceptuj wszystko")');
const btn2 = page.getByRole('button', { name: 'Zaakceptuj wszystko' });
const btn3 = page.locator('[data-testid="accept-button"]');
```

### Element Not Found

Problem: Selector doesn't match element

```typescript
// Debug strategy
await page.pause(). // Pause and inspect page
// Or
const allText = await page.locator('//body').textContent();
console.log(allText); // Log all page text
```

### Timeout Issues

Problem: "Waiting for getByText('...') failed: Timeout"

```typescript
// Increase timeout
await expect(element).toBeVisible({ timeout: 15000 });

// Or add wait
await page.waitForLoadState('domcontentloaded', { timeout: 10000 });
```

## Test Coverage

### Page Load & Display (7 tests)
- ✅ Page loads successfully
- ✅ All models display with prices
- ✅ Price format validation
- ✅ Configure buttons visibility
- ✅ Navigation to configuration pages

### Navigation (5 tests)
- ✅ Footer sections visibility
- ✅ Model links functionality
- ✅ About Us page navigation
- ✅ Downloads section access
- ✅ Contact links functionality

### Privacy & Cookies (4 tests)
- ✅ Privacy popup displays
- ✅ Accept all cookies
- ✅ Decline cookies
- ✅ Save settings

### Responsive Design (3 tests)
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667 with iPhone)

### Accessibility (5 tests)
- ✅ Keyboard navigation (Tab)
- ✅ Enter key functionality
- ✅ Heading hierarchy
- ✅ Color contrast
- ✅ Link identification

### Data Validation (4 tests)
- ✅ Price accuracy
- ✅ Model information
- ✅ Currency consistency
- ✅ No duplicates

### Error Handling (4 tests)
- ✅ Back button functionality
- ✅ Rapid click handling
- ✅ Page refresh handling
- ✅ Footer link stability

## Comparison with Cucumber Tests

| Aspect | Playwright | Cucumber |
|--------|-----------|----------|
| Language | TypeScript | Gherkin (Plain English) |
| For | Developers | Business & Technical |
| Complexity | Higher | Lower |
| Flexibility | Maximum | Limited to Given/When/Then |
| Speed | Fast | Slightly slower (step overhead) |
| Readability | Technical | Business-friendly |
| Execution | Direct | Through step definitions |

## Integration with CI/CD

### GitHub Actions Example

```yaml
name: Playwright Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-tests
          path: playwright-report/
```

## Documentation

- [Playwright Documentation](https://playwright.dev)
- [Locators Reference](https://playwright.dev/docs/locators)
- [Test API](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)

## Test Plan Document

For comprehensive test plan with scenarios, see [`XPENG-CONFIGURATOR-TEST-PLAN.md`](XPENG-CONFIGURATOR-TEST-PLAN.md)
