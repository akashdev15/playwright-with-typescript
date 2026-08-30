import { test, expect } from '@playwright/test';

test('get text content', async ({ page }) => {

    await page.goto('https://www.google.com');

    const text = await page.locator('body').textContent();

    console.log(text);

});
