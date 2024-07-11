var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();
    };

    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    this.showMoons = function () {
        console.log("Moons:");
        this.moons.forEach(function(moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };

    this.getMoon = function (index) {
        return this.moons[index];
    };
};

//create planets and add moons
var planet1 = new Planet("Jupiter",5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune",8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury",1, "Terrestrial");

//adding a new moon to each planet
planet1.addMoon("Ganymede");
planet2.addMoon("Nereid");
planet3.addMoon("No Moons");

//show each planet's details
[ planet1, planet2, planet3 ].forEach(function (planet)
{
    planet.showPlanet();
});

//get a specific moon
console.log(planet1.getMoon(1));
console.log(planet2.getMoon(0));
console.log(planet3.getMoon(0));