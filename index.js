const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const index = require("./server/routes");
const CONFIG = require("./common/config");

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

require("./server/middlewares/hateoas")(app);
require("./server/middlewares/swagger")(app);
require("./server/middlewares/session")(app);

app.use("/v1", index);

require("./server/middlewares/error")(app);
process.on("uncaughtException", err => {
  console.error("uncaughtException: ", err);
});

app.set("port", CONFIG.service.port.serviceOne[express().get("env")]);
require("./server/middlewares/init")(app);

module.exports = app;
