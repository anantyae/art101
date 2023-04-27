// index.js -Arrays and Objects
// Author: Anantya
// Date: 4/26/2023

//Define variables

  var myTransport=["bus","walking","car",];

   myRide = {
     make: "Ford",
     model: "Thunderbird",
      color: "Rusty Red",
      year: 1960,
      age: function() {
        return 2023 - this.year;
  }
}

//Output
 document.writeln("Traveling: " + myTransport + "<br>");

  document.writeln("My Ride: <pre>", 
    JSON.stringify(myRide, null, '\t'), "</pre>");
