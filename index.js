const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/books.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/authors.route"));
app.use(require("./routes/reviews.route"));

app.get("/", (req, res) => {
  res.json("LOOOREEEM");
});

mongoose.connect(
  "mongodb+srv://raininsnovv:Nukaktebeskazat_1@cluster0.muvlnn7.mongodb.net/book-store",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Успешное соединение с MongoDB");

    app.listen(3060, () => {
      console.log("started");
    });
  }
);
