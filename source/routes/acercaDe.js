const express = require("express");
const router = express.Router();

const homeController = require ("../controllers/homeController.js");

router.get('/acercaDe', homeController.acercaDe);

module.exports = router;
