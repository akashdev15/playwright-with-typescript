import { test, expect } from '@playwright/test';

test('clear textbox', async ({ page }) => {

    await page.goto('https://www.google.com');

    const searchBox = page.locator('textarea[name="q"]');

    await searchBox.fill('Playwright');

    await searchBox.clear();

});
