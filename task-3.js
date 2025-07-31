// Task-3:
// Write a function to count the number of vowels in a string.
function countVowel(sentences){
    let count = 0;
    const senLowercase = sentences.toLowerCase()
    for(const sentence of senLowercase){
        if(sentence === "a" || sentence ==="e" || sentence ==="i" || sentence ==="o" ||sentence==="u"){
            count = count+1;
        }
    }
    return count;
}
const sentences = countVowel("selim")
console.log(sentences)
