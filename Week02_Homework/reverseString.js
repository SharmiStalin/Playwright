// Assignment Details:
// Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
// palindrome, then test your function with various strings and print the results.
// Assignment Requirements:
// Write a function to reverse the string.
// 1. Convert the input into characters
// 2. Loop them in reverse direction
// 3. Concatenate the string
// 4. Print the new string
// Write a function to check the given string is a palindrome
// [If the given string and reverse string are the same, it is a palindrome]
// 1. Check if the reverse string and original string are the same
// 2. Return true if same, else the false


//Method 1 
//concatenate each character in reverse order to obtain the reverse value of the string
console.log("Method 1 :")
let string = "malayalam";
let revOfString = '';
//finding the length of the string passed
let count = (string.length);
//to find the reverse value of the string
for (i=1;i<=count;i++){
    let tempVal=(string.charAt(string.length-i));
    revOfString = revOfString+tempVal;

 }
 console.log(`The reverse value of the string \"${string}\" is \"`+ revOfString + `\"`)
// check if the string is a palindrome
if(string===revOfString){
    console.log(`The string \"${string}\" is a Palindrome`)
    }
//****************************************************************/
//****************************************************************/


// Method 2
// reversing of string using split character method
console.log("Method 2 :")
let theString = "Welcome";
let theReverseString = '';
function reverseString(){
    let chars = theString.split("");

    for(let x=chars.length-1;x>=0;x--){
        theReverseString=theReverseString+chars[x];
       // console.log(theReverseString);
        }
        console.log(`The reverse value of the string \"${theString}\" is \"`+ theReverseString + `\"`)
        return(theReverseString);
}
reverseString(theString);
// check if the string is a palindrome
let palindrome = false;
if(theString===theReverseString){
    palindrome = true;
    console.log(palindrome);
    console.log(`The string \"${theString}\" is a Palindrome`)
    }
    else{
console.log(palindrome);
console.log(`The string \"${theString}\" is not a Palindrome`)}


// Method 3
// reversing of sentence using split, reverse & join method
console.log("Method 3 :")
let originalString = "Noel saw I was Leon";
function revString(){
let reverseOfString = originalString.split("").reverse().join("");
console.log(`The reverse value of the string \"${originalString}\" is \"`+ reverseOfString + `\"`)
}
revString(originalString)
if(string===revOfString){
    console.log(`The string \"${originalString}\" is a Palindrome`)
    }