import{test } from "@playwright/test"

test("Playwright locators" ,async({page})=>{

   await page.goto("https://www.google.com/")

   await page.getByText("Gmail").click()


   await page.waitForTimeout(10000)

})