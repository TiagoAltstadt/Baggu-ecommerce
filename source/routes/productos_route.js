let express = require('express');
const productosController = require('../controllers/productosController');

let router = express.Router();

//Listado de productos
router.get('/', productosController.list);

//Formulario de creación de productos
router.get('/create', productosController.create);

//Acción de creación (a donde se envía el formulario)
router.post('/create', productosController.store);

//Detalle de un producto particular
router.get('/:id', productosController.detail);

//Formulario de edición de productos
router.get('/:id/edit', productosController.edit);

//Confirmacion de edicion
router.put('/:id/edit', productosController.update);


module.exports = router;