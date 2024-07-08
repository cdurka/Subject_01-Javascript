var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
    };
};

//create first planet
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
    
//call showPlanet method on first planet
    planet1.showPlanet();

//create second planet
var planet2 = new Planet("Mars", 4, "Terrestrial");

//call showPlanet methood on the second planet
planet2.showPlanet();
