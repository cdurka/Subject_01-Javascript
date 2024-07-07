var spacer = {
    blank: function () {
        return "";
    },

    newLine: function () {
        return "\n";
    },

    line: function (length, character)
    {
        var longString = "**************************************************";
        longString += "-----------------------------------------------------";
        longString += "=====================================================";
        longString += "+++++++++++++++++++++++++++++++++++++++++++++++++++++";
        longString += "                                      ";

        length = Math.max(0, length);
        length = Math.min(40, length);
        return
        longString.substr(longString.indexOf(character), length);
    },

    wrap: function (text, length, character) {
        var padLength = length - text.length - 3;
        var wrapText = character + " " + text;
        wrapText += spacer.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function(text, length, character) {
        var boxText = spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        boxText += spacer.wrap(text, length, character) + spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        return boxText;
    }
};

var getPlayerName = function (player)
{
    return player.name;
};

var getPlayerHealth = function (player)
{
    return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player)
{
    return player.name + " is in " + player.place;
};

var getPlayerItems = function (player)
{
    var itemsString = "Items:" + spacer.newLine();
    player.items.forEach(function(item, index) {
        itemsString += "   " + (index + 1) + ". " +item + spacer.newLine();
    });
    return itemsString;
};

var getPlayerInfo = function (player, character) {
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var longest = Math.max(place.length, health.length) + 4;

    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);

    info += spacer.newLine();
    info += "  " + getPlayerItems(player);
    info += spacer.newLine();
    info += spacer.line(longest, character);

    info += spacer.newLine();

    return info;
};

var showPlayerInfo = function (player, character) {
    console.log(getPlayerInfo(player, character));
};

var showItem = function(player, itemNumber) {
    var itemIndex = itemNumber - 1;
    if (itemIndex >= 0 && itemIndex < player.items.length) {
        console.log("Item " + itemNumber + ": " + player.items[itemIndex]);
    } else {
        console.log("Invalid item number.");
    }
};

var addItem = function(player, newItem) {
    player.items.push(newItem);
    console.log(newItem + " added to " + player.name + "'s items.");
};

var removeItem = function(player) {
    if (player.items.length > 0) {
        var removedItem = player.items.pop();
        console.log(removedItem + " removed from " + player.name + "'s items.");
    } else {
        console.log(player.name + " has no items to remove.");
    }
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: ["a trusty lamp"]
};

console.log("Initial Player Info:");
showPlayerInfo(player1, "=");

addItem(player1, "a rusty key");

console.log("\nPlayer Info after Adding an Item:");
showPlayerInfo(player1, "*");

removeItem(player1);

console.log("\nPlayer Info after Removing an Item:");
showPlayerInfo(player1, "+");

console.log("\nDisplaying Item 1:");
showItem(player1, 1);