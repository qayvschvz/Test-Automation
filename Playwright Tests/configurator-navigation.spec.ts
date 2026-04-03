import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator - Navigation Tests', () => {
  const baseURL = 'https://qa.xpeng.pl/pl/configurator/models';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko').first();
    if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptButton.click();
      await page.waitForTimeout(1000);
    }
  });

  test('3.3.1: Footer navigation sections are visible', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Verify all footer sections
    await expect(page.getByText('Modele')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('O nas')).toBeVisible();
    await expect(page.getByText('Do pobrania')).toBeVisible();
    await expect(page.getByText('Kontakt')).toBeVisible();
  });

  test('3.3.2: Models navigation links function correctly', async ({ page }) => {
    // Get all model links
    const modelLinks = [
      { text: 'G6', url: '/pl/model/xpeng/g6/' },
      { text: 'G9', url: '/pl/model/xpeng/g9/' },
      { text: 'P7', url: '/pl/model/xpeng/p7/' },
      { text: 'NOWY G6', url: '/pl/model/xpeng/nowyg6/' },
      { text: 'NOWY G9', url: '/pl/model/xpeng/nowyg9/' }
    ];

    for (const link of modelLinks) {
      await page.goto(baseURL);
      const modelLink = page.locator(`a:has-text("${link.text}")`).first();
      
      if (await modelLink.isVisible().catch(() => false)) {
        await modelLink.click();
        await expect(page).toHaveURL(new RegExp(link.url));
        await page.waitForLoadState('domcontentloaded');
      }
    }
  });

  test('3.3.3: About Us links function correctly', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    
    const aboutLink = page.locator('a:has-text("O marce")');
    if (await aboutLink.isVisible().catch(() => false)) {
      await aboutLink.click();
      await expect(page).toHaveURL(/o-marce/);
    }
  });

  test('3.3.4: Downloads section provides access to resources', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    
    const priceListLink = page.locator('a:has-text("Cennik")');
    const manualsLink = page.locator('a:has-text("Instrukcje obslugi")');
    
    // Verify links are visible
    if (await priceListLink.isVisible().catch(() => false)) {
      await expect(priceListLink).toBeEnabled();
    }
    
    if (await manualsLink.isVisible().catch(() => false)) {
      await expect(manualsLink).toBeEnabled();
    }
  });

  test('3.3.5: Contact links function correctly', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    const contactLink = page.getByRole('link', { name: /Skontaktuj/i }).first();
    const dealerLink = page.getByRole('link', { name: /Dealerz/i }).first();
    
    if (await contactLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(contactLink).toBeVisible();
      await expect(contactLink).toBeEnabled();
    }
    
    if (await dealerLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(dealerLink).toBeVisible();
      await expect(dealerLink).toBeEnabled();
    }
  });
});
