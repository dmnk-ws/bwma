import { test, expect } from '@playwright/test';

test.describe('HS Fulda', () => {
  test('should open and have logo', async ({ page }) => {
    await page.goto('https://www.hs-fulda.de/');

    await expect(page.getByRole('link', { name: 'HS Fulda Logo' })).toBeVisible();
  });

  test('should navigate to study offers', async ({ page }) => {
    await page.goto('https://www.hs-fulda.de/');

    await expect(page.getByText('Datenschutzeinstellungen')).toBeVisible();
    await page.getByRole('button', { name: 'accept essential' }).click();
    await expect(page.getByText('Datenschutzeinstellungen')).not.toBeVisible();

    await page.getByLabel('Global').getByRole('link', { name: 'Studienangebot' }).click();

    expect(page.url()).toContain('/studienangebot');
    await expect(page.getByRole('textbox', { name: 'Label' })).toBeVisible();
  });
});
