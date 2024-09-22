// Assignment Details:
// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
// corresponding string indicating the type.

// Assignment Requirements:
// 1. Create a function named that takes a number as a parameter.
// 2. Declare and initialize the variable.
// 3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
// and to handle the case when the number is zero.
// 4. Return the corresponding string value for each case.
// 5. Call the function and print the result.

function numberType(){
    let number = 0;
    if(number ==0){
        console.log("The number " + number + " is zero.");
    }
    else if(number < 0){
        console.log("The number " + number + " is a negative number.");
    }
    else {
        console.log("The number " + number + " is a positive number.");
    }
}
numberType();