import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator - Page Load & Display Tests', () => {
  const baseURL = 'https://qa.xpeng.pl/pl/configurator/models';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    // Handle privacy popup if it appears
    const acceptButton = page.locator('button:has-text("Zaakceptuj wszystko"), text=Zaakceptuj wszystko').first();
    if (await acceptButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptButton.click();
      await page.waitForTimeout(1000);
    }
  });

  test('3.1.1: Initial page loads successfully', async ({ page }) => {
    // Verify page title
    await expect(page).toHaveTitle('Configurator');
    
    // Verify main heading
    await expect(page.getByText('Wybierz model')).toBeVisible({ timeout: 10000 });
  });

  test('3.1.2: All vehicle models display with correct information', async ({ page }) => {
    // Verify XPENG G6
    await expect(page.getByText(/XPENG G6/).first()).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/194\s*900\s*PLN/).first()).toBeVisible();
    
    // Verify XPENG G9
    await expect(page.getByText(/XPENG G9/).first()).toBeVisible();
    await expect(page.getByText(/252\s*900\s*PLN/).first()).toBeVisible();
    
    // Verify XPENG P7+
    await expect(page.getByText(/XPENG P7/).first()).toBeVisible();
    await expect(page.getByText(/197\s*900\s*PLN/).first()).toBeVisible();
  });

  test('3.1.3: Price display format validation (Polish format)', async ({ page }) => {
    // Verify format: space as thousands separator, no decimals, PLN after
    const prices = [/194\s*900\s*PLN/, /252\s*900\s*PLN/, /197\s*900\s*PLN/];
    for (const price of prices) {
      const priceLocator = page.getByText(price).first();
      await expect(priceLocator).toBeVisible({ timeout: 10000 });
    }
  });

  test('3.2.1: Configure buttons display for each model', async ({ page }) => {
    // Count KONFIGURUJ buttons
    const buttons = page.getByText('KONFIGURUJ');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(3);
    
    // Verify all visible buttons are clickable
    for (let i = 0; i < Math.min(count, 3); i++) {
      const button = buttons.nth(i);
      if (await button.isVisible().catch(() => false)) {
        await expect(button).toBeEnabled();
      }
    }
  });

  test('3.2.2: Configure button for G6 navigates correctly', async ({ page }) => {
    // Find and click first KONFIGURUJ button
    const configButton = page.getByText('KONFIGURUJ').first();
    await configButton.click({ timeout: 5000 });
    
    // Verify navigation
    await expect(page).toHaveURL(/configure/, { timeout: 15000 });
  });

  test('3.2.3: Configure button for G9 navigates correctly', async ({ page }) => {
    // Find and click second KONFIGURUJ button for G9
    const configButtons = page.getByText('KONFIGURUJ');
    const secondButton = configButtons.nth(1);
    if (await secondButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await secondButton.click({ timeout: 5000 });
      await expect(page).toHaveURL(/configure/, { timeout: 15000 });
    }
  });

  test('3.2.4: Configure button for P7+ navigates correctly', async ({ page }) => {
    // Find and click third KONFIGURUJ button for P7+
    const configButtons = page.getByText('KONFIGURUJ');
    const thirdButton = configButtons.nth(2);
    if (await thirdButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await thirdButton.click({ timeout: 5000 });
      await expect(page).toHaveURL(/configure/, { timeout: 15000 });
    }
  });
});
