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

module.exports = router;