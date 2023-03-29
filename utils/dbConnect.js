/* This is a database connection function*/
const mongoose = require("mongoose");

async function dbConnect() {
  /* connecting to our database */
  const db = await mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("✅✅CONNECTED!"));
}

module.exports = { dbConnect };
