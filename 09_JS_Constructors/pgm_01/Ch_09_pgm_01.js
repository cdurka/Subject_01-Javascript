var buildPlanet = function (name, position, type) {
    var planet = {};
    
    planet.name = name;
    planet.position = position;
    planet.type = type;

    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

console.log("Planet 1:");
console.log("Name: " + planet1.name);
console.log("Position: " + planet1.position);
console.log("Type: " + planet1.type);

//build second planet
var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);

//log the details of the second planet
console.log("\nPlanet 2:");
console.log("Name: " + planet2.name);
console.log("Type: " + planet2.type);