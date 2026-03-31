const mongoose = require("mongoose");
const { MONGODB_URL } = require("./env");

const connectDb = async () => {
  await mongoose.connect(MONGODB_URL);
  if (mongoose.connection.readyState !== 1) {
    throw new Error("Database connection failed");
  }
  console.log("Database connected successfully");
  return mongoose.connection;
};

module.exports = connectDb;
