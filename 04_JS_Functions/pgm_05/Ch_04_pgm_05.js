var findTotal;
var displayMenu;
findTotal = function () {
    result = number1 + number2;
};

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Quit");
};

//declare number1,number2 and result variables
var number1;
var number2;
var result;

//assign values
number1 = 10;
number2 = 20;

//run the findTotal function
findTotal();

//display result
console.log("The total is: " + result);

//run the displayMenu function
displayMenu();