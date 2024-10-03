//Task is to print the title and url of a web page using Playwright

import {chromium, test} from "@playwright/test";

test(`Launch, load website and print the title`, async () => {

//Launch Chromium in non-headless mode
const browserLaunch = await chromium.launch({headless : false});
//Create a new browser context
const browserContext = await browserLaunch.newContext();
//Open a new page within the browser context.
const browserPage = await browserContext.newPage();
//Load the url https://login.salesforce.com/
await browserPage.goto("https://login.salesforce.com");
 //Get the url of the page
const url = browserPage.url();
console.log(`The url of the page is ${url}`);
//Get the title of the page
const title = browserPage.title();
console.log(`The title of the page is ${title}`);
await browserPage.waitForTimeout(3000);

    //Close the page, context and browser instance
    await browserPage.close();
    await browserContext.close();
    await browserLaunch.close();
})
