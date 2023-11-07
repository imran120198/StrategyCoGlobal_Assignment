const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    Poster: { type: String },
    Title: { type: String },
    Release: { type: Number },
    Genre: { type: String },
    Country: { type: String },
    Actors: { type: String },
    Writer: { type: String },
    Director: { type: String },
    Rating: { type: Number },
    Plot: { type: String },
  },
  {
    timestamps: true,
  }
);

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = {
  MovieModel,
};
