//Imports
const express = require('express');
const router = express.Router();
const Journals = require('../models/journals')


// Index Route (all Journals)
router.get('/', (req, res)=>{
    Journals.find({}, (err, foundJournals)=>{
        res.json(foundJournals)//shows all journal titles and dates
    })
});
// New journal route in react

// Delete Route (Delete Journal)
router.delete('/:id', (req, res)=>{
    Journals.findByIdAndRemove(req.params.id, (err, deletedJournal)=>{
        res.json(deletedJournal)//allows deletion of a journal
    })
});
// Update Route
router.put('/:id', (req, res)=>{
    Journals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedJournal)=>{
        res.json(updatedJournal) //response to front end Edit route
    })
});
// Create Route
router.post('/', (req, res)=>{
    Journals.create(req.body, (err, createdJournal)=>{
        res.json(createdJournal) //response to front end New route (creates new journal)
    })
})
// Edit journal route in react

// Show
router.get('/:id', (req, res)=>{
    Journals.findById(req.params.id, (err, foundJournal)=>{
        res.json(foundJournal) //displays a singe 'journal entry'
    })
})


module.exports = router