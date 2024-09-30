// Assignment Details:
// Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
// Assignment Requirements:
// 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode
// 2. Call that function from the javascript


// printing the odd numbers using for loop
console.log("Output using for loop")
function printOddNumbers(startNum,endNum){
    console.log(`The odd numbers between ${startNum} and ${endNum} are : `)
    // using for loop
    for (let number = startNum; number<=endNum;number++){
        if(number%2!=0){
            console.log(number);
        }
    }
}
printOddNumbers(1,25);

// printing the odd numbers using while loop
console.log("Output using while loop:")
function printOdd(firstNum,secondNum){
    console.log(`The odd numbers between ${firstNum} and ${secondNum} are : `)
    let num=firstNum;
    while(num<=secondNum){
        if(num%2 != 0){
        console.log(num)
        }
        num++;
    }
}

printOdd(1,7);