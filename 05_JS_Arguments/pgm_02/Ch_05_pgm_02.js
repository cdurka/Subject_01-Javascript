var msg;
var showMessage;
msg = "It's full of stars!";
showMessage = function () {
    console.log(msg); //updated to use the correct variable name
};
showMessage();

//declare another message variable and assign value
var newMessage = "Hello, universe!";

//display the new message as well as old one
console.log(newMessage);

//display single message created by joining two strings
var combinedMessage = msg + " " + newMessage;
console.log(combinedMessage);