var sayHello;

sayHello = function () {
    console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

//function to print one by one down the page
var printHelloWorld;

printHelloWorld = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

printHelloWorld();