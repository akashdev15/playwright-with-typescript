import{test , expect , Page} from "@playwright/test"

test("playwright with typesscript" ,async({page})=>{

    await page.goto("https://www.zomato.com/")

await page.getByAltText("menu icon").nth(0)

await page.waitForTimeout(10000)



})