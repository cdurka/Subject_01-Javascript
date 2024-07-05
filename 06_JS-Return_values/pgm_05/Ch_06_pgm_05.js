var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) //add discount parameter
 { 
    return callOutCharge + costPerHour * numberOfHours - discount; //update fn to subtract discount from total
};

//display total cost for 3 hrs with no discount
console.log("$" + totalCost(30, 40, 3, 0));

//what is the cost for 12hrs work?
console.log("$" + totalCost(30, 40, 12, 0));


//update call to totalCost to display with a $20 off coupon
console.log("$" + totalCost(30, 40, 3, 20));