var refreshEl = $('#refreshBtn');
var loadButton = $('#loadBtn');
var executeButton = $('#executeBtn');
var vid1 = document.getElementById("#v1")
var vid2 = document.getElementById("#v2")
var vid3 = document.getElementById("#v3")
var vid4 = document.getElementById("#v4")
var vid5 = document.getElementById("#v5")

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
    "q": "cats",
    "safeSearch": "moderate",
    "type": "video"
})     // Handles whatever data is returned from search
    .then(function(response) {
            console.log("Response", response);
            // Iterates through returned data and pulls the video ID for each result, pushes each to the videoArray array
            for(i=0; i<response.result.items.length; i++) {
            var videoId = response.result.items[i].id.videoId;
            videoArray.push(videoId);
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

function time(){
    var myDate = new Date();
    var date = document.getElementById("time")
    date.innerHTML = myDate;
}
setInterval(time,1000);


var gif1 = document.getElementById("g1")
var gif2 = document.getElementById("g2")
var gif3 = document.getElementById("g3")
var gif4 = document.getElementById("g4")
var gif5 = document.getElementById("g5")