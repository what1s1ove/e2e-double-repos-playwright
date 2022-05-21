import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});


test.describe('New Todo', () => {
  test('link should be in the DOM', async ({ page }) => {
    const link = await page.$('.App-link');

    expect(link).not.toBeNull();
  });
});
