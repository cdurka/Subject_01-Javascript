var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth;
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);

//call the showPlayerHealth fn using your own arguments
showPlayerHealth("Arin", 60);
showPlayerHealth("Lex", 30);
showPlayerHealth("Morgan", 75);