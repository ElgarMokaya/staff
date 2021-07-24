const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()
const DB_URL = process.env.MONGO_URL;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const connection = mongoose
  .connect(DB_URL, options)
  .then(() => {
    console.log(`Database connected successfully`);
  })
  .catch((err) => {
    console.log(`Database connection error`, err);
  });

module.exports = connection;
