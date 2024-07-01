var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
    var result;
    result = numberToSquare * numberToSquare;
    console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};
square(10);
square(-2);
square(1111);
square(0.5);

//define cube function
cube = function (numberToCube) {
    var result;
    result = numberToCube * numberToCube * numberToCube;
    console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

//test cube function
cube(2);
cube(-3);
cube(10);
cube(0.5);

//define squareRoot function
squareRoot = function (number) {
    var result;
    result = Math.sqrt(number);
    console.log("The square root of " + number + " is " + result);
};

//test squareRoot function
squareRoot(9);
squareRoot(16);
squareRoot(0.25);
squareRoot(100);