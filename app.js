const express = require("express");
const app = express();
app.use(express.json());

const { bookRouter } = require("./routes/bookRoutes.js");

app.get("/", (req, res) => {
  res.write("Home page");
  res.end();
});

app.use("/api/books/", bookRouter);

module.exports = {
  app,
};
