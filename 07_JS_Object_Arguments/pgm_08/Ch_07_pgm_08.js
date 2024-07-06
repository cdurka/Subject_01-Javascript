var message = "We choose to go to the Moon!";

console.log(message.substr(23,5));
console.log(message.substr(13,10));
console.log(message.substr(0, 9));

//omitting second argument
console.log(message.substr(23));
console.log(message.substr(13));
console.log(message.substr(0));


//using negative nos
console.log(message.substr(-5));
console.log(message.substr(-5, 2));