const express = require("express");
const path = require("path");
//const { connect } = require("mongoose");
//const { Mongoose } = require('mongoose')
//const Regform=require('./../MODELS/regform')
const theRouter = require("./src/routes/User.routes");
const app = express();

const DB_URL = "mongodb://localhost:27017/app2";
// db connection
connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.error(`Database err connection`, err);
  });

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/staff", theRouter);
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));
//app.use('/views/regform',theRouter)

app.get("/", (req, res) => {
  //console.log(err)
  res.render("home");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) console.log("Error", err);
  console.log(`App running on http://localhost:${PORT}`);
  // console.log(path.join(__dirname,"public"));
});
