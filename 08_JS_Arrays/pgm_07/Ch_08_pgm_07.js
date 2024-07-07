var items;
var showInfo;

items = [
    "The Pyramids",
    "The Grand Canyon",
    "Bondi Beach"
];

// add a few extra items to the array
items.push("The Great Wall of China");
items[4] = "Machu Picchu";
items.push("Christ the Redeemer");

showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

items.forEach(showInfo);

//new function to find the total no of letters in the items array
var getTotalLetters = function(array) {
    var totalLetters = 0;
    array.forEach(function(item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

var totalLetters = getTotalLetters(items);
console.log("Total number of lettersin all items: " + totalLetters);