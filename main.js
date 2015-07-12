var Hapi = require('hapi');

// Create a server with a host and a port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add a route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        reply('GITBAAS GITBAAS GITBAAS');
    }
});

// Start the server
server.start();
