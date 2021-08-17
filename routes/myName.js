const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("myName");
});

router.post("/", function (req, res) {
  res.cookie("username", req.body.username);
  console.dir(req.body.username);
  res.redirect("/myName");
});

module.exports = router;
