"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const movies_1 = require("./movies");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get('/movies', (req, res) => {
    const movies = (0, movies_1.getMovies)();
    res.json(movies);
});
app.post('/movies', (req, res) => {
    const { title, description, year } = req.body;
    const newMovie = {
        id: Date.now(),
        title,
        description,
        year,
    };
    (0, movies_1.addMovie)(newMovie);
    res.status(201).json(newMovie);
});
app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = (0, movies_1.getMovieById)(id);
    if (movie) {
        res.json(movie);
    }
    else {
        res.status(404).json({ message: 'Movie not found' });
    }
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
