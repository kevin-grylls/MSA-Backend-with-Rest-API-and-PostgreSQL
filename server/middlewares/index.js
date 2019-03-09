const { check, validationResult } = require("express-validator/check");

const bodyValidator = [check("param1").exists(), check("param2").exists()];

const getValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send(errors.array());
  } else {
    return next();
  }
};

module.exports = { bodyValidator, getValidation };
