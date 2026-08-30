import { test, expect } from '@playwright/test';

test('maximize browser', async ({ browser }) => {

    const context = await browser.newContext({
        viewport: null
    });

    const page = await context.newPage();

    await page.goto('https://www.google.com');

    await page.waitForTimeout(2000);

});
