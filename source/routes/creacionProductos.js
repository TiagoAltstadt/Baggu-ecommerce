const express = require('express');
const productosController = require('../controllers/productosController.js');

const router = express.Router();

router.get('/', productosController.creacion);

module.exports = router;