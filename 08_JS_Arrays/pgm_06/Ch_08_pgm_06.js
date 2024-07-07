var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();
console.log(removed + " was removed");
console.log(items.join(" and "));

//push another item into array
items.push("The Great Wall of China");
console.log(items);

//log the joined items
console.log(items.join(" and "));

//set one of the items using square brackets
items[1] = "The Taj Mahal";
console.log(items);

//push more than one item at a time
items.push("Machu Picchu", "Christ the Redeemer");
console.log(items);

// log the joined items again
console.log(items.join(" and "));