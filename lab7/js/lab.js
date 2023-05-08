// index.js -Functions
// Author: Anantya
// Date: 5/3/2023

function sortUserName () {
    var userName = window.prompt("Hi! Can I have your name so I can fix it?")
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray=", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //something

    return nameSorted;

}

document.writeln("Hey, I fixed youre name: ",
    sortUserName(), "</br>");
