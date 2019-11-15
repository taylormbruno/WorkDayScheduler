

$("#currentDay").append(moment().format("dddd, MMMM Do"));

var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

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
        else {
            colOne.text(times[i] + "PM");
        }
        newDiv.append(colOne);

        var colTwo = $("<div>");
        colTwo.addClass("col-10 description");
        if (times[i] > 0 && times[i] < 6) {
            colTwo.attr("data-index", (parseInt(times[i]) + 12));
        }
        else {
            colTwo.attr("data-index", times[i]);
        }
        colTwo.append("<textarea class='userInput'></textarea>");
        newDiv.append(colTwo);

        var colThree = $("<div>");
        colThree.addClass("col-1 far fa-save fa-2x saveBtn saveBtn");
        newDiv.append(colThree);
        
    }
}



timeColors();
function timeColors() {
    var now = moment();
    var timeIndex = $(".description").data("index");
    if (timeIndex < now) {
        $(".description").addClass("past");
    }
    else if (timeIndex > now) {
        $(".description").addClass("future");

    }
    else if (timeIndex = now) {
        $(".description").addClass("present");
    }
    else {
        console.log(timeIndex);
    }
    console.log(now);
}

$(".saveBtn").on("click", SaveInput());
function SaveInput(){
    var userInput = $(".userInput");
    console.log(userInput);
}