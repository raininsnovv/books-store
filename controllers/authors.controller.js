const Author = require("../models/Author.model");

module.exports.authorsController = {
  addAuthor: async (req, res) => {
    try {
      const { name, description } = req.body;
      const author = await Author.create({
        name,
        description,
      });
      return res.json(author);
    } catch (e) {
      return res.json(e.message);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      await Author.findByIdAndDelete(req.params.id);
      return res.json("Author deleted");
    } catch (e) {
      return res.json(e.message);
    }
  },
  getAllAuthors: async (req, res) => {
    try {
      const data = await Author.find();
      return res.json(data);
    } catch (e) {
      return res.json(e.message);
    }
  },
};
