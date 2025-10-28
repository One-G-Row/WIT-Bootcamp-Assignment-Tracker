const Assignment = require('../models/Assignment')

//get an assignment
exports.getAnAssignment = async(req, res, next) => {
    try{
         const assignment = await Assignment.findById(req.params.id)

         if(!assignment){
            return res.status(404).json({
            success: false,
            message: "Assignment not found"
         })
         }
         res.status(200).json({
            success: true,
            data: assignment
         })

       
        }catch(err){
        next(err)
    }

}

//update an assignment
exports.updateAnAssignment = async(req, res, next) => {
    try{
        const assignment = await Assignment.findByIdAndUpdate(req.params.id)

        if(!assignment){
            return res.status(404).json({
                success: false,
                message: 'Assignment not found'
            })
        }

        res.status(200).json({
            success: true,
            data: assignment
        })

    }catch(err){
        next(err)
    }

}

//delete an assignment
exports.deleteAnAssignment = async(req, res, next) => {
    const assignment = await Assignment.findByIdAndDelete(req.params.id)

    try{
        if(!assignment){
            return res.status(404).json({
                success: false,
                message: "Assignment not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Assingment deleted successfully",
            data: {}
        })
    }catch(err){
        next(err)
    }
}

//get all assignments
exports.getAllAssignments = async(req, res, next) => {
    try{
    const assignments = await Assignment.find()

    res.status(200).json({
        success: true,
        count: assignments.length,
        data: assignments
    })
    }catch(err){
        next(err)
    }

}

//create an assignment
exports.createAnAssignment = async(req, res, next) => {
    try{
        const assignment = await Assignment.create(req.body)

        res.status(201).json({
            success: true,
            data : assignment
        })
    }catch(err){
        next(err)
    }
}

