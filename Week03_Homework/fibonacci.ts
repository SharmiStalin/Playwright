// Assignment Details:
// Create a TypeScript program that defines a function to compute the nth Fibonacci number using a loop (iterative approach).
// Assignment Requirements:
// 1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative integer, and returns the nth Fibonacci number.
// 2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two Fibonacci numbers and update these iteratively up to `n`.
// 3. Provide example calls to the `fibonacci` function with different integers to demonstrate the function’s functionality.

function fibonacci(n:number) {
    var fibonacciSeries = [0,1];
    for (var i:number = 1; i <= n; i++) {
        var length:number=fibonacciSeries.length;
        var a:number = fibonacciSeries[length - 1];
        var b:number = fibonacciSeries[length-2];
        var c:number = a+b;
        fibonacciSeries = fibonacciSeries.concat(c);
        
    }
 console.log(fibonacciSeries);
}

fibonacci(15)