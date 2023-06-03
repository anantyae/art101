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
    // we use .replace(/"/g, '\\"') after the text strings because
    // sometimes there are single and double quotes in the text
    // that confuses the html
    var title = data.title;
    console.log("orig title:", title);
    title = make_safe(title);
    console.log("safe title:", title);
    var alt = data.alt;
    console.log("orig alt:", alt);
    alt = make_safe(alt);
    console.log("safe alt:", alt);
    var comicNum = data.num;
    var html = `<div id="imageblock">
        <h2>${title}</h2>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>`
    // console.log("My new html: \n", html);
    $("#output").html(html);

    // add event listener to new prev button
    $("#prev").click(function(){
      getComic(comicNum - 1);
    });
    // add event listener to new next button
    $("#next").click(function(){
      getComic(comicNum + 1);
    });
    //       var imageUrl = data.img;
    //       var imgURL = data.img;
    //       $("#output").html("<h2>" + comicObj.title);
    //       $("#output").append("img src=" + comicObj.img + "alt=" + comicObj.alt + "title='Image'>");
    //       //$("#output").append("<img src=" + imgURL + ">");
 })
