

$("#currentDay").append(moment().format("dddd, MMMM Do"));

var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var taskList9 = [];
var taskList10 = [];
var taskList11 = [];
var taskList12 = [];
var taskList13 = [];
var taskList14 = [];
var taskList15 = [];
var taskList16 = [];
var taskList17 = [];
var getTask9 = (localStorage.getItem("tasks9"));



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
        colTwo.append("<textarea class='userInput' data-index='" + times[i] + "' id=input'" + times[i] + "'></textarea>");
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
        colThree.addClass("col-1 far fa-save fa-2x saveBtn saveBtn");
        colThree.attr("data-index", times[i]);
        newDiv.append(colThree);
    }
}

localStorage.setItem("times", times);
// if data-index = data-index save that data
$(".saveBtn").on("click", function(){
    var btnID = $(this).attr("data-index");
    var userTask = $(".userInput").val();
    console.log(btnID);
    if (btnID = 9) {
        taskList9.push(userTask);
        (localStorage.setItem("tasks9", taskList9));
        console.log(taskList9);
        var storedTask9 = (localStorage.getItem("tasks9"));
        taskList9 = storedTask9;
        $("#id9").text(taskList9[0]);
    }
    // if(btnID = 10)
    // if(btnID = 11)
    // if(btnID = 12)
    // if(btnID = 13)
    // if(btnID = 14)
    // if(btnID = 15)
    // if(btnID = 16)
    // if(btnID = 17)

    // taskList.push(userTask);
    // localStorage.setItem("tasks", taskList);
    // console.log(taskList);
});
plannerLaunch();
function plannerLaunch(){
    // $("#id9").append((localStorage.getItem("tasks9"[0])));
    // document.getElementById("id9").value = JSON.parse(localStorage.getItem("tasks9"));
    var storedTask9 = (localStorage.getItem("tasks9"));    taskList9 = storedTask9;
    $("#id9").text(taskList9[0]);

}
