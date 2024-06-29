var bookTitle;
var bookAuthor;
bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

//second book and value
var secondBookTitle;
var secondBookAuthor;
secondBookTitle = "1984";
secondBookAuthor = "George Orwell";

//code to log
console.log(secondBookTitle + " by " + secondBookAuthor);
//repeat for third book
var thirdBookTitle;
var thirdBookAuthor;
thirdBookTitle = "To Kill a Mockingbird";
thirdBookAuthor = "Hrper Lee";

console.log(thirdBookTitle + " by " + thirdBookAuthor);
  
//code needed for 10 books or 100 books (example for 5)
 var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien"},
    { title: "1984", author: "George Orwell"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "Pride and Prejudice", author: "Jane Austen"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
 ];
 //Add much as needed...
 //for large no.of books using an array of object is more efficient
  books.forEach(function(book) {console.log(book.title + " by " + book.author);});