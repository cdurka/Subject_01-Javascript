var showSum;

showSum = function (number1, number2)
{
    var total = number1 + number2;
    console.log("The sum is " + total);
};
showSum(30, 23);
showSum(2.8, -5);
 
//use the showSum fn to add 56 & 74
showSum(56, 74);

//create the showProduct fn to multiply two numbers
var showProduct;

showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

//use the showProduct function to multiply three pairs of numbers
showProduct(3, 5);
showProduct(10, 2);
showProduct(7.5, 8);

//create showDifference fn to subtract two numbers
var showDifference;

showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

//use showDifference fn
showDifference(10, 5);
showDifference(20, 4);
showDifference(15, 10);

//create showQuotient fn to divide two numbers
var showQuotient;

showQuotient = function (number1, number2) {
    if (number2 !== 0) {
        var quotient = number1 / number2;
        console.log("The quotient is " + quotient);
    }
    else {
        console.log("Division by zero is not allowed.");
    }
};

//use the showQuotient fn
showQuotient(10, 2);
showQuotient(20, 4);
showQuotient(15, 3);