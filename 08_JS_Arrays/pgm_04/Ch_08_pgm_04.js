var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log(days[dayInWeek]);
console.log(days[dayInWeek - 1]);

//change the value of dayInWeek var to display a diff day
dayInWeek = 2;
console.log(days[dayInWeek]);

//write a fn that accepts a no for the day of the week and returns the day as a str
var getDay = function(dayIndex) {
    return days[dayIndex];
};

//call the fn , passing it 4 as the day of week and log the value
console.log(getDay(4));