var mongoose = require('mongoose');

var pinSchema = mongoose.Schema({
		userID: String,
		userName: String,
		urlImage: String,
		title: String,
		description: String,
		likes:  { type: Number, default: 0 },
		likesList: [{id: String}]
});

module.exports =  mongoose.model('Pin', pinSchema);