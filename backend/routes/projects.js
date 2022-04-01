const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

// @desc    Render project management page
// @route   GET /projects
router.get('/', (req, res) => {
    res.render('projects');
})

// @desc    Post new project to DB
// @route   POST /projects
router.post('/', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.send(`Successfully created a project, id=${project.id}`);
})

// @desc    Render form to add new project
// @route   GET /projects/add
router.get('/add', (req, res) => {
    res.render('add-project')
})

// @desc    Render project specific page
// @route   GET /projects/view/:id
router.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    if(!project) {
        res.send('Does not exist')
    }
    res.send(`Showing page for ${project.title}`)
})

// @desc    Render form to edit existing project
// @route   GET /projects/edit/:id
router.get('/edit/:id', async (req, res) => {
   const { id } = req.params;
   const project = await Project.findById(req.params.id);
})

// @desc    Handle editing a project
// @route   PUT /projects/:id
router.put('/:id', async (req, res) => {
    
})

// @desc    Delete a project
// @route   DELETE /projects/:id
router.delete('/:id', async (req, res) => {
    
})

module.exports = router