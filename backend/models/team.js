const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
	teamName: String,
	teamFoundation: String,
	teamStadium: String
});
const team = mongoose.model('Team', teamSchema);
module.exports = team;
