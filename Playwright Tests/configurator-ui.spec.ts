import { test, expect } from '@playwright/test';

test.describe('XPeng Configurator UI Tests', () => {
  test('should load the configurator page and display models', async ({ page }) => {
    // Navigate to the configurator page
    await page.goto('https://qa.xpeng.pl/pl/configurator/models');

    // Check page title
    await expect(page).toHaveTitle("Configurator");

    // Check that the main heading is visible
    await expect(page.locator('text=Wybierz model')).toBeVisible();

    // Check that XPENG G6 is displayed
    await expect(page.locator('h2:has-text("XPENG G6")')).toBeVisible();
    await expect(page.locator('text=194 900 PLN')).toBeVisible();

    // Check that XPENG G9 is displayed
    await expect(page.locator('h2:has-text("XPENG G9")')).toBeVisible();
    await expect(page.locator('text=252 900 PLN')).toBeVisible();

    // Check that XPENG P7+ is displayed
    await expect(page.locator('h2:has-text("XPENG P7+")')).toBeVisible();
    await expect(page.locator('text=197 900 PLN')).toBeVisible();

    // Check that KONFIGURUJ buttons are present
    const konfigurujButtons = page.locator('text=KONFIGURUJ');
    await expect(konfigurujButtons).toHaveCount(3);

    // Check navigation menu items
    await expect(page.locator('h5:has-text("Modele")')).toBeVisible();
    await expect(page.locator('h5:has-text("O nas")')).toBeVisible();
    await expect(page.locator('h5:has-text("Do pobrania")')).toBeVisible();
    await expect(page.locator('h5:has-text("Kontakt")')).toBeVisible();
  });

  // test('should navigate to G6 configuration page', async ({ page }) => {
  //   await page.goto('https://qa.xpeng.pl/pl/configurator/models');

  //   // Click on the KONFIGURUJ button for G6 (first one)
  //   const g6Button = page.locator('a:has-text("KONFIGURUJ")').first();
  //   await g6Button.click();

  //   // Check that we navigate to the configure page
  //   await expect(page).toHaveURL(/configure/);
  //   await expect(page.locator('h2:has-text("XPENG G6")')).toBeVisible();
  // });

  test('should handle privacy settings popup', async ({ page }) => {
    await page.goto('https://qa.xpeng.pl/pl/configurator/models');

    // Check if privacy popup appears
    const privacyPopup = page.locator('text=Ustawienia prywatności');
    if (await privacyPopup.isVisible()) {
      // Accept all cookies or close the popup
      const acceptButton = page.locator('text=Zaakceptuj wszystko');
      if (await acceptButton.isVisible()) {
        await acceptButton.click();
      }
    }

    // Verify the popup is handled
    await expect(page.locator('text=Wybierz model')).toBeVisible();
  });
});
