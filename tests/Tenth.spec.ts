import{test , expect} from "@playwright/test"

test("get by text" ,async ({page})=>{

await page.goto("https://www.linkedin.com/")

page.getByText("Groups",{exact:true})

await page.waitForTimeout(10000)


})