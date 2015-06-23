var Hapi = require('hapi');
var Hoek = require('hoek');

var package = require('../package.json');


var internals = {
	description: package.description,
	staticVersion: {
		version: package.version
	}
};

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8080
});


// Add the route
server.route({
	method: 'GET',
	path: '/version',
	handler: function (request, reply) {
		return reply(internals.staticVersion);
	}
});

server.start(function (error) {
	Hoek.assert(!error, error);	
	console.log(internals.description, server.info.uri);
});

module.exports = server;