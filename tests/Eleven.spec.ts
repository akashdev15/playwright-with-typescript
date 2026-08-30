import{test , expect} from "@playwright/test"

test("get by alt text" ,async ({page})=>{

await page.goto("https://www.flipkart.com/")

const cartimg_is=page.getByAltText("Cart")

await cartimg_is.click()

await page.waitForTimeout(10000)

})