//running the given program separately
//  var secret = 8;

// var guess = function (userNumber) {
//     if (userNumber === secret) {
//         console.log("Well done!");
//     } else {
//         console.log("Unlucky, try again");
//     }
// };

var secret = 8;

var guess = function (userNumber) {
    if (userNumber !== secret) {
        console.log("Unlucky, try again.");
    } else {
        console.log("Well done!");
    }
};

//test the guess function with diff nos.
guess(2); //should log "Unlucky,try again."
guess(8); //should log "Well done!"
guess(10); //should log "Unlucky,try again."
