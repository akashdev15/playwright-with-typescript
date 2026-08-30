import { test , expect ,chromium} from '@playwright/test'
import{ beforeEach } from "node:test"

test("Setting viewport", async({page})=>{

await page.goto("http://www.google.com")

const browser_width=page.viewportSize().width;
const browser_height=page.viewportSize().height;

console.log(browser_width,browser_height)

})