let express = require('express');

let router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/:id', productosController.detalle);

module.exports = router;