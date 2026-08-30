import { test, expect } from '@playwright/test';

test('get attribute', async ({ page }) => {

    await page.goto('https://www.google.com');

    const value = await page.locator('textarea[name="q"]').getAttribute('name');

    console.log(value);

});
