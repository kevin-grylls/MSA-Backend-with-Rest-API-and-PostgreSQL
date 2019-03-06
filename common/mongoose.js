const config = require("./database");
const env = require("express")().get("env");
const mongo = config.mongo[env];
const mongoose = require("mongoose");

mongoose.connect(mongo.url, mongo.option).then(() => {}, err => {});

module.exports = mongoose;
