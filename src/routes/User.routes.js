const express = require("express");
const router = express.Router();
//const Regform=require('./MODELS/regform')

router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
