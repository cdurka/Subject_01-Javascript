var getPlayerName;

getPlayerName = function (playerName) {
    
    var formattedName = "==== " + playerName + " ====";
    formattedName = "\n|\n| " + formattedName + "\n|";
    return formattedName;
};

console.log(getPlayerName("Kiki"));
console.log(getPlayerName("Mahesha"));
console.log(getPlayerName("Jahver"));