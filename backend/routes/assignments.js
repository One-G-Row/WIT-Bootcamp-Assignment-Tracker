const express = require('express')
const router = express.Router()
const {getAllAssignments, createAnAssignment, updateAnAssignment, getAnAssignment, deleteAnAssignment} = require('../controllers/assignmentController')

//fetch all assignments
router.route('/')
    .get(getAllAssignments)
    .post(createAnAssignment)

//update, get and delete an assignment by id 
router.route('/:id')
    .get(getAnAssignment)
    .put(updateAnAssignment)
    .delete(deleteAnAssignment)

module.exports = router