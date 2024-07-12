var getGuesser = function (range, offset) {
    var secret = Math.floor(Math.random() * range + offset);

    return function (userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else if (userNumber > secret) {
            return "Too high!";
        } else {
            return "Too low!";
        }
    };
};

var guess = getGuesser(20, 10);

//example guesses
console.log(guess(15));
console.log(guess(18));
console.log(guess(25));