import{test , expect ,chromium} from "@playwright/test"

test("Playwright locators" ,async({page})=>{

   await page.goto("https://open.spotify.com/")

   await page.getByTitle("buttonTertiary")

   await page.waitForTimeout(1000)

})
