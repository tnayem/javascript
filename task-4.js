// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
// const myName = "Md Tasdid Nayemaaaaaa";
// const singleName = myName.split(" ")
// let largestWord = "a"
// for(const singleWOrd of singleName){
//     if(singleWOrd.length>largestWord.length){
//         largestWord = singleWOrd
//     }
// }
// console.log(largestWord)
function longestWord(sentences){
    const singleWOrds = sentences.split(" ")
    let largestWord = "a"
    for(const singleWord of singleWOrds){
        if(singleWord.length>largestWord.length){
            largestWord=singleWord
        }
    }
    return largestWord;
}
const myName = longestWord("My name Md Tasdid Nayem")
console.log(myName)
