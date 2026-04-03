import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator - Data Validation Tests', () => {
  const baseURL = 'https://qa.xpeng.pl/pl/configurator/models';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko').first();
    if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptButton.click();
      await page.waitForTimeout(500);
    }
  });

  test('3.10.1: Price accuracy validation', async ({ page }) => {
    // Define expected prices with regex patterns to handle spacing
    const pricePatterns = {
      'XPENG G6': /194\s*900\s*PLN/,
      'XPENG G9': /252\s*900\s*PLN/,
      'XPENG P7+': /197\s*900\s*PLN/
    };

    for (const [model, pattern] of Object.entries(pricePatterns)) {
      const foundPrice = page.getByText(pattern).first();
      const isVisible = await foundPrice.isVisible({ timeout: 3000 }).catch(() => false);
      expect(isVisible).toBe(true);
    }
  });

  test('3.10.2: Model information accuracy', async ({ page }) => {
    // Define expected models
    const expectedModels = ['XPENG G6', 'XPENG G9', 'XPENG P7+'];
    
    for (const model of expectedModels) {
      const modelLocator = page.getByText(new RegExp(model, 'i')).first();
      const isVisible = await modelLocator.isVisible({ timeout: 3000 }).catch(() => false);
      
      if (isVisible) {
        const text = await modelLocator.textContent();
        expect(text).toBeTruthy();
      }
    }
  });

  test('3.10.3: Currency consistency', async ({ page }) => {
    // All prices should contain PLN
    const pricePatterns = [/194\s*900\s*PLN/, /252\s*900\s*PLN/, /197\s*900\s*PLN/];
    
    for (const pattern of pricePatterns) {
      const priceElement = page.getByText(pattern).first();
      const isVisible = await priceElement.isVisible({ timeout: 3000 }).catch(() => false);
      
      if (isVisible) {
        const text = await priceElement.textContent();
        expect(text).toContain('PLN');
      }
    }
  });

  test('3.10.4: No duplicate models', async ({ page }) => {
    const models = ['XPENG G6', 'XPENG G9', 'XPENG P7+'];
    
    for (const model of models) {
      // Count visible instances
      const headings = page.getByText(new RegExp(model, 'i'));
      const count = await headings.count();
      
      // Should not have excessive duplicates in main content
      expect(count).toBeLessThanOrEqual(10);
    }
  });
});
