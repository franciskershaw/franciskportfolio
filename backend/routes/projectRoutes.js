const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const Project = require('../models/Project');

router.get('/', asyncHandler(async (req, res) => {
	try {
		const projects = await Project.find();
		res.status(200).json(projects);
	} catch (err) {
		console.log(err);
	}
}));

router.post('/', asyncHandler(async (req, res) => {
	try {
		const project = await Project.create(req.body)
		res.status(201).json(project)
	} catch (err) {
		console.log(err)
	}
}))

router.put('/:id', asyncHandler(async (req, res) => {
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

		res.status(200).json(updatedProject)
	
	} catch (err) {
		console.log(err)
	}
	
}))

module.exports = router;