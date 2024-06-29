var player1;
player1 = {
    name: "Max",
    score: 0
};
console.log(player1.name + " has scored " + player1.score);
player1.score = player1.score + 50;
console.log(player1.name + " has scored " + player1.score);

//increase player1's score by 10%
player1.score = player1.score * 1.1;
console.log(player1.name + " has scored " + player1.score + " after a 10% increase");

//second player
var player2 = {
    name: "Alex",
    score: 30
};

//find the sum
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);