//changes the day to the current day
var today = moment();
var now = moment().hour()
$("#currentDay").text(today.format("dddd, MMMM Do"))

//adds event listener to the save button - saves text input to local storage
$(".btn").on("click", function() {
    var userInput = $(this).siblings("textarea").val()
    var textInput = $(this).attr("data-time")
    localStorage.setItem(textInput, userInput)
})

//keeps items in local storage in the text area; changes the color of each block based on the time of day
$("input").each(function(){
    var time = $(this).attr("data-time");
    var dataStorage = localStorage.getItem(time);
    $(this).siblings("textarea").val(dataStorage)
    if (time < now) {
        $(this).siblings("textarea").addClass("past")
    } else if(time == now) {
        $(this).siblings("textarea").addClass("present")
    } else {
        $(this).siblings("textarea").addClass("future")
    }
})