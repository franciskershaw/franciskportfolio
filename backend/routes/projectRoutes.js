const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });

const { protectRoute } = require('../middleware/authMiddleware');

const Project = require('../models/Project');

// Get all projects
router.get('/', asyncHandler(async (req, res) => {
	try {
		const projects = await Project.find();
		res.status(200).json(projects);
	} catch (err) {
		console.log(err);
	}
}));

// Post a new project
router.post('/', protectRoute, upload.single('screenShot'), asyncHandler(async (req, res) => {
	try {
		const project = new Project(req.body)
		project.screenShot = {
			url: req.file.path, 
			filename: req.file.filename
		}
		await project.save();
		res.status(201).json(project)
	} catch (err) {
		console.log(err)
	}
}))

// Edit a specific project
router.put('/:id', protectRoute, upload.single('screenShot'), asyncHandler(async (req, res) => {
	try {
		const project = await Project.findById(req.params.id)
	
		if (!project) {
			res.status(404)
			throw new Error('Project not found')
		}

		const updatedProject = await Project.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true}
		)
		updatedProject.screenShot = {
			url: req.file.path,
			filename: req.file.filename
		}
		await updatedProject.save()

		res.status(200).json(updatedProject)
	
	} catch (err) {
		console.log(err)
	}
	
}))

// TEMP upload an image
router.post('/upload', upload.single('image'), (req, res) => {
	res.send(req.file);
})

// Delete a project

module.exports = router;