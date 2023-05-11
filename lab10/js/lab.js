// index.js - JavaScript for Web
// Author: Anantya
// Date: 5/11/2023


// Create a basic "Hello, World!" page.
// Add a button (id="my-button") to the Hello World page.
function sortMe(str) {
	return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input their name with the prompt() function. 
  //var name = prompt("What is your name?");
  var name = document.getElementById("user-name").value;
  var nameStr = "Hello, " + sortMe(name);
  // change the text to say username
  var nameEl = document.getElementById("output");
  nameEl.innerHTML = nameStr;
})
