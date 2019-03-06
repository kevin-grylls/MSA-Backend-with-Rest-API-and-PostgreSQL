const hateoasLinker = require("express-hateoas-links");
const metaData = require("../config/api/users.meta");
const apiSpec = require("../config/api/users.api.json");

module.exports = app => {
  app.use(hateoasLinker);
  app.get("/", (req, res) => {
    res.json(metaData, apiSpec);
  });
};
