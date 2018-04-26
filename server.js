const StaticServer = require("static-server");

const server = new StaticServer({
	rootPath: "./client",
	port: 3000
});

server.start(() => {
	console.log("Battlecruiser operational. Running on port: ", server.port);
});
