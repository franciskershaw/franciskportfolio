const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Administrator = require('../models/Administrator')

// @desc    Temporary register page for hashing passwords
// @route   GET /auth/register
router.get('/register', (req, res) => {
    res.render('register-temp')
})

// @desc    Render admin login page
// @route   GET /auth/admin
router.get('/admin', (req, res) => {
    res.render('login')
})

// @desc    Handle registration
// @route   POST /auth/register
router.post('/register', async (req, res) => {
    
})

module.exports = router