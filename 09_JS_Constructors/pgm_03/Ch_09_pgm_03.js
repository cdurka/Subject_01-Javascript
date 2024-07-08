var buildPlanet = function (name, position, type) {
    var planet = {};

    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

    return planet;
};


//add two more planets to the planets array
var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial"),
    buildPlanet("Earth", 3, "Terrestrial"),
    buildPlanet("Saturn", 6, "Gas Giant")
];

//code to isually separate each planet from the next
planets.forEach(function (planet) {
    planet.showPlanet();
    console.log("----------------");
});