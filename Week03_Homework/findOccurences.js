// Assignment Details:
// Find the number of occurrences.
// Given the array, const nums = [2,4,5,2,1,2];
// if const k = 2, then output >> 3
// Assignment Requirements:
// 1. Initialize count to 0.
// 2. Loop through the array `nums`.
// 3. If the element equals `k`, increment count.
// 4. Return the count of `k` in `nums`


const numbers=[2,4,5,2,1,2];
let count = 0;
function findOccurence(k){
for (let i=0;i<=(numbers.length);i++){
      if((numbers[i])==k){
        count++;
    }
   
    }
    console.log(count);
}
findOccurence(2)