// index.js - JSON and APIs
// Author: Anantya
// Date: 6/2/2023


 
    $.ajax({
       //where- string
      url: "https://xkcd.com/info.0.json",
       //how- string
      type: "GET",
        //what
      data: {},
      dataType: "json",
    })

      
      // If the request succeeds
  .done(function(data) {
    // console.log(data);
    var imageUrl = data.img;
   var imgURL = data.img;
$("#output").html("<h2>" + comicObj.title);
$("#output").append("img src=" + comicObj.img + "alt=" + comicObj.alt + "title='Image'>");

 })
