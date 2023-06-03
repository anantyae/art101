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
      success: function(data){

          //success callback function
          console.log("success");
          console.log(data);
          var comicObj = data;
          var imgURL = data.img;
          $("#output").html("<h2>" + comicObj.title);
          $("#output").append("img src=" + comicObj.img + "alt=" + comicObj.alt + "title='Image'>");
          //$("#output").append("<img src=" + imgURL + ">");
      }
})
  

