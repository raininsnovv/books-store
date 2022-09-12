const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Empty",
  },
  description: {
    type: String,
    default: "Empty",
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
