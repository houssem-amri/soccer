const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
	playerName: String,
	playerAge: String,
	playerNumber: String,
	playerPoste: String
});
const player = mongoose.model('Player', playerSchema);
module.exports = player;
