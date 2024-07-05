var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
     name: "Jupiter",
     position: 5,
     type: "Gas Giant",
     radius: 69911,
     sizeRank: 1
}; 

planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389.5,
    sizeRank: 7
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position + "\n" + "Type: " + planet.type + "\n" + "Radius: " + planet.radius + " km\n" + "Size Rank: " + planet.sizeRank;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));