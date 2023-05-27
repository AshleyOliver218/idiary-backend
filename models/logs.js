const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    goal1: { type:Boolean, default: false },
    goal2: { type:Boolean, default: false },
    goal3: { type:Boolean, default: false }
});

const Logs = mongoose.model('Log', logSchema)

module.exports = Logs