//Student Name - Naga Sumanth Vema
//Student ID - 1227779282
//Due Date - 03/24/2024

const express = require('express');
const app = express();
const loggerMiddleware = require('./loggerMiddleware')

//Parse incoming request bodies.
app.use(express.urlencoded({extended : true }));

//using loggermiddleware
app.use(loggerMiddleware);

//Set EJS as templating engine
app.set('view engine', 'ejs');

//Serve the form
app.get('/', (req,res) => {
    res.render('form');
});

//Handle form submissions
app.post('/submit', (req,res) => {
    console.log(req.body); //This will log form data to console
    res.redirect('/');
});

//Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");;
});