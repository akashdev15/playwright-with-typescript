import{test , expect } from "@playwright/test"

test("Playwright" , async({page})=>{

 await page.goto("https://github.com/")

 await page.getByPlaceholder("test-1")


})
