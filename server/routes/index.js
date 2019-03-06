const express = require("express");
const router = express.Router();
const { bodyValidator, getValidation } = require("../middlewares");
const { select, insert, update, remove } = require("../controllers");

router.get("/", select);
router.post("/", bodyValidator, getValidation, insert);
router.put("/", bodyValidator, getValidation, update);
router.delete("/:param2", remove);

module.exports = router;
