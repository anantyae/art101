// index.js -Anion Functions and callbacks 
// Author: Anantya
// Date: 5/8/2023

function isOdd(x){
    return (x % 2==1);

}
// test this stuff

console.log("Is 2 Odd?", isOdd(2));
//return as false
console.log("Is 1 Odd?", isOdd(1));
//return as true

array = [450, 390, 2, 56, 81]
console.log("My array", array);

var results = array.map(isOdd);
// return as false,false,false,false,true
console.log("Test of oddness of array:",results);

var reults = array.map(function(x){
    return x * 2;
})
// return as 900, 780, 4, 112, 162

console.log("Multiply by 2:",results);

