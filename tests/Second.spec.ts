import{test , expect , chromium} from "@playwright/test"

test("run the test in the chromium" ,async ({})=>{


    const browser=await chromium.launch({channel:"msedge"})

    const context=await browser.newContext()

    const page=await context.newPage()    

    await page.goto("https://www.google.com/")

    await page.close()

})


