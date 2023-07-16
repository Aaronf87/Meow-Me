var refreshEl = $('#refreshBtn');
var loadButton = $('#loadBtn');
var executeButton = $('#executeBtn');
var vid1 = document.getElementById("#v1")
var vid2 = document.getElementById("#v2")
var vid3 = document.getElementById("#v3")
var vid4 = document.getElementById("#v4")
var vid5 = document.getElementById("#v5")
var gif1 = document.getElementById("#g1")
var gif2 = document.getElementById("#g2")
var gif3 = document.getElementById("#g3")
var gif4 = document.getElementById("#g4")
var gif5 = document.getElementById("#g5")

// Holds videoIds from the Youtube fetch function
var videoArray = [];

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

            // Line 41 & 42
            //var index = i.toString();
            //var targetedItem = document.getElementById(index);
            var url1 = "https://www.youtube.com/embed/";
            var url2 = "?autoplay=1";
            var videoUrl = (url1 + videoId + url2);
            videoArray.push(videoUrl);
            console.log(videoUrl);
            console.log(videoArray);
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
  var gifList = document.querySelector('ul');
  var fetchButton = document.getElementById('fetch-button');
  
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
        console.log(response.data[0].images.original.url)
        // grabbing element 
        var gif = document.getElementById("gf1")
        // saving the gif into a variable named gif..
        gif.textContent = response.data[0].images.original.url
        console.log(newGif);

        // for (var i = 0; i < response.data[0].length; i++) {
            // };
            // function getGif(){
                getNewGif();
                // }}
                // )
            })};
            function getNewGif(gif){
            //    gif.setAttribute("img src", newGif);

            }
            
            
            fetchButton.addEventListener('click', getApi);

//     var listItem = document.createElement('li');
//     listItem.textContent = data[i].html_url;
//     repoList.appendChild(listItem)
