const { check, validationResult } = require("express-validator/check");
const msg = require("../../modules/massage");
const TEXT = require("../../common/language.json").RESPONSE;

const bodyValidator = [check("param1").exists(), check("param2").exists()];

const getValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(TEXT.PUT.parameterError.code)
      .send(msg.write(errors.array(), TEXT.PUT.parameterError.string, false));
  } else {
    return next();
  }
};

module.exports = { bodyValidator, getValidation };
