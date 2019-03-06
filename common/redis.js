const redis = require("redis");
const params = require("./database").redis[require("express")().get("env")];
const config = {
  port: params.port,
  host: params.url,
  socket_keepalive: true
};
const redisClient = redis.createClient(config);

redisClient.on("ready", () => {
  console.log("[", new Date(), "]", "Redis Connection: OK");
});

redisClient.on("error", err => {
  console.error("[", new Date(), "]", "Redis Connection Error: ", err);
});

module.exports = redisClient;
