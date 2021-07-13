const db = require("../models/workout");
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

//GET in range
router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Post new workout

router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Update workout

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbData) => {
      res.json(dbData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
