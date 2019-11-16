

$("#currentDay").append(moment().format("dddd, MMMM Do"));

var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];




renderRows();
function renderRows() {
    for (var i=0; i < times.length; i++) {
        var newDiv = $("<div>");
        newDiv.addClass("row");
        $(".container").append(newDiv);

        var colOne = $("<div>");
        colOne.addClass("col-1 hour");
        if (times[i] > 8 && times[i] < 12) {
            colOne.text(times[i] + "AM");
        }
        else if (times[i] == 12) {
            colOne.text(times[i] + "PM");
        }
        else {
            colOne.text((times[i] - 12) + "PM");
        }
        newDiv.append(colOne);

        var colTwo = $("<div>");
        colTwo.addClass("col-10 description");
        colTwo.attr("data-index", times[i]);
        colTwo.append("<textarea class='userInput" + times[i] + "' data-index='" + times[i] + "' id='id" + times[i] + "'></textarea>");
        var now = moment().hour();
        if (times[i] < now) {
            colTwo.addClass("past");
        } // gray

        else if (times[i] == now) {
            colTwo.addClass("present");
        } // red

        else if (times[i] > now) {
            colTwo.addClass("future");
        } // green
        newDiv.append(colTwo);

        var colThree = $("<div>");
        colThree.addClass("col-1 saveBtn");
        colThree.attr("data-index", times[i]);
        colThree.append("<h6 class='far fa-save fa-2x btnIcon'></h6>");
        newDiv.append(colThree);
    }
}


var taskList9 = [];
var taskList10 = [];
var taskList11 = [];
var taskList12 = [];
var taskList13 = [];
var taskList14 = [];
var taskList15 = [];
var taskList16 = [];
var taskList17 = [];

localStorage.setItem("times", times);
$(".saveBtn").on("click", function(){
    event.preventDefault();
    var btnID = $(this).attr("data-index");
    console.log(btnID);
    // var userTask = $(".userInput").val().trim();
    if (btnID = 9) {
        var userTask9 = $(".userInput9").val().trim();
        taskList9 = userTask9;
        localStorage.setItem("tasks9", taskList9);
        var storedTask9 = (localStorage.getItem("tasks9"));
        taskList9 = storedTask9;
        $("#id9").text(taskList9);
    }
    if (btnID = 10) {
        var userTask10 = $(".userInput10").val().trim();
        taskList10 = userTask10;
        localStorage.setItem("tasks10", taskList10);
        var storedTask10 = (localStorage.getItem("tasks10"));
        taskList10 = storedTask10;
        $("#id10").text(taskList10);
    }
    if (btnID = 11) {
        var userTask11 = $(".userInput11").val().trim();
        taskList11 = userTask11;
        localStorage.setItem("tasks11", taskList11);
        var storedTask11 = (localStorage.getItem("tasks11"));
        taskList11 = storedTask11;
        $("#id11").text(taskList11);
    }
    if (btnID = 12) {
        var userTask12 = $(".userInput12").val().trim();
        taskList12 = userTask12;
        localStorage.setItem("tasks12", taskList12);
        var storedTask12 = (localStorage.getItem("tasks12"));
        taskList12 = storedTask12;
        $("#id12").text(taskList12);
    }
    if (btnID = 13) {
        var userTask13 = $(".userInput13").val().trim();
        taskList13 = userTask13;
        localStorage.setItem("tasks13", taskList13);
        var storedTask13 = (localStorage.getItem("tasks13"));
        taskList13 = storedTask13;
        $("#id13").text(taskList13);
    }
    if (btnID = 14) {
        var userTask14 = $(".userInput14").val().trim();
        taskList14 = userTask14;
        localStorage.setItem("tasks14", taskList14);
        var storedTask14 = (localStorage.getItem("tasks14"));
        taskList14 = storedTask14;
        $("#id14").text(taskList14);
    }
    if (btnID = 15) {
        var userTask15 = $(".userInput15").val().trim();
        taskList15 = userTask15;
        localStorage.setItem("tasks15", taskList15);
        var storedTask15 = (localStorage.getItem("tasks15"));
        taskList15 = storedTask15;
        $("#id15").text(taskList15);
    }
    if (btnID = 16) {
        var userTask16 = $(".userInput16").val().trim();
        taskList16 = userTask16;
        localStorage.setItem("tasks16", taskList16);
        var storedTask16 = (localStorage.getItem("tasks16"));
        taskList16 = storedTask16;
        $("#id16").text(taskList16);
    }
    if (btnID = 17) {
        var userTask17 = $(".userInput17").val().trim();
        taskList17 = userTask17;
        localStorage.setItem("tasks17", taskList17);
        var storedTask17 = (localStorage.getItem("tasks17"));
        taskList17 = storedTask17;
        $("id17").text(taskList17);
    }
});

plannerLaunch();
function plannerLaunch(){
    var storedTask9 = localStorage.getItem("tasks9");    
    taskList9 = storedTask9;
    $("#id9").text(taskList9);

    var storedTask10 = localStorage.getItem("tasks10");
    taskList10 = storedTask10;
    $("#id10").text(taskList10);

    var storedTask11 = localStorage.getItem("tasks11");
    taskList11 = storedTask11;
    $("#id11").text(taskList11);

    var storedTask12 = localStorage.getItem("tasks12");
    taskList12 = storedTask12;
    $("#id12").text(taskList12);

    var storedTask13 = localStorage.getItem("tasks13");
    taskList13 = storedTask13;
    $("#id13").text(taskList13);

    var storedTask14 = localStorage.getItem("tasks14");
    taskList14 = storedTask14;
    $("#id14").text(taskList14);

    var storedTask15 = localStorage.getItem("tasks15");
    taskList15 = storedTask15;
    $("#id15").text(taskList15);

    var storedTask16 = localStorage.getItem("tasks16");
    taskList16 = storedTask16;
    $("#id16").text(taskList16);

    var storedTask17 = localStorage.getItem("tasks17");
    taskList17 = storedTask17;
    $("#id17").text(taskList17);
}

// $("#clearBtn").on("click", function() {
function clearButton(){
    // event.preventDefault();
    console.log("clearing planner");
    var textEl = document.body.querySelectorAll("textarea");
    localStorage.removeItem("tasks9");
    localStorage.removeItem("tasks10");
    localStorage.removeItem("tasks11");
    localStorage.removeItem("tasks12");
    localStorage.removeItem("tasks13");
    localStorage.removeItem("tasks14");
    localStorage.removeItem("tasks15");
    localStorage.removeItem("tasks16");
    localStorage.removeItem("tasks17");
    $(textEl).empty();
    window.location.reload();
}