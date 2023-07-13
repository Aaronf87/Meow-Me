var buttonEl = $('#button');

function buttonPress (event) {
event.preventDefault;

this.hide();
}

buttonEl.on('click', buttonPress);


// time on header

var myDate = new Date();

var date = document.getElementById("time")
date.innerHTML = myDate;