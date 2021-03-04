const mongoose = require("mongoose");
const WorkoutSchema = mongoose.Schema;

var WorkoutSchema = new Schema(
{
    day:{
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true

            },
            name:{
                type: String,
                trim: true,
                required: true,
            },
            duration:{
                type: Number,
                required: TextTrackCue,
            },
            weight:{
                type: Number,
            },
            reps:{
                type: Number
            },
            sets:{
                type: Number,
                required: false,
            },
            distance: {
                type: Number,
                required: false,
            }
        }
    ]
 
});

// Compile model from schema
var Workout = mongoose.model('Workout', WorkoutSchema );



module.exports = Workout;