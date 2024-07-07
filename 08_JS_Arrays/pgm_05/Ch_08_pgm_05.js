var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuseday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 95, 123 ];

//run the report for Friday
var report = getVisitorReport(visitors, 5);
console.log(report);

//write a new fn with three parameters
var getMonthlyVisitorReport = function (monthArray, week, dayInWeek) {
    var weekArray = monthArray[week - 1];
    return getVisitorReport(weekArray, dayInWeek);
};

//create four arrays of week visitor numbers
var week1 = [ 354, 132, 210, 221, 481, 95, 123 ];
var week2 = [ 312, 145, 198, 234, 410, 105, 100 ];
var week3 = [ 365, 148, 220, 210, 398, 115, 130 ];
var week4 = [ 330, 122, 215, 201, 420, 99, 115 ];

//create a month array of the four weeks
var month = [ week1, week2, week3, week4 ];

//test the fn for diff weeks and days
console.log(getMonthlyVisitorReport(month, 1, 2));
console.log(getMonthlyVisitorReport(month, 3, 5));
console.log(getMonthlyVisitorReport(month, 4, 7));