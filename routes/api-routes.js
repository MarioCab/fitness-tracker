const db = require("../models");
const router = require("express").Router();


// Get all workouts

router.get("/api/workouts", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});


