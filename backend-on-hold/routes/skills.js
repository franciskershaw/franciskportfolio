const express = require('express');
const router = express.Router();

const Skill = require('../models/Skill');

// @desc    Render skills management page
// @route   GET /skills
router.get('/', async (req, res) => {
    const skills = await Skill.find({});
    res.render('skills', { skills });
})

// @desc    Render form for adding skills
// @route   GET /skills/add
router.get('/add', (req, res) => {
    res.render('add-skill');
})

// @desc    Add new skill to the DB
// @route   POST /skills/add
router.post('/add', async (req, res) => {
    const newSkill = new Skill(req.body)
    await newSkill.save();
    req.flash('success', 'Successfully added a new skill to the db');
    res.redirect('/');
})

// @desc    Render edit form for skills
// @route   GET /skills/:id/edit
router.get('/:id/edit', (req, res) => {
    res.send('Attempting to edit')
})

module.exports = router