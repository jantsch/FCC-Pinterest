var authRoutes = require('./controllers/auth-routes');
var noAuthRoutes = require('./controllers/no-auth-routes');

module.exports = function(app,passport){


		function isLoggedIn (req, res, next) {
			if (req.isAuthenticated()) {
				return next();
			} else {
				res.render('no-auth');
			}
		}


		app.get('/', noAuthRoutes.root);
		app.get('/mypins',isLoggedIn, authRoutes.myPins);		
		app.post('/like', isLoggedIn, authRoutes.addLike);
		app.post('/pin',isLoggedIn, authRoutes.newPin);
		app.delete('/pin/:id_pin',isLoggedIn, authRoutes.delPin);


		// Authentication
		app.get('/auth/twitter', passport.authenticate('twitter'));
		app.get('/auth/twitter/callback', passport.authenticate('twitter', {
			successRedirect: '/',
			failureRedirect: '/'
		}));	
		app.get('/logout', function (req, res) {
			req.logout();
			res.redirect('/');
		});		
}