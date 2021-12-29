const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

router.get('/add', (req, res) => {
    res.render('add-project')
})

router.post('/add', async (req, res) => {
    try {
        await Project.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

module.exports = router