// index.js - JavaScript for Web
// Author: Anantya
// Date: 5/16/2023


//append each button to it's section
$("#challenge").append("<button id= 'c-button'>Challenge!</button>");
$("#problems").append("<button id= 'p-button'>Problems</button>");
$("#results").append("<button id= 'r-button'>Results</button>");


//make each button toggle ans swtichback and forth between colors done in CSS when pressed
$("#c-button").click(function(){
    $(this).parent().toggleClass("special");
})


$("#p-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
    $(this).parent().toggleClass("special");
})

