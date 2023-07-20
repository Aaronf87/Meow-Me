// Description: This file contains the code for the main page of the app

var refreshEl = $('#refreshBtn');
var loadButton = $('#loadBtn');
var executeButton = $('#executeBtn');


// **** Background section ****
// Array of background images
function changeBg() {
    var images = ['url("images/image.png")', 
    'url("images/cat 1.jpg")', 
    'url("images/cat 2.jpg")',
    'url("images/cat 3.jpg")',
    'url("images/cat 4.jpg")',
    'url("images/cat 5.jpg")',
    

]
localStorage.setItem("images", JSON.stringify(images));
images = JSON.parse(localStorage.getItem("images"));

// Randomly selects an image from the array and sets it as the background image
var section = document.querySelector('section');
var bg = images[Math.floor(Math.random() * images.length)];
section.style.backgroundImage = bg;
section.style.backgroundSize = "cover";
section.style.backgroundRepeat = "no-repeat";
section.style.backgroundPosition = "center";
section.style.backgroundAttachment = "fixed";
section.style.transition = "all 1s ease-in-out";


}
setInterval(changeBg, 10000);
changeBg();








// **** End of background section ****

// Function runs once refresh button is clicked
function refresh (event) {
event.preventDefault;
this.hide();
}







// **** Youtube fetch  section ****
// Loads youtube api client
function loadClient() {
gapi.client.setApiKey("AIzaSyDS0kgb0_u9ydK6nmdUbP70KZfQ2Yb0V2w");
return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); });
}

// Searches Youtube videos using the specified parameters
function execute() {
return gapi.client.youtube.search.list({
    "part": [
    "snippet"
    ],
    "maxResults": 5,
    "q": "cat",
    "safeSearch": "moderate",
    "type": "video",
    "videoEmbeddable": "true"
})     // Handles whatever data is returned from search
    .then(function(response) {
            console.log("Response", response);
            // Iterates through returned data and pulls the video ID for each result, concatenates each into a viable url, pushes each url to the videoArray array
            for(i=0; i<response.result.items.length; i++) {
            var videoId = response.result.items[i].id.videoId;
            var url1 = "https://www.youtube.com/embed/";
            var url2 = "?autoplay=1";
            var videoUrl = (url1 + videoId + url2);

            if (i == 0){
                var player = document.getElementById("vid1");
            } else if (i == 1){
                var player = document.getElementById("vid2");
            } else if (i == 2){
                var player = document.getElementById("vid3");
            } else if (i == 3){
                var player = document.getElementById("vid4");
            } else if (i == 4) {
                var player = document.getElementById("vid5");
            }

            player.src = videoUrl;
            }
            });
}
gapi.load("client");
// **** End of Youtube fetch section ****

// Listener on refresh button
refreshEl.on('click', refresh);
// Listener on YT api client load button
loadButton.on('click', loadClient);
// Listener on TY api execute fetch button
executeButton.on('click', execute);


// time on header with one second refresh
// format date and time
// set time and date 
function time(){
    var myDate = dayjs().format("MMM D, YYYY, hh:mm:ss");
    var date = document.getElementById("time")
    date.textContent = myDate;
  }
  setInterval(time, 1000);

  // Setting up GiphyApi
  
  var gifApi = "amSDMJMFRxFF5Ej4oCSnlYCraoqRKbfS";

  // request giphy api function...
  function getApi() {
      
      // String concatenate url and api with our search project needs...
      var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + gifApi + "&q=cats&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
      
      // fetch request syntax with response from giphy api
      fetch(requestUrl)
      .then(function (response) {
          return response.json();
        })
        .then(function (response) {
            // console log to examine the right data...
            // console.log(response.data[0].images.original.url)
            // grabbing element 
            var gif = document.getElementById("gf1")
            var gif2 = document.getElementById("g2")
            var gif3 = document.getElementById("g3")
            var gif4 = document.getElementById("g4")
            var gif5 = document.getElementById("g5")
            // saving the gif into a variable named gif..
            // gif.textContent = response.data[0].images.original.url
            console.log(response.data);
            
            
            for (var i = 0; i <= 5; i++) {
                var fetchGif = response.data[i].images.original.url
                console.log(i);
                gif.src =  response.data[0].images.original.url;
                gif2.src = response.data[1].images.original.url;
                gif3.src = response.data[2].images.original.url;
                gif4.src = response.data[3].images.original.url;
                gif5.src = response.data[4].images.original.url;
            };
              }
                );
                }
        // calling the function to run...
       




        getApi();
        // setInterval(getApi, 10000);

























