// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.

// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

// Function expression & if else used to print the value of the browserName
let launchBrowser = function(browserName) 
{
    if(browserName==='Chrome'){
        console.log("The browser is Chrome");
    }
    else if(browserName==='Edge'){
        console.log("The browser is Edge");
    }
    else if (browserName==='Safari'){
        console.log("The browser is Safari");
    }
    else if (browserName===`Firefox`){
        console.log("The browser is Firefox");
    }
    else{
        console.log("unsupported browser");
    }
}

// Function expression & switch case used to print the type of test
let runTests = function(testType)
{
    switch (testType) {
        case 'smoke':
            console.log("The type of test performed is smoke test");
            break;
        case 'sanity':
            console.log("The type of test performed is sanity test");
            break; 
        case 'regression':
            console.log("The type of test performed is regression test");
            break;   
        default:
            console.log("The type of test performed is smoke test");           
            break;
    }
}

launchBrowser("Chrome");
runTests(); //not input provided to test if the default value is returned