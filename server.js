require('dotenv').config(); // call and configure your dotenv package
const express = require('express');
const mongoose = require('mongoose');

const app = express()
const PORT = 3000;

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Create a new route
app.get('/new', function(req, res) {
  res.render('New', { title: '', entry: '', shipIsBroken: false });
});

app.use((req, res, next) => {
    console.log(req.url)
    next()
})
// parses the data from the request
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('new');
})

app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    // gets the warning message out
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})