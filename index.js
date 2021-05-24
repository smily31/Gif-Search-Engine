// Grab the input value 

document.querySelector("button").addEventListener('click',function ()
{
    var userInput = document.querySelector("input").value;
    searchGIF(userInput);
})

document.querySelector(".user-input").addEventListener('keyup',function (e)
{
    var userInput = document.querySelector("input").value;
    // if enter is pressed
    if(e.which === 13)
    {
        searchGIF(userInput);
    }
});


// Do the data stuffs with API
function searchGIF(userInput)
{
    var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+userInput;
    
    //AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest;
    GiphyAJAXCall.open('GET',url);
    GiphyAJAXCall.send();
    
    //when our whole data will load then we will show it
    GiphyAJAXCall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data);
    })
}



// Show me the GIFs
function pushToDOM(input)
{
    // pasing our data to access it and to render it on screen
    var response = JSON.parse(input);
    // collecting array of all object 
    var imageURLs = response.data;
    var c =document.querySelector(".container-gif");
    c.innerHTML = "";
    imageURLs.forEach(function(image){
        var src = image.images.fixed_height.url;
        c.innerHTML += "<img src=\""+src+"\" class=\"gifs\">";
    });

}