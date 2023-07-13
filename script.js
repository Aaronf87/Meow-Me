var refreshEl = $('#refreshBtn');
var loadButton = $('#loadBtn');
var executeButton = $('#executeBtn');


// Function runs once refresh button is clicked
function refresh (event) {
event.preventDefault;
this.hide();
}

// **** Youtube fetch  section ****
function loadClient() {
gapi.client.setApiKey("AIzaSyDS0kgb0_u9ydK6nmdUbP70KZfQ2Yb0V2w");
return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded before calling this method.
function execute() {
return gapi.client.youtube.search.list({
    "part": [
    "snippet"
    ],
    "maxResults": 5,
    "q": "cats",
    "safeSearch": "moderate",
})
    .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
            console.log(response.result.items);
            console.log(response.result.items[0].id[1])
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client");
// **** end of Youtube fetch section ****

// Listener on refresh button
refreshEl.on('click', refresh);
// Listener on YT api client load button
loadButton.on('click', loadClient);
// Listener on TY api execute fetch button
executeButton.on('click', execute);


// time on header
// format date and time

function time(){
    var myDate = new Date();
    var date = document.getElementById("time")
    date.innerHTML = myDate;
}


setInterval(time,1000);
