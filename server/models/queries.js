const QueryFile = require("pg-promise").QueryFile;
const path = require("path");

function sql(file) {
  const fullPath = path.join(__dirname, file); // generating full path;
  return new QueryFile(fullPath, { minify: true });
}

module.exports = {
  users: {
    select: sql("sample/select.sql"),
    insert: sql("sample/insert.sql"),
    update: sql("sample/update.sql"),
    delete: sql("users/delete.sql")
  }
};
