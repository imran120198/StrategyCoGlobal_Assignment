const { Router } = require("express");

const MovieRoute = Router();
const { MovieModel } = require("../Model/Movie.model");

// Get all movie Data
MovieRoute.get("/movies", async (req, res) => {
  try {
    const data = await MovieModel.find({});
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send("Error in getting data");
  }
});

// Get data by id
MovieRoute.get("/movies/:id", async (req, res) => {
  try {
    const data = await MovieModel.findById(req.params.id);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send("Error in getting data by id");
  }
});

//Post data
MovieRoute.post("/movies", async (req, res) => {
  try {
    const {
      Poster,
      Title,
      Release,
      Genre,
      Country,
      Actors,
      Writer,
      Director,
      Rating,
      Plot,
    } = req.body;
    const data = new MovieModel({
      Poster,
      Title,
      Release,
      Genre,
      Country,
      Actors,
      Writer,
      Director,
      Rating,
      Plot,
    });
    await data.save();
    res.status(201).send("Data posted");
  } catch (err) {
    res.status(500).send("Error in posting data");
  }
});

// Edit data
MovieRoute.put("/movies/:id", async (req, res) => {
  try {
    const updatedata = await MovieModel.findByIdAndUpdate(req.params.id);
    updatedata.content = req.body.content;
    await updatedata.save();
    res.status(201).send("Edited data");
  } catch (err) {
    res.status(501).send("Error in Editing data");
  }
});

//Delete data
MovieRoute.delete("/movies/:id", async (req, res) => {
  try {
    const deletedData = await MovieModel.findByIdAndDelete(req.params.id);
    res.status(201).send(deletedData);
  } catch (err) {
    res.status(501).send("Deleted");
  }
});

module.exports = {
  MovieRoute,
};
