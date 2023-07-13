var buttonEl = $('#button');


// Function runs once refresh button is clicked
function refresh (event) {
event.preventDefault;

this.hide();
}

// Listener on refresh button
buttonEl.on('click', refresh);


// time on header

var myDate = new Date();

var date = document.getElementById("time")
date.innerHTML = myDate;