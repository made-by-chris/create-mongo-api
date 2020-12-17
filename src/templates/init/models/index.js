require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.CONNECTION_URI);
};

exports.connectDB = connectDB;
