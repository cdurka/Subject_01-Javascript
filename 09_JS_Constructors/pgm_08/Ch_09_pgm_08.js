var CalenderEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;

    this.showEvent = function () {
        var dateString = this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";

        console.log(this.title + ": " + dateString);
    };
};

//create the first calender event
var calEvent1 = new CalenderEvent("Annual Review","3/5/16","4.00pm","5.00pm");
calEvent1.showEvent();

//create the second calender event
var calEvent2 = new CalenderEvent("Team Meeting","4/5/16","2.00pm","3.00pm");
calEvent2.showEvent();