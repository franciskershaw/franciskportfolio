const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

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

// Get individual skill
router.get('/:id', asyncHandler(async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id);
		res.status(200).json(skill)
	} catch (err) {
		console.log(err)
	}
}))

// Post skills
router.post('/', protectRoute, upload.single('icon'), asyncHandler(async (req, res) => {
	try {
		const skill = new Skill(req.body);
		skill.icon = {
			url: req.file.path, 
			filename: req.file.filename
		}
		await skill.save()
		res.status(201).json(skill)
	} catch (err) {
		console.log(err)
	}
}))

// Edit a specific skill
router.put('/:id', protectRoute, upload.single('icon'), asyncHandler(async(req, res) => {
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
		updatedSkill.icon = {
			url: req.file.path,
			filename: req.file.filename
		}
		await updatedSkill.save()
		
		res.status(200).json(updatedSkill)

	} catch (err) {
		console.log(err)
	}

}))

// Delete skills

module.exports = router;