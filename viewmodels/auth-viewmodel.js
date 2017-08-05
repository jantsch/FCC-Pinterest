

exports.createMyPins = function (pins,user) {
	console.log(user. authId);
			var context = {
				'nav_settings' : {
					'mypins': true,
					'auth': true
				},
				cards: pins.map(function(pin){
					return {
						imageURL: pin.urlImage,
						title: pin.title,
						description: pin.description,
						userName: pin.userName,
						likes: pin.likes,	
						isMine: (user.authId == pin.userID ? true : false),
						id: pin._id
					}
					})
			};
			return context;	
		
	
}

exports.createNewPic = function () {			
	
}



