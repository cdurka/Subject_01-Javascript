//guess the number
/* run the given program
var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
  };
  
  var guess = getGuesser();
*/

var between = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getGuesser = function () {
    var secret = between(30, 50); //secret number b/w 30 & 50


return function (userNumber) {
    if (userNumber === secret) {
        return "Well done!";
    } else {
        return "Unlucky, try again.";
    }
};
};

var guess = getGuesser();

//example guesses
console.log(guess(35)); // should log "Unlucky, try again." or "Well done!"
console.log(guess(40)); // should log "Unlucky, try again." or "Well done!"
console.log(guess(45)); // should log "Unlucky, try again." or "Well done!"
