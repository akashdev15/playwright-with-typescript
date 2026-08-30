import{test , expect , Page} from "@playwright/test"

test("get by text" ,async({page})=>{

await page.goto("https://chatgpt.com/")

await page.getByText("Chat")


})