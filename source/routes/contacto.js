const express = require("express");
const router = express.Router();

const homeController = require ("../controllers/homeController.js");

router.get('/contacto', homeController.contacto);

module.exports = router;