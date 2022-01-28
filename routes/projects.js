
const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

// @desc    Render form to add new project
// @route   GET /projects/add
router.get('/add', (req, res) => {
    res.render('add-project')
})

// @desc    Post new project to DB
// @route   POST /projects/add
router.post('/add', async (req, res) => {
    res.send(req.body);
})

// @desc    Render form to edit existing project
// @route   GET /projects/edit/:id
router.get('/edit/:id', async (req, res) => {
   
})

// @desc    Handle editing a project
// @route   PUT /projects/:id
router.put('/:id', async (req, res) => {
    
})

// @desc    Render project specific page
// @route   GET /projects/view/:id
router.get('/view/:id', async (req, res) => {
    
})

// @desc    Delete a project
// @route   DELETE /projects/:id
router.delete('/:id', async (req, res) => {
    
})

module.exports = router