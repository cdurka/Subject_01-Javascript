// Task 1: Create an empty set
const emptySet = new Set();
console.log("Empty Set:", emptySet);

// Task 2: Create a set containing numbers from 0 to 10 using a loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
}
console.log("Number Set:", numberSet);

// Task 3: Remove an element from a set
numberSet.delete(5); // Remove number 5 from the set
console.log("Number Set after deleting 5:", numberSet);

// Task 4: Clear a set
numberSet.clear();
console.log("Cleared Number Set:", numberSet);

// Task 5: Create a set of 5 string elements from an array
const countries = ['Finland', 'Sweden', 'Norway'];
const countrySet = new Set(countries);
console.log("Country Set:", countrySet);

// Task 6: Create a map of countries and the number of characters in each country name
const countryMap = new Map();
countries.forEach(country => {
    countryMap.set(country, country.length);
});
console.log("Country Map:", countryMap);
