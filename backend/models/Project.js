const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    liveSite: {
        type: String,
        required: true
    },
    gitRepo: {
        type: String,
        required: true
    },
    subHeading: {
        type: String,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        required: true
    },
    screenShot: {
        url: String,
        filename: String,
    },
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ]
})

module.exports = mongoose.model('Project', ProjectSchema)