//launch two separate browser instances using Playwright

//Load Red Bus in an Edge browser instance and verify the page title and URL
import {msedge,chromium,firefox, webkit, test} from "@playwright/test";

test(`Load redbus.in in edge browser`,async () => {
//Launch msedge in non-headless mode,load context and page on edge browser
let browserLaunch = await chromium.launch({headless : false,channel: "msedge"});
let context = await browserLaunch.newContext();
let page = await context.newPage();
//load the url on edge
await page.goto("https://www.redbus.in");
//retrieve the url of the page
let pageUrl = page.url();
console.log(`The url of the page is ${pageUrl}`);
//retrieve the title of the page
let pageTitle = page.title();
console.log(`The title of the page is ${pageTitle}`)
await page.waitForTimeout(5000);

    //Close the page, context and browser instance
    await page.close();
    await context.close();
    await browserLaunch.close();
})
//Launch Firefox in non-headless mode, load context and page in Firefox browser
test(`Load flipkart.com in Firefox browser`,async () => {
const browserLaunch = await firefox.launch({Headless : false, channel : "firefox"});
const context = await browserLaunch.newContext();
const page= await context.newPage();
await page.goto("https://www.flipkart.com");
const pageUrl = page.url();
console.log(`The url is ${pageUrl}`)
const pageTitle=page.title();
console.log(`The title of the page is ${pageTitle}`)
await page.waitForTimeout(3000);
await page.close();
await context.close();
await browserLaunch.close();
} )