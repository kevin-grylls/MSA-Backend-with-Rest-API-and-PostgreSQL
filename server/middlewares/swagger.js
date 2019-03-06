const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../config/api/api.json");

module.exports = app => {
  if (app.get("env") === "development") {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  }
};
