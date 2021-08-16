const mongoose = require('mongoose');
const searchSchema = mongoose.Schema({
	teamOne: String
});
const search = mongoose.model('Search', searchSchema);
module.exports = search;
