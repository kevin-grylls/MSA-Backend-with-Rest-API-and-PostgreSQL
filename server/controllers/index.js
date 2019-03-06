const msg = require("../../modules/massage");
const TEXT = require("../../common/language.json").RESPONSE;
const READ = TEXT.GET;

const select = (req, res) =>
  res.status(READ.true.code).send(msg.write(data, READ.true.string));

const insert = (req, res) =>
  res.status(CREATE.true.code).send(msg.write(null, CREATE.true.string));

const update = (req, res) =>
  res.status(UPDATE.true.code).send(msg.write(null, UPDATE.true.string));

const remove = (req, res) =>
  res.status(DELETE.true.code).send(msg.write(null, DELETE.true.string));

module.exports = {
  select,
  insert,
  update,
  remove
};
