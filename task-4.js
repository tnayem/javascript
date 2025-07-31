// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

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
const myName = longestWord("I am learning Programming to become a programmer")
console.log(myName)

