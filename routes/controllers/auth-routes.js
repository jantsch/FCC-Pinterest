var validator = require('validator');
var Pin = require('./../../models/pin.model.js');
var VM = require('./../../viewmodels/auth-viewmodel.js');

exports.myPins = function(req, res){		
		Pin.find({'userID': req.user.authId }, function(err, pins){
			if(err) return next(err);	
				res.render('board', VM.createMyPins(pins,req.user));
		})
};

exports.newPin = function (req,res) {
		
		console.log(req.body.title);
		var isTitleValid = !validator.isEmpty(req.body.title);
		var isDescValid = !validator.isEmpty(req.body.description);
		var isUrlValid = !validator.isEmpty(req.body.url) && validator.isURL(req.body.url);
		
		if(isTitleValid && isDescValid && isUrlValid)
		{
			new Pin({
				userID: req.user.authId,
				userName: req.user.name,
				urlImage: req.body.url,
				title: req.body.title,
				description: req.body.description		
				}).save();
				console.log(req.body.url);
				
				res.send({redirect: '/mypins'});
		}
		else
		{
				if(!isTitleValid)
					res.send({"error": 'title-error'});
				else if(!isDescValid)
					res.send({"error": 'desc-error'});
				else if(!isUrlValid)
					res.send({"error": 'url-error'});
		



		}
}


exports.addLike = function (req,res) {
	
	Pin.findOne({'_id': req.body.id_pin }, function(err, pin){
			if(err) return next(err);
			
			
			if(!pin.likesList)
			{	
				pin.likesList = [];
				pin.likesList.push({'id' : req.user.authId});
				pin.likes++;				
				pin.save();
				
			}
			else
			{	// Check if user already voted
				var obj =  pin.likesList.filter(function (obj ) {
				    return obj.id === req.user.authId;
				})[0];

				if( obj)
				{	
					var filteredArray =  pin.likesList.filter(function (obj ) {
				   		return obj.id !== req.user.authId;
					});	
					pin.likesList = filteredArray;				
					pin.likes = filteredArray.length;
					pin.save(function(error, user){
						res.status(200).send({'action': 'del'});
					});
				}
				else
				{						
					pin.likesList.push({'id' : req.user.authId});
					pin.likes++;					
					pin.save(function(error, user){
						res.status(200).send({'action': 'add'});
					});
				}
				
			}

			
		})
}

exports.delPin = function (req,res) {
	
		Pin.findById(req.params.id_pin, function (err,pin){
		    if(err) { throw err; }
		    if(pin.userID == req.user.authId)
		    {
		    	console.log('Allows');
		    	pin.remove(function(err){  res.send({redirect: '/'});});
			}
		    else
		    	console.log('Not Allowed');
		 	
		})	
}