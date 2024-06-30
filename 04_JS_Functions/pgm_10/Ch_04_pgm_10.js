var movie1;
var showMovieInfo;
var movie;
//movie2 with the properties
var movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------------");
};

movie = movie2; //assign movie2 to movie
showMovieInfo();