// Create a Promise named `conditionalPromise` that resolves with the message 
// `"Resolved successfully"` if a random number is greater than 0.5, and rejects with the 
// message `"Rejected"` otherwise. 
// [Hint: Use Math.random()]
// - Use the `conditionalPromise` created to log the resolved or rejected value to the 
// console using `.then` and `.catch`


let conditionalPromise = new Promise((resolve, reject)=> {
    
    let x=Math.random();
    console.log(x);

    if(x>=0.5){
        resolve("Resolved successfully");
    }
    else{
        reject("Rejected");
    }
      
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    conditionalPromise
    .then(result=>{
        console.log(result);
        })
    .catch(error=>{
        console.log(error);
    });