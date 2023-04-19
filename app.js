const express = require("express");
const app = express();
app.use(express.json());

const { bookRouter } = require("./routes/bookRoutes.js");
const { reviewRouter } = require("./routes/reviewRoutes.js");

app.get("/", (req, res) => {
  res.write("Home page");
  res.end();
});

app.use("/api/books/", bookRouter);
app.use("/api/books/", reviewRouter);

module.exports = {
  app,
};
