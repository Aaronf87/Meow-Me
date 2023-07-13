var refreshEl = $('#refreshBtn');
var loadButton = $('#loadBtn');
var executeButton = $('#executeBtn');


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
            // Iterates through returned data and pulls the video ID for each result
            for(i=0; i<response.result.items.length; i++) {
            var videoId = response.result.items[i].id.videoId;
            console.log(videoId);
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
