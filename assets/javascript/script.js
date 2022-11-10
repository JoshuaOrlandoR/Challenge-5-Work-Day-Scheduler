// Current Time displayed in <p> currentDay
function liveTime() {
    $("#currentDay").text(moment().format("MMMM, Do, YYYY, h:mm:ss A"));
}

//Calls liveTime function and updates it on a 1000 ms interval - giving live view of time on page
liveTime();
setInterval(liveTime,1000);

