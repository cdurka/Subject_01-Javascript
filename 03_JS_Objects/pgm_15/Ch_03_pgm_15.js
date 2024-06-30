var player;
player = {
    name: "Kandra",
    health: 5,
    place: "The Dungeon of Doom",
    items: "a rusty key, The Sword of Destiny, a piece of cheese"
};
 
console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items);

//second player
var player2 = {
    name: "Doran",
    health: 75,
    place: "The Enchanted Forest",
    items: "a magic wand, a healing potion, a map"
};

//log their details
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items);