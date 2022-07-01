var today = moment();
var area1 = $("#area1");
var area2 = $("#area2");
var area3 = $("#area3");
var area4 = $("#area4");
var area5 = $("#area5");
var area6 = $("#area6");
var area7 = $("#area7");
var area8 = $("#area8");
var saveBtn1 = $("#btn1");
var saveBtn2 = $("#btn2");
var saveBtn3 = $("#btn3");
var saveBtn4 = $("#btn4");
var saveBtn5 = $("#btn5");
var saveBtn6 = $("#btn6");
var saveBtn7 = $("#btn7");
var saveBtn8 = $("#btn8");
var textArea1; ; 

//changes the day to the current day
$("#currentDay").text(today.format("dddd, MMMM Do"))

// //saves text to local storage
// saveBtn1.on("click", function() {
//     var textArea1 = area1.val();
//     localStorage.setItem("9:00", textArea1);
// });

// //displays current text from local storage in the text area
// var persist1 = localStorage.getItem("9:00")
// area1.text(persist1)

// saveBtn2.on("click", function() {
//     var textArea2 = area2.val();
//     localStorage.setItem("10:00", textArea2);
// });

// var persist2 = localStorage.getItem("10:00")
// area2.text(persist2)

// saveBtn3.on("click", function() {
//     var textArea3 = area3.val();
//     localStorage.setItem("11:00", textArea3);
// });

// var persist3 = localStorage.getItem("11:00")
// area3.text(persist3)

// saveBtn4.on("click", function() {
//     var textArea4 = area4.val();
//     localStorage.setItem("12:00", textArea4);
// });

// var persist4 = localStorage.getItem("12:00")
// area4.text(persist4)

// saveBtn5.on("click", function() {
//     var textArea5 = area5.val();
//     localStorage.setItem("1:00", textArea5);
// });

// var persist5 = localStorage.getItem("1:00")
// area5.text(persist5)

// saveBtn6.on("click", function() {
//     var textArea6 = area6.val();
//     localStorage.setItem("2:00", textArea6);
// });

// var persist6 = localStorage.getItem("2:00")
// area6.text(persist6)

// saveBtn7.on("click", function() {
//     var textArea7 = area7.val();
//     localStorage.setItem("3:00", textArea7);
// });

// var persist7 = localStorage.getItem("3:00")
// area7.text(persist7)

// saveBtn8.on("click", function() {
//     var textArea8 = area8.val();
//     localStorage.setItem("4:00", textArea8);
// });

// var persist8 = localStorage.getItem("4:00")
// area8.text(persist8)




var now = moment().hour();


// //colors everything in the past red
// function pastTime() {
//     if (now < 9) {
//         area1.css("background-color", "red")
//     } else {
//         return
//     }
// }


// //colors everything in the current time green
// function currentTime() {
//     if (now == data-time) {
//         area1.css("background-color", "green")
//     } else {
//         return
//     }
// }

// //colors everything in the future grey
// function futureTime() {
//     if (now > 9) {
//         area1.css("background-color", "grey")
//     } else {
//         return
//     }
// }



$(".btn").on("click", function() {
    var userInput = $(this).siblings("textarea").val()
    var textInput = $(this).attr("data-time")
    localStorage.setItem(textInput, userInput)
})

$("input").each(function(){
    var time = $(this).attr("data-time");
    var dataStorage = localStorage.getItem(time);
    $(this).siblings("textarea").val(dataStorage)

})

