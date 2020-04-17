let Workout = require("../models/workoutModel");

module.exports = function (app) {
  app.get("/api/workouts", (req,res) => {
    Workout.find({}).then(data => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    });
  });

  app.put("/api/workouts/:id", (req,res) =>{
    Workout.findOneAndUpdate(
      { _id:req.params.id }, 
      { $push: { exercises: req.body } 
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });



}