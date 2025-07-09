// connect.js
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
}

module.exports = connect;
