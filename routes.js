const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.route("/bfhl").get(controller.getRequest).post(controller.postRequest);

module.exports = router;
