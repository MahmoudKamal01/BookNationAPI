const express = require("express");
const { app } = require("./app.js");
const { dbConnect } = require("./utils/dbConnect.js");
require("dotenv").config();
const port = process.env.port || 3000;

dbConnect();

app.listen(port, () => {
  console.log("Server is up and running 💚");
});
