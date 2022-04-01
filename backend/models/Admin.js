const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const AdminSchema = new mongoose.Schema({});
AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Admin', AdminSchema)