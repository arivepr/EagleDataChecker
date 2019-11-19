import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "tt4154756",
    title: "Avengers: Infinity War (Plus Bonus Content)",
    type: "movie"
  },
  {
    _id: "tt4154796",
    title: "Marvel Studios' Avengers: Endgame (With Bonus)",
    type: "movie"
  },
  {
    _id: "tt2283362",
    title: "Jumanji: Welcome To The Jungle",
    type: "movie"
  },
  {
    _id: "tt4154756",
    title: "Avengers: Infinity War (Plus Bonus Content)",
    type: "movie"
  },
  {
    _id: "tt1825683",
    title: "Black Panther (2018)(Theatrical Version)",
    type: "movie"
  },
  {
    _id: "tt1396484",
    title: "IT",
    type: "movie"
  },
  {
    _id: "tt4633694",
    title: "Spider-Man: Into The Spider-Verse",
    type: "movie"
  },
  {
    _id: "tt5463162",
    title: "Deadpool 2",
    type: "movie"
  },
  {
    _id: "tt1270797",
    title: "Venom",
    type: "movie"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
