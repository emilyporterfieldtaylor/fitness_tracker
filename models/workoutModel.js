const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   day:{
       type:Date,
       default: new Date().setDate(new Date().getDate())
},
exercises: [{
    type: {
        type: String,
        trim: true
    },

    name: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        min: 0
    },

    weight: {
        type: Number,
        min: 1
    },

    reps: {
        type: Number,
        min: 1
    },

    sets: {
        type: Number,
        min: 1
    },

    distance: Number
}]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 