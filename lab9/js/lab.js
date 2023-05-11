// index.js - JavaScript for Web
// Author: Anantya
// Date: 5/9/2023

//assign variable to find output
var outputEl=
document.getElementById("output");

//create new element 
var new1El=
document.createElement("p");

//give it an

new1El.id= "my-new-p";

//create other new element
var new2El= 
document.createElement("p");



new2El.id= "<my-other-new-p";

// make it show up on the site

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

//make each say something 
new1El.innerHTML="Say something..."

new2El.innerHTML="Say something Else!"