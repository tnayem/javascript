// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function cToF(c){
    const f = (c*9/5)+32;
    return f;
}
const fahrenheit = cToF(10);
console.log(fahrenheit)