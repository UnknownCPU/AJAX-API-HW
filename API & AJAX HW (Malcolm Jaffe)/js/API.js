function getData(){
  
    var input = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=NwqOL3W0PLQRgZUcxYzHjXRPzbrbYRDC&limit=20");

xhr.done(function(response) { 
    
    console.log("success got data", response);

    var jiffs = response.data

for (i in jiffs)
{
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:330px;'/>")
}
    });
}