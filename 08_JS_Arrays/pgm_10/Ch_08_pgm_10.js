//create an array of rectangle objects

var rectangles = [
    { length: 5, width: 3 },
    { length: 7, width: 2 },
    { length: 4, width: 4 }
];

//define an assignArea fn
var assignArea = function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};

//define a showInfo fn
var showInfo = function(rectangle) {
    console.log("Rectangle with Length: " + rectangle.length + ", Width: " + rectangle.width + ", Area: " + rectangle.area);
};

//use forEach and your fn to display info about each rectangle
rectangles.forEach(function(rectangle)
{
    assignArea(rectangle);
    showInfo(rectangle);
});
