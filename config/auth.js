var User = require('../models/user.model.js');
var	TwitterStrategy = require('passport-twitter').Strategy;


module.exports = function (passport,credentials) {
	passport.serializeUser(function(user, done){	
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done){	
		User.findById(id, function(err, user){
			if(err || !user) return done(err, null);
			done(null, user);
		});
	});


	passport.use(new TwitterStrategy({
	    consumerKey: credentials.twitter.APIKey,
	    consumerSecret: credentials.twitter.APISecret,
	    callbackURL: credentials.twitter.callbackURL
	  },
	  function(token, tokenSecret, profile, done) {	 	 
			var authId = 'twitter:' + profile.id;
			User.findOne({ authId: authId }, function(err, user){
				if(err) return done(err, null);
				if(user) return done(null, user);
				user = new User({
					authId: authId,
					name: profile.displayName,
					created: Date.now(),
					role: 'customer',
				});
				user.save(function(err){
					if(err) return done(err, null);
					done(null, user);
				});
			});
	  }
	));
}