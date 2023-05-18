// index.js - Conditionals
// Author: Anantya
// Date: 5/18/2023

//make a return for Grif, Rave, Sly, and Huff

function sortingHat(str) {
    len = str.length;
    mod = len %4;
        if (mod==0) {
            return "Griffindor"
        }
        else if (mod==1) {
            return "Ravenclaw"
        }
        else if (mod==2) {
            return "Slytherin"
        }
        else if (mod==3) {
            return "Hufflepuff"
        }
}   
// connect to the button in jQuery

$("#button").click(function(){
    var name= $(this).val();
    var house= sortingHat(name);
    newText= "<p> The Sorting Hat has sorted you into" +" "+ house + "</p>";
    $(this).parent().html(newText);
});