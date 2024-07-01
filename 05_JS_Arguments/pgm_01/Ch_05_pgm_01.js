var message;
var showMessage;

//change the message
message = "Hello, world!";

showMessage = function () {
    console.log(message); //initialize this works
};
showMessage();

//changing the variable name inside console.log to a no-existing one
showMessage = function () {
    console.log(msg); //this will cause an error(reference error)
};
showMessage();