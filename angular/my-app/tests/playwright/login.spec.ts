import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('navigates and has title', async ({ page }) => {
    await page.goto('http://localhost:4200/login');


    await expect(page.locator('data-testid=login-title')).toHaveText('Login');
  });

  test('has visible input, button and checkbox elements', async ({ page }) => {
    await page.goto('http://localhost:4200/login');

    await expect(page.locator('data-testid=login-email-input')).toBeVisible();
    await expect(page.locator('data-testid=login-password-input')).toBeVisible();
    await expect(page.locator('data-testid=login-remember-me-checkbox')).toBeVisible();
    await expect(page.locator('data-testid=login-submit-button')).toBeVisible();
  });

  test('has empty initial inputs and disabled submit button', async ({ page }) => {
    await page.goto('http://localhost:4200/login');

    await expect(page.locator('data-testid=login-email-input')).toHaveValue('');
    await expect(page.locator('data-testid=login-password-input')).toHaveValue('');
    await expect(page.locator('data-testid=login-submit-button')).toBeDisabled();
  });

  test('logs user in and redirects to dashboard', async ({ page }) => {
    await page.goto('http://localhost:4200/login');

    await page.fill('data-testid=login-email-input', 'user@example.org');
    await page.fill('data-testid=login-password-input', 'secret');
    await page.click('data-testid=login-submit-button');

    await page.waitForURL('http://localhost:4200/dashboard');

    expect(page.url()).toContain('/dashboard');
    await expect(page.locator('data-testid=dashboard-title')).toHaveText('Dashboard');
  });

  test('has invalid user credentials', async ({ page }) => {
    await page.goto('http://localhost:4200/login');

    await page.fill('data-testid=login-email-input', 'user');
    await page.fill('data-testid=login-password-input', '');
    await page.locator('data-testid=login-password-input').blur();

    await expect(page.locator('data-testid=login-email-error')).toHaveText('Invalid email');
    await expect(page.locator('data-testid=login-password-error')).toHaveText('Password is required');
    await expect(page.locator('data-testid=login-submit-button')).toBeDisabled();
  });
});

