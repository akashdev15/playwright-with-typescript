import{test , expect , Page} from "@playwright/test"

test("playwright with typesscript" ,async({page})=>{

await page.goto("https://www.google.com/")

await expect(page).toHaveTitle("Google")
})