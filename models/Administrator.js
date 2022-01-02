const mongoose = require('mongoose')

const AdministratorSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Administrator', AdministratorSchema)