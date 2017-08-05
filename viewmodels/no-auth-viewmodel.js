exports.createRoot = function(pins, req) {	
	function checkOwnership(pin) {
		if(req.user)
		{
			if(req.user.authId == pin.userID )
				return true;
			else
				return false;
		}
		else
			return false;
	}

	var context = {			
				'nav_settings' : {
						'all': true, 
						'auth': req.isAuthenticated()
			},
			cards: pins.map(function(pin){
				return {
					imageURL: pin.urlImage,
					title: pin.title,
					description: pin.description,
					userName: pin.userName,
					likes: pin.likes,
					isMine: checkOwnership(pin),
					id: pin._id	
				}
				})
		};	
		return	context;
}