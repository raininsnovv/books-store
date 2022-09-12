const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Not filled",
  },
  description: {
    type: String,
    default: "Not filled",
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
