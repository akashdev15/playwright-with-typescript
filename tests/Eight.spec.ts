import{test , expect , Page} from "@playwright/test"

test("playwright with typesscript" ,async({page})=>{

await page.goto("https://open.spotify.com/")

await page.getByTestId("search-input")
})