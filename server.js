// Use command `node server.js to run` 

const StaticServer = require("static-server");

const server = new StaticServer({
	rootPath: "./client",
	port: 3000
});

server.start(function() {
	console.log("Loud and clear on port: ", server.port);
});
