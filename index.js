"use strict";

var Mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost:27017/ecom';
Mongoose.connect(mongoUri);

var connection = Mongoose.connection;
connection.once('open', function(){
	console.log('Successfully connected to: ' + mongoUri)
});

global.mongooseConnection = connection;
