const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Administrator = require('../models/Administrator')

// @desc    Render homepage
// @route   GET /
router.get('/', (req, res) => {
    res.render('index')
})

// @desc    Render admin login page
// @route   GET /admin
router.get('/admin', (req, res) => {
    res.render('login')
})


// @desc    Temporary register page for hashing passwords
// @route   GET /register
router.get('/register', (req, res) => {
    res.render('register-temp')
})

// @desc    Handle registration
// @route   POST /register
router.post('/register', async (req, res) => {
    try {
        const userName = await req.body.userName
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        await Administrator.create({
            userName: userName,
            password: hashedPassword
        })
        res.redirect('admin')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router