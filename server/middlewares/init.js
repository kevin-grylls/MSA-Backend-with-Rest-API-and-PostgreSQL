const debug = require("debug")("product:server");

const onError = () => {
  if (error.syscall !== "listen") {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(app.get("port") + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(app.get("port") + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

module.exports = app => {
  const server = require("http").Server(app);
  server.listen(app.get("port"));
  server.on("error", onError);
  server.on("listening", () => {
    console.log("[", new Date(), "]", "Account Server: OK");
    debug("Service Port:", app.get("port"));
  });
};
