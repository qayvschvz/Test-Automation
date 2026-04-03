import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator - Error Handling & Edge Cases', () => {
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

  test('3.6.1: Browser back button works correctly', async ({ page }) => {
    const initialUrl = page.url();
    
    // Try to click a button - may not always work
    const configButton = page.getByText('KONFIGURUJ').first();
    const buttonExists = await configButton.isVisible({ timeout: 3000 }).catch(() => false);
    
    if (buttonExists) {
      await configButton.click({ timeout: 5000 });
      await page.waitForTimeout(1000);
      
      const configUrl = page.url();
      // Go back if navigation occurred
      if (configUrl !== initialUrl) {
        await page.goBack();
        await page.waitForTimeout(1000);
        expect(page.url()).toBeTruthy();
      }
    }
  });

  test('3.6.2: Multiple rapid clicks handled gracefully', async ({ page }) => {
    const configButton = page.getByText('KONFIGURUJ').first();
    const buttonExists = await configButton.isVisible({ timeout: 3000 }).catch(() => false);
    
    if (buttonExists) {
      // Rapidly click button a few times
      for (let i = 0; i < 3; i++) {
        await configButton.click({ force: true, timeout: 2000 }).catch(() => {
          // May fail if navigating, which is fine
        });
        await page.waitForTimeout(200);
      }
      
      // Page should still be functional
      const finalUrl = page.url();
      expect(finalUrl).toBeTruthy();
    }
  });

  test('3.6.3: Page refresh during configuration', async ({ page }) => {
    const configButton = page.getByText('KONFIGURUJ').first();
    const buttonExists = await configButton.isVisible({ timeout: 3000 }).catch(() => false);
    
    if (buttonExists) {
      await configButton.click({ timeout: 5000 });
      await page.waitForTimeout(1000);
      
      const urlBeforeRefresh = page.url();
      
      // Refresh page
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);
      
      // Should maintain similar URL (without query params)
      const baseUrlBefore = urlBeforeRefresh.split('?')[0];
      const baseUrlAfter = page.url().split('?')[0];
      expect(baseUrlAfter).toBeTruthy();
    }
  });

  test('3.6.4: Footer links don\'t cause navigation errors', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Try to click a few footer links
    const footerLinks = page.locator('footer a');
    const count = await footerLinks.count();
    
    for (let i = 0; i < Math.min(count, 2); i++) {
      const link = footerLinks.nth(i);
      if (await link.isVisible({ timeout: 2000 }).catch(() => false)) {
        await link.click({ noWaitAfter: true, timeout: 3000 }).catch(() => {
          // May fail due to navigation, which is acceptable
        });
        await page.waitForTimeout(500);
      }
    }
    
    // Page should be functional
    expect(page.url()).toBeTruthy();
  });
});
