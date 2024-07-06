var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky"];

console.log(scores);
console.log(names);

//add extra element
scores.push(5);
names.push("Zara");

console.log(scores);
console.log(names);

//declare third variable
var akaScores;

//assign scores array to akaScores
akaScores = scores;

//log akaScores to the console
console.log(akaScores);