var buttonEl = $('#button');


// Function runs once refresh button is clicked
function refresh (event) {
event.preventDefault;

this.hide();
}

// Listener on refresh button
buttonEl.on('click', refresh);


// time on header with one second refresh
// format date and time

function time(){
    var myDate = new Date();
    var date = document.getElementById("time")
    date.innerHTML = myDate;
}
setInterval(time,1000);

  
