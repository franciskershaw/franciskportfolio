const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Administrator = require('../models/Administrator')

// @desc    Temporary register page for hashing passwords
// @route   GET /register
router.get('/register', (req, res) => {
    res.render('register-temp')
})

// @desc    Render admin login page
// @route   GET /admin
router.get('/admin', (req, res) => {
    res.render('login')
})

// @desc    Handle registration
// @route   POST /register
router.post('/register', async (req, res) => {
    
})

module.exports = router