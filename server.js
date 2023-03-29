const express = require("express");
const { app } = require("./app.js");
require("dotenv").config();
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("Server is up and running 💚");
});
