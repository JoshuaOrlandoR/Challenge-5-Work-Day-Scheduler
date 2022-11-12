// var agendaRow = $(".agendaRow")
// Current Time displayed in <p> currentDay
function liveTime() {
    $("#currentDay").text(moment().format("MMMM, Do, YYYY, h:mm:ss A"));
}
// Calls liveTime function and updates it on a 1000 ms interval - giving live view of time on page
liveTime();
setInterval(liveTime,1000);

// Variables for agenda slots
var agenda8am = $("#time8");
var agenda9am = $("#time9");
var agenda10am = $("#time10");
var agenda11am = $("#time11");
var agenda12pm = $("#time12");
var agenda1pm = $("#time13");
var agenda2pm = $("#time14");
var agenda3pm = $("#time15");
var agenda4pm = $("#time16");
var agenda5pm = $("#time17");
var agenda6pm = $("#time18");
var agenda7pm = $("#time19");
var agenda8pm = $("#time20");

// Array used to compare moment().hour() value to current time 
const agendaIndex = [
    agenda8am,
    agenda9am,
    agenda10am,
    agenda11am,
    agenda12pm,
    agenda1pm,
    agenda2pm,
    agenda3pm,
    agenda4pm,
    agenda5pm,
    agenda6pm,
    agenda7pm,
    agenda8pm,
]

// Function which compares moment().hour() to agenda item and gives it the appropriate class
function hourStatus() {
    var timeNow = moment().hour();
    console.log(timeNow);
    // Removes all  time-based classes first 
    for (let i=0; i < agendaIndex.length; i++) {
        agendaIndex[i].removeClass("future");
        agendaIndex[i].removeClass("present");
        agendaIndex[i].removeClass ("past");
        // If moment().hour() value is higher than the data value of the index item, it gives it the "past" class
        if (timeNow > agendaIndex[i].data("value")) {
            agendaIndex[i].addClass("past");
        // If moment().hour() value is the same as the data value of the index item, it gives it the "present" class
        } else if (timeNow === agendaIndex[i].data("value")) {
            agendaIndex[i].addClass("present");
        // If neither of the above conditions are met (i.e. if the moment.hour value is lower than the index item), gives "future" class    
        } else { agendaIndex[i].addClass("future");
       }
    }
}   

hourStatus();


//Checking to see if buttons work 
$(".saveBtn").on("click", function(){
    var timeNow = moment().hour();
    console.log(timeNow); //check to see if buttons work 
    var input = $(this).siblings(".noteSection").val(); //Have to use this instead of .saveBtn, for whatever reason I dont fully understand yet, using .saveBtn only allows the first time slot to be saved, this fixes it 
    var valueID = $(this).parent().attr("id");
    console.log(input) //checking to see if this notation for the input variable works properly - it does 
    console.log(valueID) // checking to see if this notation works for the valueID variable, it also does 

//
    //set items to local storage
    localStorage.setItem(valueID, input);
});

//Get text area value using key + value pair with local storage -
//using the id of the div as the key to get the stored text area value as the local storage value
$("#time8 .noteSection").val(localStorage.getItem("time8"))
$("#time9 .noteSection").val(localStorage.getItem("time9"))
$("#time10 .noteSection").val(localStorage.getItem("time10"))
$("#time11 .noteSection").val(localStorage.getItem("time11"))
$("#time12 .noteSection").val(localStorage.getItem("time12"))
$("#time13 .noteSection").val(localStorage.getItem("time13"))
$("#time14 .noteSection").val(localStorage.getItem("time14"))
$("#time15 .noteSection").val(localStorage.getItem("time15"))
$("#time16 .noteSection").val(localStorage.getItem("time16"))
$("#time17 .noteSection").val(localStorage.getItem("time17"))
$("#time18 .noteSection").val(localStorage.getItem("time18"))
$("#time19 .noteSection").val(localStorage.getItem("time19"))
$("#time20 .noteSection").val(localStorage.getItem("time20"))