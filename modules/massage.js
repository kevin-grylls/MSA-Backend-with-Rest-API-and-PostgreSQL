const bcrypt = require("bcrypt");
const message = (module.exports = () => {});

message.write = (doc, message, status = true) => {
  let response = {
    status: status,
    message: message,
    data: doc
  };

  response.message = status === true ? message : "Error: " + message;

  return response;
};

message.genHash = (data, saltRounds) => {
  return bcrypt.hashSync(data, saltRounds);
};

message.compareHash = (plainText, hashText) => {
  return bcrypt.compareSync(plainText, hashText);
};
