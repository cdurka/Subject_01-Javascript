var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, price) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        price: price
    };
};

getCarInfo = function (car) {
    return car.make.toUpperCase() + " " + car.model + " (" + car.year + ")";
};

car1 = buildCar("Toyota", "Camry", 2021, "White", 24000);
car2 = buildCar("Honda", "Civic", 2020, "Black", 22000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));