const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new wrokout
router.post('/', createWorkout)

// DELETE a new wrokout
router.delete('/:id', deleteWorkout)

// UPDATE a wrokout
router.patch('/:id', updateWorkout)

module.exports = router