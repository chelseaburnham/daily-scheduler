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

//changes the day to the current day
$("#currentDay").text(today.format("MMMM Do, YYYY"))

//colors everything in the past red
function pastTime() {

}

//colors everything in the past red
function pastTime() {

}

//colors everything in the past red
function pastTime() {

}

saveBtn1.on("click", function() {
    var textArea1 = area1.val();
    localStorage.setItem("9:00", textArea1);
});

saveBtn2.on("click", function() {
    var textArea2 = area2.val();
    localStorage.setItem("10:00", textArea2);
});

saveBtn3.on("click", function() {
    var textArea3 = area3.val();
    localStorage.setItem("11:00", textArea3);
});

saveBtn4.on("click", function() {
    var textArea4 = area4.val();
    localStorage.setItem("12:00", textArea4);
});

saveBtn5.on("click", function() {
    var textArea5 = area5.val();
    localStorage.setItem("1:00", textArea5);
});

saveBtn6.on("click", function() {
    var textArea6 = area6.val();
    localStorage.setItem("2:00", textArea6);
});

saveBtn7.on("click", function() {
    var textArea7 = area7.val();
    localStorage.setItem("3:00", textArea7);
});

saveBtn8.on("click", function() {
    var textArea8 = area8.val();
    localStorage.setItem("4:00", textArea8);
});

