const Router = require("router");
const express = require("express");

const router = Router();
router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});

module.exports = router;
