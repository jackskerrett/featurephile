const express = require("express");
const router = express.Router();
const get_list_of_features = require("../queries/features_list");
const get_feature_file = require("../queries/feature_file");

router.get("/", async (req, res) => {
  try {
    const features = await get_list_of_features();
    res.json(features);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:featureId", async (req, res) => {
  try {
    const feature_file = await get_feature_file(req.params.featureId);
    res.json(feature_file);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
