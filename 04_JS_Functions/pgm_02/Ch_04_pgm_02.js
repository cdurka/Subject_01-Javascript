var movie1;
var movie2;
var movie3;
var movie4;
movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};
movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};
movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J. Abrams"
};
movie4 = {
    title: "Mad Max: Fury Road",
    actors: "Tom Hardy, Charlize Theron",
    directors: "George Miller"
};
function displayMovieInfo(movie) {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("-----------------------------------\n");
}
displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

//create objects to represent three calender events
var event1 = {
    title: "Meeting with Bob",
    date: "2024-07-01",
    time: "10:00 AM",
    location: "Conference Room A"
};
var event2 = {
    title: "Lunch with Alice",
    date: "2024-07-02",
    time: "12:30 PM",
    location: "Cafe Delight"
};
var event3 = {
    title: "Project Deadline",
    date: "2024-07-03",
    time: "All day",
    location: "Office"
};
function displayEventInfo(event) {
    console.log("Event: " + event.title);
    console.log("Date: " + event.date);
    console.log("Time: " + event.time);
    console.log("Location: " + event.location);
    console.log("--------------------------\n");

}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);