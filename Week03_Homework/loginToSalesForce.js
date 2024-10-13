import { test } from "@playwright/test";

test("Playing around with locators",async ({page}) => {
    page.setDefaultTimeout(40000);
    await page.goto("https://login.salesforce.com/");
    console.log(`The URL is : ${page.url()}`);

//    await page.getByText("username").fill("demosalesmanager");
//    await page.getByLabel("username").fill("demosalesmanager")
const username = page.locator("//input[@id='username']")
await username.fill("sharmistravenkateswar@gmail.com")
await page.getByText("password").fill("crmsfa");    
await page.click(".decorativeSubmit");
})