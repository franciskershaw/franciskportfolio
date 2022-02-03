const express = require('express');
const router = express.Router();
const passport = require('passport');

const Admin = require('../models/Admin');

// @desc    Temporary register page for hashing passwords
// @route   GET /auth/register
router.get('/register', (req, res) => {
    res.render('register-temp')
})

// @desc    Handle registration
// @route   POST /auth/register
router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = new Admin({ username });
        const registeredUser = await Admin.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err);
            req.flash('success', 'Well done');
            res.redirect('/');
        })
    } catch (e) {
        req.flash('success', 'error registering');
        res.redirect('register');
        console.log(e);
    }
})

// @desc    Render admin login page
// @route   GET /auth/login
router.get('/login', (req, res) => {
    res.render('login')
})


// @desc    log a user in
// @route   POST /auth/login
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'You did it!');
    res.redirect('/');
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged out');
    res.redirect('/');
})

module.exports = router