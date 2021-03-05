const db = require("../models/workout");
const router = require("express").Router();

router.get('/api/workouts', (req, res) =>{
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.Duration = total;
        });
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        console.log("Workout");
        console.log(dbWorkout);

        res.json(dbWorkout);

    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;