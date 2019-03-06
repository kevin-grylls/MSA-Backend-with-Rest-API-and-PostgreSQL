const config = require("./database");
const env = require("express")().get("env");
const postgres = config.postgres[env];
const pgp = require("pg-promise")(postgres.options);
const db = pgp(postgres.url);

module.exports = db;
