// Assignment Details: 
// Write a function to sum all the values between 1 and n, and return the sum
// Take n = 5, print between 1 and 5, and keep adding the sum of values 
// i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15
// Assignment Requirements: 
// 1. Define a function with parameter `n`.
// 2. Initialize `sum` to 0.
// 3. Iterate from 1 to `n`.
// 4. Add `i` to `sum` in each iteration.
// 5. Print `i` and the current `sum`.
// 6. Return `sum` after the loop.
// 7. Call the function with a specific value.

function sumOfNValues(n){
    
    let sum=0;
    for(i=1;i<=n;i++){
        console.log(`${sum} + ${i} = ${sum+i}`);
        sum = sum+i;

    }
    console.log(`The sum of the value upto ${n} is ${sum}`);
}
sumOfNValues(5);