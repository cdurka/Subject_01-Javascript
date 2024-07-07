var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

//add two more names to the players array
players.push("Torrin", "Azura");

//run the program
showArguments = function (item, index, wholeArray) {
    //change the first console.log
    console.log("Item: " + wholeArray[index]);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
};

players.forEach(showArguments);