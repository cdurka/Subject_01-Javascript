var scores = [ 3, 1, 8, 2 ];

//add fifth score to the array
scores.push(5);

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]);
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);
console.log("The fifth score is " + scores[4]);

//log the value of last element
console.log("The last score is " + scores[scores.length - 1]);

//add an extra score to array
scores.push(10);

//log the updated array and last score
console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]);
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);
console.log("The fifth score is " + scores[4]);
console.log("The sixth score is " + scores[5]);
console.log("The last score is " + scores[scores.length - 1]);