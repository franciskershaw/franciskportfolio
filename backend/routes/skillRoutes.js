const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { protectRoute } = require('../middleware/authMiddleware');

const Skill = require('../models/Skill');

// Get skills
router.get('/', asyncHandler(async (req, res) => {
	try {
		const skills = await Skill.find();
		res.status(200).json(skills)
	} catch (err) {
		console.log(err)
	}
}))

// Post skills
router.post('/', protectRoute, asyncHandler(async (req, res) => {
	try {
		const skill = await Skill.create(req.body);
		res.status(201).json(skill)
	} catch (err) {
		console.log(err)
	}
}))

// Edit a specific skill
router.put('/:id', protectRoute, asyncHandler(async(req, res) => {
	try {
		const skill = await Skill.findById(req.params.id)

		if(!skill) {
			res.status(404)
			throw new Error('Skill not found')
		}

		const updatedSkill = await Skill.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		
		res.status(200).json(updatedSkill)

	} catch (err) {
		console.log(err)
	}

}))

// Delete skills

module.exports = router;