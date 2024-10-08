// Assignment Details:
// Complete the following tasks to practice function declarations, arrow functions, anonymous 
// functions, and callback functions in JavaScript.
// Assignment Requirements:
// Task 1: Function Declaration
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
// <name>!" to the console.
function userProfile(name){
    console.log(`Hello ${name}`)
}

userProfile("Smithi");

// Task 2: Arrow Function
// Create an arrow function named `double` that takes a number as a parameter and returns 
// double its value.

double = (number) =>{
    let value = number*2;
    return(value);
}
console.log(double(1012));
// Task 3: Anonymous Function
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
// after 2 seconds.
setTimeout(() => {
    console.log("This message is delayed by 2 seconds.");
  }, "2000");

// Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside 
// `getUserData`, stimulate fetching data with `setTimeout` and then call the callback function 
// with a user object after 3 seconds.
// Call the `getUserData` function and log the user's name and age using the callback function.

function getUserData(name,age){
    
    console.log(`The user's name is ${name} and the age is ${age}`)
}
setTimeout(()=> {
    getUserData("Smithi",13)},3000);
