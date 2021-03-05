const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
{
    day:{
        type: Date,
        default: () => new Date()
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
                required: false,
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
},
{
    toJSON: {
        virtuals: true
    }
} 
);

WorkoutSchema.virtual("Duration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// Compile model from schema
const Workout = mongoose.model('Workout', WorkoutSchema );



module.exports = Workout;