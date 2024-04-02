"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieById = exports.addMovie = exports.getMovies = void 0;
let movies = [];
function getMovies() {
    return movies;
}
exports.getMovies = getMovies;
function addMovie(movie) {
    movies.push(movie);
}
exports.addMovie = addMovie;
function getMovieById(id) {
    return movies.find((movie) => movie.id === id);
}
exports.getMovieById = getMovieById;
