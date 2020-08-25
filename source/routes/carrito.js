let express = require('express');

let router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/', productosController.carrito);

module.exports = router;