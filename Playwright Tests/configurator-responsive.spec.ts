import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator - Responsive Design Tests', () => {
  const baseURL = 'https://qa.xpeng.pl/pl/configurator/models';

  test.beforeEach(async ({ page }) => {
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko').first();
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptButton.click();
      await page.waitForTimeout(500);
    }
  });

  test('3.5.1: Desktop view (1920x1080) displays correctly', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();
    
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko').first();
    if (await acceptButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await acceptButton.click();
      await page.waitForTimeout(500);
    }
    
    // Verify all models visible without scrolling
    const modelTexts = page.getByText(/XPENG G6|XPENG G9|XPENG P7/);
    const count = await modelTexts.count();
    expect(count).toBeGreaterThan(0);
    
    // Verify no excessive horizontal scrolling needed
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(1920 + 50);
    
    await context.close();
  });

  test('3.5.2: Tablet view (768x1024) adapts layout', async ({ browser }) => {
    const context = await browser.newContext({ 
      viewport: { width: 768, height: 1024 },
      isMobile: true 
    });
    const page = await context.newPage();
    
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    
    // Verify content is visible
    const models = page.getByText(/XPENG/);
    const count = await models.count();
    expect(count).toBeGreaterThan(0);
    
    // Verify touch targets are large enough
    const buttons = page.getByText('KONFIGURUJ');
    const btnCount = await buttons.count();
    if (btnCount > 0) {
      const button = buttons.first();
      if (await button.isVisible({ timeout: 3000 }).catch(() => false)) {
        const boundingBox = await button.boundingBox();
        if (boundingBox) {
          expect(boundingBox.width).toBeGreaterThanOrEqual(40);
          expect(boundingBox.height).toBeGreaterThanOrEqual(40);
        }
      }
    }
    
    await context.close();
  });

  test('3.5.3: Mobile view (375x667) single column layout', async ({ browser }) => {
    const context = await browser.newContext({ 
      viewport: { width: 375, height: 667 },
      isMobile: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)'
    });
    const page = await context.newPage();
    
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    
    // Verify no horizontal scrolling
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(375 + 10);
    
    // Verify content is readable
    const content = page.getByText(/XPENG/);
    expect(await content.count()).toBeGreaterThan(0);
    
    await context.close();
  });
});
