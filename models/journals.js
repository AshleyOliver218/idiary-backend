const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date:  { type: String, required: true },
    mood:  { type: String},
    entry: { type: String, required: true },
    goal1: { type: String},
    goal2: { type: String}, 
    goal3: { type: String}, 
    goal1IsCompleted:{ type:Boolean, default: false},
    goal2IsCompleted:{ type:Boolean, default: false},
    goal3IsCompleted:{ type:Boolean, default: false}
});

const Journals = mongoose.model('Journal', journalSchema)

module.exports = Journals