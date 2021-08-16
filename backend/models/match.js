const mongoose = require('mongoose');
const matchSchema = mongoose.Schema({
	teamOne: String,
	teamTwo: String,
	scoreOne: String,
	scoreTwo: String,
	image: String
});
const match = mongoose.model('Match', matchSchema);
module.exports = match;
