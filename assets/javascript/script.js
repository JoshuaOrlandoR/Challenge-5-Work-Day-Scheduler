var timeNow = moment().hour()
// var agendaRow = $(".agendaRow")
// Current Time displayed in <p> currentDay
function liveTime() {
    $("#currentDay").text(moment().format("MMMM, Do, YYYY, h:mm:ss A"));
}

//Calls liveTime function and updates it on a 1000 ms interval - giving live view of time on page
liveTime();
setInterval(liveTime,1000);

//Changing colors depending on time - This way did not work the way I intended, come back to this 

// function hourStatus() {
//     $(".agendaRow").each (function () {
//         var agendaTime = parseInt($(".agendaRow").attr("id").split("time")[1]); - thought this was pretty clever though
//         console.log (agendaTime, timeNow)
        
//         if (agendaTime < timeNow) {
//             $("agendaRow").addClass("past");
//         }
//     })
// }

// hourStatus();









//Checking to see if buttons work 
$(".saveBtn").on("click", function(){
    var timeNow = moment().hour();
    console.log(timeNow);
});