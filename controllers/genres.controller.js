const Genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenre: async (req, res) => {
    try {
      const { name, description } = req.body;
      const genre = await Genre.create({
        name,
        description,
      });
      return res.json(genre);
    } catch (e) {
      return res.json(e.message);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      return res.json("Genre deleted");
    } catch (e) {
      return res.json(e.message);
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const genres = await Genre.find();
      return res.json(genres);
    } catch (e) {
      return res.json(e.message);
    }
  },
};
