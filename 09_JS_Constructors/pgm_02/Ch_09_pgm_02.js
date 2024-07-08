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

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

planet1.showPlanet();


//create second planet use the buildPlanet fn
var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);

//call the showPlanet on your new planet
planet2.showPlanet();