//Imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Logs = require('./models/logs')
const cors =require('cors')
const db = mongoose.connection
const logsData = require('./utilities/data')
const logsController = require('./controllers/logs')

// dotenv 
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

// Connects to Mogodb Database
mongoose.connect(mongoURI, { useNewUrlParser: true},
   () => console.log('MongoDB connection establish') )

// Error messages
db.on('error', err => console.log(err.message + ' is why mongo is not running properly'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// no nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

app.use(cors({ origin: '*' })) // used to whitelist requests

// Routes
app.use('/logs', logsController) // telling server.js to get the routes from controllers/logs.js


// for mass seeding and deleting
app.get('/seed', async (req, res) => {
    await Logs.deleteMany({});
    await Logs.insertMany(logsData);
    res.send('done!');
  });

//port listener
app.listen(PORT, () => {
    console.log('This message means nothing', PORT)
  })