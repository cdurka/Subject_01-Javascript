var sale1;
var sale2;
var sale3;
var sale4;
var sale;
var calculateTax;
var displaySale;
var processSale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 18 };

calculateTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function () {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------------------");
};

processSale = function (currentSale) {
    sale = currentSale;
    calculateTax();
    displaySale();
};

processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);