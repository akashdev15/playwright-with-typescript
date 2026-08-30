import{test , expect} from "@playwright/test"

test("get by role" ,async ({page})=>{

await page.goto("https://www.flipkart.com/")

const nexturl_is=await page.getByRole("img")

await page.getByRole("https://rukminim1.flixcart.com/")

await page.waitForTimeout(10000)

})