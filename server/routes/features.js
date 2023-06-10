const express = require("express");
const router = express.Router();
const queries = requires("../queries");

router.get("/", (req, res) => {
  res.json([
    {
      id: "f1",
      name: "Feature: Suck a dick",
      valueStatement: "As a, I want, so that",
    }
  ]);
});

module.exports = router;