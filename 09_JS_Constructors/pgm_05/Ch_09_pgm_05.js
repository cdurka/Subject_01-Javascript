var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };

    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        return this.moons.pop();
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europe");

planet1.showPlanet();

var planet2 = new Planet("Zyra", 9, "Ice Giant");

planet2.addMoon("Titan");
planet2.addMoon("Hyperion");
planet2.addMoon("Phoebe");

planet2.showPlanet();
planet2.removeMoon();
planet2.showPlanet();