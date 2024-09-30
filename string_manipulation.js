// function defined to find the length of the last word in a string
function lenOfLastWord(sentence){
let words = sentence.split(" "); //Splitting the sentence into words and assign it to array
let numOfWords = words.length; //Find the number of words in the array
let lastWord = words[numOfWords-1] // Find the last word in the array
let lengthOfLastWord = lastWord.length // finding the length of the last word
console.log(`The length of the last word \"${lastWord}\" is ${lengthOfLastWord}`)
}
// calling the function to find the last word
lenOfLastWord("The world has loads of beautiful souls")

// finding the length of the last word from a string with leading or trailing spaces
let S =  " fly me to the moon "
let trimmingResult = S.trim() //trims the leading and trailing spaces
lenOfLastWord(trimmingResult) // calling the function to find the last word

//to find out if two different words are anagrams
function isAnagram(firstWord,secondWord){
firstWord = firstWord.trim("").toLowerCase().split("").sort().join("");
secondWord = secondWord.trim("").toLowerCase().split("").sort().join("");
if(firstWord===secondWord){
    return true;
}else{
    return false;
}
}
console.log(isAnagram("Listen"," SiLeNt"));
console.log(isAnagram("hellO","WorLD"))
