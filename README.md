# Free Code Camp - Pinterest - RJ

## User Stories
User Story: As an unauthenticated user, I can login with Twitter.

User Story: As an authenticated user, I can link to images.

User Story: As an authenticated user, I can delete images that I've linked to.

User Story: As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.

User Story: As an unauthenticated user, I can browse other users' walls of images.

User Story: As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)



## Installation


### Packages

"express3-handlebars":  A Handlebars view engine for Express which doesn't suck. Link: https://github.com/ericf/express-handlebars

"mongoose": MongoDB object modeling designed to work in an asynchronous environment. Link: https://github.com/Automattic/mongoose

"passport-twitter": Twitter authentication strategy for Passport and Node.js. Link: https://github.com/jaredhanson/passport-twitter

"validator": A library of string validators and sanitizers. Link: https://github.com/chriso/validator.js/

### Startup

To install start using fcc-pinterest, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/jantsch/FCC-Pinterest.git your-project
```

To install the dependencies, enter the following in your terminal:

```
$ cd your-project
$ npm install
```

This will install the clone the project and install the components into the `your-project` directory.

### Setup Twitter Authentication

Please follow [this guide](https://dev.twitter.com/oauth/application-only) to register the application with Twitter and get API keys / secrets.

### Local Environment Variables

Create a file named `credentials.js` in the root directory. This file should contain:

```
'twitter': {
		'APIKey': 'your-client-id-here',
		'APISecret' : 'your-client-secret-here',
		'callbackURL': 'http://127.0.0.1:3000/auth/twitter/callback'
		},
	'mongo': {
		'development': {
			'connectionString': 'mongo-development-string-here'
		},
		'production': {
			'connectionString': 'mongo-development-string-here'
		}
	},
	'cdn':{
			'baseUrl': 'base-URL-store-images' 
	}
```

### Starting the App

To start the app, make sure you're in the project directory and type `npm run dev` into the terminal. This will start the Node server and connect to MongoDB.




