require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Log = require('./models/Log');

const app = express()
const PORT = 3000;

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: false}))

const logs = [
    {
      title: 'Titanic',
      entry: 'This is the first log entry',
      shipIsBroken: false,
    },
    {
      title: 'USS Maine',
      entry: 'This is the second log entry',
      shipIsBroken: true,
    },
    {
      title: 'Santa Maria',
      entry: 'This is the third log entry',
      shipIsBroken: false,
    },
  ];

// Index Route - displays all logs
app.get('/logs', (req, res) => {
    res.render('Index', {logs: logs})
})

// New Route - displays form to create new log
app.get('/logs/new', (req, res) => {
    res.render('New')
})

// Create Route - creates a new log in the database
app.post('/logs', (req, res) => {
    logs.push(req.body)
    res.redirect('/logs')
})

// Show Route - displays a specific log by ID
app.get('/logs/:id', (req, res) => {
    const foundLog = logs[req.params.id]
    res.render('Show', {log: foundLog})
})

// Edit Route - displays form to edit a specific log by ID
app.get('/logs/:id/edit', (req, res) => {
    const foundLog = logs[req.params.id]
    res.render('Edit', {log: foundLog})
    console.log(foundLog);
})

// Update Route - updates a specific log by ID
app.put('/logs/:id', (req, res) => {
    logs[req.params.id] = req.body
    res.redirect(`/logs/${req.params.id}`)
})

// Destroy Route - deletes a specific log by ID
app.delete('/logs/:id', (req, res) => {
    logs.splice(req.params.id, 1)
    res.redirect('/logs')
})

app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    // gets the warning message out
    mongoose.set('strictQuery', false)
    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})