var sale1;
var sale2;
var sale3;
var sale4;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price:200, taxRate: 18 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax;

function displaySale(sale) {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("---------------------------");
}

displaySale(sale1);
displaySale(sale2);
displaySale(sale3);
displaySale(sale4);