const express = require('express')
const router = express.Router()

// @desc    Render homepage
// @route   GET /
router.get('/', (req, res) => {
    res.render('index')
})

// @desc    Render admin login page
// @route   GET /admin
router.get('/admin', (req, res) => {
    res.render('admin')
})

module.exports = router