const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  res.json(things);
});

router.post("/", async (req, res) => {
  const newThing = req.body;
  const createThing = await Thing.create(newThing);
  res.status(201);
  res.json(createThing);
});

module.exports = router;
