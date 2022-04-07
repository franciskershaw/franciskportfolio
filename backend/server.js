const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const connectDB = require('./config/db');
const colors = require('colors');
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
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to production' });
  });
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the FK Portfolio API' });
  });
}

// Listen for app
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
