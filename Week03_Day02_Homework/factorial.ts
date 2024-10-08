function factorial(n:number){
    let result:number = 1;
if(n<=0){
    console.log("Factorial cannot be computed for a negative number")
}
else{
for (let i:number=2;i<=n;i++){
    result= result*i;
    
}
console.log(`The factorial for ${n} is ${result}`);
}

}

factorial(5);
factorial(10);
factorial(-3);