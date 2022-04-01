const express = require('express');
const dotenv = require('dotenv').config()
const path = require('path');
const connectDB = require('./config/db');
// Grab port info from config
const PORT = process.env.PORT || 5000;

// Connect to Mongo database
connectDB();

// Initialize app
const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// app.use('/', require('./routes/index'));
// app.use('/auth', require('./routes/auth'));
// app.use('/projects', require('./routes/projects'));
// app.use('/skills', require('./routes/skills'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to production' })
    })
} else {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to the FK Portfolio API' })
    })
}


// Listen for app
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);