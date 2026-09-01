import{ test , expect } from "@playwright/test"

test("Data entry form" ,async ({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")

await page.getByText(`Data Entry Form`)

const user_name= page.getByLabel(`Name:`)
 
await user_name.fill(`Akash`)

const email= page.getByPlaceholder(`Enter Name`)

await email.fill(`akash@123`)

const phone_number= page.locator(`#phone`)

await phone_number.fill(`1234567890`)

await page.getByRole(`radio` ,{name:`Male`}).check()

await page.locator(`#sunday`).check()

const country = page.getByLabel(`Country:`)

await country.selectOption({index:9})




/*
await page.getByRole(`Submit`)

await page.getByAltText(`wikipedia-icon`)

await page.getByLabel(`Email:`)

await page.getByPlaceholder(`Enter Name`).fill(`Akash`)

await page.getByTestId(`name`).fill(`Akash`)

await page.getByTitle(`Automation Testing Practice`)

await page.locator(`.widget Header`)

const sundayCheckbox = page.locator('#sunday')

await sundayCheckbox.uncheck()

const nameInput= page.locator('#name')

await nameInput.fill(`Akash`)

await nameInput.clear()

await nameInput.fill(`Reddy`)

const browser_width=page.viewportSize()?.height

const browser_height=page.viewportSize()?.width

console.log(browser_height,browser_width)

await page.setViewportSize()

 
*/


})