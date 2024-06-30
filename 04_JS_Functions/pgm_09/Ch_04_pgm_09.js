var showMovieInfo;
showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------------");
};

var movie = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo();