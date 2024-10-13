/* Assignment Requirement
* 1. Declare a const name as browserVersion (global)
* 2. Assign value as Chrome
* 3. Create a function by name getBrowserVersion
* 4. Create if condition inside function to check if browser is chrome, then
* 5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
* 6. Call that function from the javascript */
const browser = "Chrome";

function getBrowserVersion(){
if (browser.startsWith("Chrome")){
    var browserVersion = '129.0.6668.58';
}
else if (browser.startsWith("Safari")){
    var browserVersion = '17.4.23223.23';
}
else if (browser.startsWith("Edge")){
    var browserVersion = '123.8.3456.21';
}
else {
    console.log("The browser is not Chrome, Safari or Edge");
}
console.log("The browser version of " + browser + " is " + browserVersion)
}

getBrowserVersion();