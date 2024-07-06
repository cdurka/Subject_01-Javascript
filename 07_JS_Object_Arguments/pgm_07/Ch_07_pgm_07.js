var getBig = function (str) {
    return str.toUpperCase();
};

var getSmall = function (str) {
    return str.toLowerCase();
};

var planet = "Jupiter";
var bigPlanet = getBig(planet);
var smallPlanet = getSmall(planet);

console.log(planet + " becomes " + bigPlanet);
console.log(planet + " becomes " + smallPlanet);