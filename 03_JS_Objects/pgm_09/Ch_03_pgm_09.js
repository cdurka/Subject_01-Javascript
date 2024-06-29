var book1;
var book2;
var book3;

book1 = {
    title  : "The Hobbit",
    author : "J. R. R. Tolkien"
};

book2 = {
    title  : "Northern Lights",
    author : "Philip Pullman"
};

//third book
book3 = {
    title  : "To Kill a Mockingbird",
    author : "Hrper Lee"
};

//log its details
console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);
console.log(book3.title + " by " + book3.author);

//third property
book1.published = 1937;
book2.published = 1995;
book3.published = 1960;

//upate messages logged to include new property
console.log(book1.title + " by " + book1.author + ", published in " + book1.published);
console.log(book2.title + " by " + book2.author + ", published in " + book2.published);
console.log(book3.title + " by " + book3.author + ", published in " + book3.published);