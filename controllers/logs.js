//Imports
const express = require('express');
const router = express.Router();
const Logs = require('../models/logs')


// Index Route
router.get('/', (req, res)=>{
    Logs.find({}, (err, foundLogs)=>{
        res.json(foundLogs)//shows all log titles and dates
    })
});
// New log route in react

// Delete Route
router.delete('/:id', (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, deletedLog)=>{
        res.json(deletedLog)//allows deletion of a log
    })
});
// Update Route
router.put('/:id', (req, res)=>{
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog)=>{
        res.json(updatedLog) //response to front end Edit route
    })
});
// Create Route
router.post('/', (req, res)=>{
    Logs.create(req.body, (err, createdLog)=>{
        res.json(createdLog) //response to front end New route (creates new log)
    })
})
// Edit log route in react

// Show
router.get('/:id', (req, res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{
        res.json(foundLog) //displays a singe 'log entry'
    })
})


module.exports = router