const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date:  { type: String, required: true },
    entry: { type: String, required: true },
    goal1: { type: String, isCompleted:{ type:Boolean, default: false} },
    goal2: { type: String, isCompleted:{ type:Boolean, default: false} },
    goal3: { type: String, isCompleted:{ type:Boolean, default: false} }
});

const Journals = mongoose.model('Journal', journalSchema)

module.exports = Journals