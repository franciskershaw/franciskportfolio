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
    try {
        await Project.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.error(err)
    }
})

// @desc    Render form to edit existing project
// @route   GET /projects/edit/:id
router.get('/edit/:id', async (req, res) => {
    try {
        const project = await Project.findOne({
            _id: req.params.id
        }).lean()

        if (!project) {
            return res.render('error/404')
        } else {
            res.render('edit-project', {
                project,
            })    
        }
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

// @desc    Handle editing a project
// @route   PUT /projects/:id
router.put('/:id', async (req, res) => {
    try {
        let project = await Project.findById(req.params.id).lean()
        if (!project) {
            return res.render('error/404')
        } else {
            project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true
            })
            res.redirect('/')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

// @desc    Render project specific page
// @route   GET /projects/view/:id
router.get('/view/:id', async (req, res) => {
    try {
       let project = await Project.findById(req.params.id)
         .lean()
       if (!project) {
           return res.render('error/404')
       }

       res.render('view-project', {
           project
       })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

// @desc    Delete a project
// @route   DELETE /projects/:id
router.delete('/:id', async (req, res) => {
    try {
        await Project.deleteOne({ _id: req.params.id })
        res.redirect('/')
    } catch (err) {
        return res.render('error/500')
    }
})

module.exports = router