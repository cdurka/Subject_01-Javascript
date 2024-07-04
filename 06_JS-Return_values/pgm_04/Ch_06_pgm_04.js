var add;
add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var sum = add(50,23);
console.log('The sum of 50 and 23 is ' + sum);

//find and display sum of a diff pair of nos.
var anotherSum = add(15,35);
console.log('The sum of 15 and 35 is ' + anotherSum);

//display sum of 50 and 23 with descriptive msg
console.log('The sum of 50 and 23 is ' + add(50,23));

//nest calls to add to add more than two nos.
var nestedSum = add(add(10,20),30);
console.log('The sum of 10,20, and 30 is ' + nestedSum);

//function to return sum of three nos.
var addThreeNumbers = function (number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sumThreeNumbers = addThreeNumbers(5,10,15);
console.log('The sum of 5,10, and 15 is ' + sumThreeNumbers);