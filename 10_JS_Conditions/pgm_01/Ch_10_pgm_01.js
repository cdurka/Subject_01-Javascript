//guess the number
//run the program
// var secret = 8;

// var guess = function(userNumber) {
//     if(userNumber === secret) {
//         console.log("Well done!");
//     }
// };

var secret = 8;

var guess = function (userNumber) {
    if (userNumber > secret) {
        console.log("Too high!");
    }
};

//test the guess function with diff nos.
guess(2); //should not log anything
guess(10); //should log "Too high!"
guess(8); //should not log anything