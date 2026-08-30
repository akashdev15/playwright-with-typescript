import { test, expect } from '@playwright/test';

test('get inner text', async ({ page }) => {

    await page.goto('https://www.google.com');

    const text = await page.locator('body').innerText();

    console.log(text);

});
