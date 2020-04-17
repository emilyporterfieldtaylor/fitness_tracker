let Workout = require("../models/workoutModel");

module.exports = function (app) {
  app.get("/api/workouts", (req,res) => {
    Workout.find({}).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  });





}