console.log(moment());

let m = moment().format('LLLL');
console.log(m);

// var currentDay = document.getElementById ("currentDay");

// currentDay.textContent = "Hello";


console.log(moment().format('h a'));

var timeBlocks = document.querySelectorAll(".time");
var businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

for (var i = 0; i < timeBlocks.length; i++) {
    // console.log(timeBlocks[i]);
    timeBlocks[i].textContent = businessHours[i];
}