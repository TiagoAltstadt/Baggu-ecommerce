let express = require('express');
const productosController = require('../controllers/productosController');

let router = express.Router();

router.get('/', productosController.list);


module.exports = router;