var showMessage;

showMessage = function (message) {
    console.log("The message is: ");
    console.log(message); //display prefixed text on a separate line
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

//declare a myMessage variable and assigm it a string value
var myMessage = "This is my custom message.";

//call the showMessage function with myMessage as argument
showMessage(myMessage);
