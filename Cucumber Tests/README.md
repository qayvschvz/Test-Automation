# XPeng Configurator - Cucumber/Gherkin Test Suite

This directory contains Cucumber/Gherkin BDD (Behavior-Driven Development) feature files for testing the XPeng Configurator website. These tests are independent from the Playwright direct automation tests and use the same Playwright framework for browser automation.

## Directory Structure

```
Cucumber Tests/
├── accessibility.feature           # Accessibility & Keyboard Navigation Tests
├── data-validation.feature        # Data Validation & Accuracy Tests
├── error-handling.feature         # Error Handling & Edge Cases
├── load-display.feature           # Page Load & Display Tests
├── navigation.feature             # Navigation & Footer Tests
├── privacy.feature               # Privacy & Cookie Consent Tests
├── responsive.feature            # Responsive Design Tests
├── step-definitions/
│   └── steps.js                  # Step implementation with Playwright (CommonJS)
└── README.md                     # This file
```

## What is Cucumber/Gherkin?

Gherkin is a Business-Readable Domain Specific Language (DSL) that allows you to write test cases in plain English. Each feature file contains:

- **Feature**: A high-level description of the functionality being tested
- **Scenario**: Individual test cases written in Given-When-Then format
- **Given**: Initial state/preconditions
- **When**: Action performed by the user
- **Then**: Expected outcome/assertion

### Why Use Cucumber?
- **Business-Friendly**: Non-technical stakeholders can read and understand tests
- **Maintainable**: Tests are separated from implementation logic
- **Reusable**: Common steps can be shared across scenarios
- **Clear Documentation**: Feature files serve as living documentation

## Feature Files Overview

### 1. load-display.feature
Tests for initial page loading and model display:
- Initial page load verification & title checks
- Vehicle model information display (G6, G9, P7+)
- Price format validation (Polish currency format: XXX XXX PLN)
- Configure button visibility and functionality
- Navigation to configuration pages for each model

**Scenarios:** 7

### 2. navigation.feature
Tests for website navigation and footer menu interactions:
- Footer navigation sections visibility (Modele, O nas, Do pobrania, Kontakt)
- Model navigation links (G6, G9, P7)
- About Us ("O marce") link navigation
- Downloads section accessibility (Price lists, Manuals)
- Contact section links functionality

**Scenarios:** 6

### 3. privacy.feature
Tests for privacy popup and cookie management:
- Privacy popup display on initial visit
- Accept all cookies functionality
- Decline cookies option with popup closure
- Save privacy settings workflow
- Cookie consent verification

**Scenarios:** 4

### 4. responsive.feature
Tests for responsive design across different viewport sizes:
- Desktop layout (1920x1080)
- Tablet layout (768x1024 with mobile user agent)
- Mobile layout (375x667 with iPhone user agent)
- Content visibility and proper scrolling on all devices
- Touch target sizing for mobile (minimum 40x40 pixels)

**Scenarios:** 3

### 5. accessibility.feature
Tests for accessibility compliance (WCAG standards):
- Keyboard navigation using Tab key
- Enter key activation of buttons
- Heading hierarchy validation (h1, h2, h3)
- Color contrast validation
- Link identification and keyboard accessibility

**Scenarios:** 5

### 6. data-validation.feature
Tests for accurate data display:
- Price accuracy validation (G6: 194,900 PLN | G9: 252,900 PLN | P7+: 197,900 PLN)
- Model information accuracy and completeness
- Currency consistency (Polish Zloty - PLN)
- No duplicate or excessive model entries

**Scenarios:** 4

### 7. error-handling.feature
Tests for edge cases and graceful error handling:
- Browser back button functionality during navigation
- Multiple rapid clicks handling without crashing
- Page refresh during configuration
- Footer link error handling
- Navigation stability after interactions

**Scenarios:** 4

## Setup Instructions

### 1. Prerequisites

Ensure you have:
- Node.js v24.14.1+ installed ([Download](https://nodejs.org))
- npm v10+ (comes with Node.js)
- Playwright dependencies installed in your project

### 2. Install Cucumber and Dependencies

```bash
npm install @cucumber/cucumber @playwright/test
```

### 3. Update package.json

Make sure your `package.json` includes the following scripts:

```json
{
  "scripts": {
    "test:cucumber": "cucumber-js ./Cucumber\\ Tests/ --require ./Cucumber\\ Tests/step-definitions/steps.js",
    "test:cucumber:tags": "cucumber-js ./Cucumber\\ Tests/ --require ./Cucumber\\ Tests/step-definitions/steps.js --tags",
    "test:cucumber:report": "cucumber-js ./Cucumber\\ Tests/ --require ./Cucumber\\ Tests/step-definitions/steps.js --format html:cucumber-report.html"
  }
}
```

### 4. Verify File Permissions

Ensure all feature files (.feature) and step definitions (.js) are readable:

```bash
# On Windows PowerShell
dir "Cucumber Tests" -Recurse
```

## Running Tests

### Run All Tests

```bash
npm run test:cucumber
```

Output will show:
- `✓` (dot) for passing scenarios
- `F` (F) for failing scenarios
- Progress summary at the end

### Run Specific Feature File

```bash
npx cucumber-js "./Cucumber Tests/load-display.feature" --require "./Cucumber Tests/step-definitions/steps.js"
```

### Run Tests by Tags

First, add tags to your scenarios in feature files:

```gherkin
@smoke @critical
Scenario: Initial page loads successfully
```

Then run:

```bash
# Run only @smoke tests
npm run test:cucumber:tags "@smoke"

# Run @regression but not @skip
npm run test:cucumber:tags "@regression and not @skip"

# Run @smoke OR @critical
npm run test:cucumber:tags "@smoke or @critical"
```

### Generate HTML Report

```bash
npm run test:cucumber:report
```

This creates a `cucumber-report.html` file in your project root with:
- Feature and scenario results
- Execution time per scenario
- Step-by-step execution details
- Error messages and failures

## Step Definition Implementation

The `step-definitions/steps.js` file contains all the step implementations in CommonJS JavaScript format.

### Step Categories

#### Given Steps (Setup & Preconditions)
- `Given I navigate to the XPeng configurator page` - Navigate to base URL
- `Given I dismiss the privacy popup if it appears` - Handle privacy popup
- `Given I open a fresh browser session with no cookies` - Fresh context
- `Given I set my viewport to {int}x{int} (desktop/tablet/mobile)` - Set screen size
- `Given I enable mobile user agent for tablet` - Mobile agent setup
- `Given I set mobile user agent to iPhone` - iPhone specific agent

#### When Steps (User Actions)
- `When the page finishes loading` - Wait for page load
- `When I scroll to the footer` - Scroll to bottom
- `When I click the {first/second/third} KONFIGURUJ button` - Click configure buttons
- `When I click on model link {string}` - Click model links
- `When I press the Tab/Enter key` - Keyboard navigation
- `When I refresh the page` - Reload page
- `When I press the browser back button` - Navigation back
- And 20+ more interaction steps...

#### Then Steps (Assertions & Verifications)
- `Then the page title should be {string}` - Title assertion
- `Then I should see XPENG {model} model displayed` - Model visibility
- `Then the price {int},{int} PLN should be displayed` - Price assertion
- `Then all prices should be displayed in format: XXX XXX PLN` - Format validation
- `Then the URL should contain {string}` - URL verification
- `Then all vehicle models should be visible` - Visibility check
- And 60+ more assertion steps...

### Available Playwright Objects

All steps have access to:
- `page` - Playwright Page object for interactions
- `context` - Browser context for state management
- `browser` - Browser instance lifecycle
- `baseURL` - Base URL constant: `https://qa.xpeng.pl/pl/configurator/models`

### Example Step Implementation

```javascript
When('I click on model link {string}', async function(modelName) {
  const modelLink = page.locator(`a:has-text("${modelName}")`).first();
  if (await modelLink.isVisible({ timeout: 3000 }).catch(() => false)) {
    await modelLink.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(1000);
  }
});
```

## Test Data

**Test Website:** https://qa.xpeng.pl/pl/configurator/models

**Vehicle Models:**
- XPENG G6 - 194,900 PLN (€41,000 approx)
- XPENG G9 - 252,900 PLN (€54,000 approx)
- XPENG P7+ - 197,900 PLN (€42,000 approx)

**Languages:** Polish (Polish selectors for all interactions)

**Key Selectors:**
- Privacy accept button: `button:has-text("Zaakceptuj wszystko")`
- Privacy decline button: `button:has-text("Odmów")`
- Configure buttons: `text=KONFIGURUJ`
- Models: Regex `/XPENG G6|G9|P7/`

## Architecture Overview

### CommonJS Module System

The step definitions use **CommonJS** (not TypeScript or ES6) for maximum compatibility with Cucumber.js:

```javascript
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');
```

### Browser Lifecycle

Each scenario:
1. **Before**: Creates a new browser instance
2. **Steps**: Execute user actions and assertions
3. **After**: Closes context and browser

```javascript
Before(async function() {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function() {
  await context.close();
  await browser.close();
});
```

### Timeout Handling

Tests use a combination of:
- **Explicit waits**: `waitForLoadState('domcontentloaded', { timeout: 5000 })`
- **Action timeouts**: `click({ timeout: 5000 })`
- **Visibility checks**: `isVisible({ timeout: 3000 })`
- **Pause waits**: `waitForTimeout(500)`

## Best Practices & Patterns

1. **Resilient Selectors**
   - Use regex patterns: `/XPENG G\d+/`
   - Fallback selectors for dynamic content
   - Error handling with `.catch(() => false)`

2. **Proper Waits**
   - Avoid deprecated `waitForLoadState('networkidle')`
   - Use `'domcontentloaded'` for page load
   - Add explicit timeouts for navigation

3. **Error Handling**
   - Wrap risky operations in try-catch
   - Use `.catch()` on promise-based actions
   - Don't fail on missing optional elements

4. **Data Flexibility**
   - Regex patterns for price values with spaces
   - Case-insensitive text matching
   - Numeric parameter handling

5. **Clear Scenario Structure**
   ```gherkin
   Scenario: User can configure a model
     Given I navigate to the page
     And I dismiss the privacy popup if it appears
     When I click the configure button
     Then the page should load the configuration
     And the URL should contain "configure"
   ```

## Comparison: Cucumber vs Playwright

| Aspect | Cucumber (Gherkin) | Playwright Tests |
|--------|-------------------|------------------|
| **Language** | Plain English (Gherkin) | TypeScript/JavaScript |
| **Audience** | Business + Technical | Technical Only |
| **Reusability** | High (shared steps) | Medium (helper functions) |
| **Flexibility** | Lower (structured format) | Higher (can write any code) |
| **Maintainability** | Better for feature changes | Better for complex logic |
| **Local Run** | `npm run test:cucumber` | `npm test` |

**Recommendation:**
- Use Cucumber for acceptance testing & stakeholder validation
- Use Playwright for unit-level and technical testing
- Both use the same Playwright browser automation

## Troubleshooting

### Tests Not Finding Elements

**Problem:** Steps fail with "Locator resolved to no elements"

**Solutions:**
```javascript
// 1. Check Polish selectors match page content
// Use DevTools Inspector to verify text

// 2. Add fallback selectors
const link = page.locator('a[href*="g6"]')
  .or(page.getByText(/G6|g6/i));

// 3. Increase timeouts for slow networks
await link.isVisible({ timeout: 10000 });
```

### Privacy Popup Not Dismissing

**Problem:** Popup appears but click doesn't work

**Solution:**
```javascript
// 1. Verify current button selector on page
// 2. Try alternative selectors
const btn = page.locator('button:has-text("Zaakceptuj wszystko")')
  .or(page.getByRole('button', { name: 'Zaakceptuj wszystko' }));
  
// 3. Add click force option
await btn.click({ force: true });
```

### Navigation Timeouts

**Problem:** "Timed out after 15000ms"

**Solution:**
```javascript
// Reduce timeout expectations
await page.waitForLoadState('domcontentloaded', { timeout: 5000 });

// Or increase timeouts for slow environments
await page.waitForTimeout(2000);
```

### Module Not Found Errors

**Problem:** "Cannot find module '@cucumber/cucumber'"

**Solution:**
```bash
# Reinstall node_modules
npm install

# Verify cucumber.js is installed
npm list @cucumber/cucumber
```

## Integration with CI/CD

### GitHub Actions Example

```yaml
name: Cucumber Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run test:cucumber:report
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: cucumber-report
          path: cucumber-report.html
```

## Performance & Parallel Execution

For faster test execution:

```bash
# Run with 4 parallel workers
npx cucumber-js ./Cucumber\ Tests/ --require ./Cucumber\ Tests/step-definitions/steps.js --parallel 4
```

**Note:** Each parallel worker uses its own browser instance. Ensure enough system resources.

## Reporting

### HTML Report Format

The `cucumber-report.html` includes:
- ✅ Passing scenarios (green)
- ❌ Failing scenarios (red)
- ⏭️ Skipped scenarios (yellow)
- 📊 Summary statistics
- ⏱️ Execution times
- 🔍 Step-by-step details
- 📝 Error stack traces

### JSON Report

For CI/CD integration:

```json
{
  "name": "load-display.feature",
  "scenarios": [
    {
      "name": "Initial page loads successfully",
      "successful": true,
      "duration": 3500
    }
  ]
}
```

## Documentation References

- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [Gherkin Reference](https://cucumber.io/docs/gherkin/)
- [Playwright Documentation](https://playwright.dev)
- [CommonJS Module System](https://nodejs.org/api/modules.html)

## Support & Contributing

For issues or improvements:
1. Check feature files for test expectations
2. Review step implementations for selector details
3. Verify page selectors haven't changed
4. Consider network/timing issues for flaky tests

## Connection to Playwright Tests

These Cucumber tests are **independent implementations** of the same test scenarios found in the [Playwright Tests](../Playwright%20Tests/) folder. 

- **Playwright Tests**: Direct TypeScript automation tests (`*.spec.ts`)
- **Cucumber Tests**: BDD/Gherkin format tests (`*.feature` with `.js` steps)

Both frameworks test the same website (`https://qa.xpeng.pl/pl/configurator/models`) but provide different approaches to test organization and reporting.

Choose based on your needs:
- **Cucumber**: For stakeholder-facing test documentation
- **Playwright**: For developer testing and technical assertions
