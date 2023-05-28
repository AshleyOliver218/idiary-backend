//Imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Journals = require('./models/journals')
const cors =require('cors')
const db = mongoose.connection
const journalSeeds = require('./utilities/data')
const journalsController = require('./controllers/journals')

// dotenv 
const app = express()
const DATABASE_URL = process.env.DATABASE_URL
const PORT = process.env.PORT || 3001

// Connects to Mogodb Database
mongoose.connect(DATABASE_URL, { useNewUrlParser: true},
   () => console.log('MongoDB connected') )

// Error messages
db.on('error', err => console.log(err.message + ' is why mongo is not running properly'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// no nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

app.use(cors({ origin: '*' })) // used to whitelist requests

// Routes
app.use('/journals', journalsController) // telling server.js to get the routes from controllers/journals.js


// for mass seeding and deleting
app.get('/seed', async (req, res) => {
    await Journals.insertMany(journalSeeds);
    res.send('done!');
  });

//port listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })

  //await Journals.deleteMany({});