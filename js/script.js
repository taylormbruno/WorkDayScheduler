

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
            colTwo.append("<textarea class='userInput' data-index='" + (parseInt(times[i] + 12)) + "'></textarea>");
        }
        else {
            colTwo.attr("data-index", times[i]);
            colTwo.append("<textarea class='userInput' data-index='" + times[i] + "'></textarea>");
        }
        newDiv.append(colTwo);

        var colThree = $("<div>");
        colThree.addClass("col-1 far fa-save fa-2x saveBtn saveBtn");
        if (times[i] > 0 && times[i] < 6) {
            colThree.attr("data-index", (parseInt(times[i]) + 12));
        }
        else {
            colThree.attr("data-index", times[i]);
        }
        newDiv.append(colThree);
        
        var now = moment().hour();
        var timeIndex = $(".description").attr("data-index");
        // if (timeIndex < now) {
        //     $(".description").addClass("past");
        // } // gray
        if (timeIndex > now) {
            $(".description").addClass("future");
        } // green
        // if (timeIndex == now) {
        //     $(".description").addClass("present");
        // } // red
        else {
            console.log(timeIndex);
        }
        console.log(now);
        console.log(timeIndex);
    }
}



// timeColors();
// function timeColors() {
//     v

// }

// if data-index = data-index save that data
$(".saveBtn").on("click", function(){
    
});

function SaveInput(){
    var userInput = $(".userInput");
    console.log(userInput);
}