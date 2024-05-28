const express = require("express");
const router = express.Router();
const locations = require("../data/locations");

// GET route for entire locations database
router.get("/", (req, res) => {
  res.send("Locations");
});

// GET route for individual locations
router.get("/new_location", (req, res) => {
  res.send("New Location");
  // query parameter
  res.json(locations.filter((l) => l.post_id == req.body.post_id));
});

module.exports = router;
