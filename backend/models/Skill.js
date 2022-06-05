const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    url: String,
    filename: String,
  },
});

module.exports = mongoose.model('Skill', SkillSchema);
