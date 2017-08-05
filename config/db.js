var mongoose = require('mongoose');
var credentials = require('./../credentials');


module.exports = function (app) {	
		switch(app.get('env')){
				case 'development':
					mongoose.connect(credentials.mongo.development.connectionString);
					break;
				case 'production':
					mongoose.connect(credentials.mongo.production.connectionString);
					break;
				default:
					throw new Error('Unknown execution environment: ' + app.get('env'));
		}
}