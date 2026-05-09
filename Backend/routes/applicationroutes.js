const express = require("express");

const {
  createApplication,
} = require("../controllers/applicationcontroller");

const router = express.Router();

router.post("/", createApplication);

module.exports = router;