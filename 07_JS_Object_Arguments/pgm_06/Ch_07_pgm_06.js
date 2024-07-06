 var line = function (lineLength) {
     var line = "==================================================";
     lineLength = Math.max(0, lineLength);
     lineLength = Math.min(40, lineLength);
     return line.substr(0, lineLength);
 };

 console.log(line(30));
 console.log(line(40));
 console.log(line(50));

 //test line lengths from -20 to 60 in steps of 10
 for (var i = -20; i <= 60; i += 10) {
     console.log(line(i));
 }

 var spaces = function (spaceLength) {
     var space = " "; //40spaces
     spaceLength = Math.max(0, spaceLength);
     spaceLength = Math.min(40, spaceLength);
     return space.substr(0, spaceLength);
 };

 console.log(spaces(10));
 console.log(spaces(40));
 console.log(spaces(50));

//define an emptyBox fn
var emptyBox = function (width) {
    var topBottom = line(width);
    var middle = "=" + spaces(width - 2) + "=";
    console.log(topBottom);
    for (var i =0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};
emptyBox(12);