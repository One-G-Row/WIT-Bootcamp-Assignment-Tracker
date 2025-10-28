const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
    assignment_name:{
        type: String,
        maxLength: 100,
        required: true
    },
    date_assigned: {
        type: Date,
        default: Date.now(),
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }, 
    github_url: {
        type: String,
        maxLength: 100,
        required: true
    }
}, {
 timestamps: true //Adds createdAt and updatedAt automatically
 })

module.exports = mongoose.model('Assignment', assignmentSchema)