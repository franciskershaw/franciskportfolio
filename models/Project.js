const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    projectName: {
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
    // subHeading: {
    //     type: String,
    //     required: true
    // },
    // brief: {
    //     type: String,
    //     required: true
    // },
    // backgroundColor: {
    //     type: String,
    //     required: true
    // },
    // textColor: {
    //     type: String,
    //     required: true
    // },
    // screenShotOne: {
    //     type: String
    // },
    // screenShotTwo: {
    //     type: String
    // },
    // skills: {
    //     type: Array,
    //     required: true
    // }
})

module.exports = mongoose.model('Project', ProjectSchema)