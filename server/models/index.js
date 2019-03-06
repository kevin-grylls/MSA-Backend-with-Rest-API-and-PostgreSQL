const db = require("../../common/postgres");
const QUERY = require("./queries").users;

module.exports = {
  select: () => db.one(QUERY.select),
  insert: (param1, param2) => db.none(QUERY.insert, [param1, param2]),
  update: (param1, param2) => db.none(QUERY.update, [param1, param2]),
  delete: (param1, param2) => db.none(QUERY.delete, [param1, param2])
};
