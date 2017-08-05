var Pin = require('./../../models/pin.model.js');
var VM = require('./../../viewmodels/no-auth-viewmodel.js');

exports.root = function (req,res) {

		Pin.find({ }, function(err, pins){
			if(err) return next(err);	
			res.render('board', VM.createRoot(pins, req));		
	})
}

