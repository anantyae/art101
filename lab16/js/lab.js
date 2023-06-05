// index.js - JSON and APIs
// Author: Anantya
// Date: 6/2/2023

$.ajax({
    //url
    url: "https://xkcd.com/info.0.json",
    //want all of the data
    data: {},
    type: "GET",
    dataType: "json",
    success: function(data){
        //success callback function (what code does with the retrieved data)
        console.log("success");
        console.log(data);
        var comicObj = data;
        //puts title on page
        $("#output").append("<h3>" + comicObj.title + "</h3>");
        //puts image on page, and attaches alt text & title to image
        $("#output").append("<img src=" + comicObj.img + " alt=" + comicObj.alt + "title='Image'>");
    }
})
