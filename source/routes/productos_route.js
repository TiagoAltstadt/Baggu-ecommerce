let express = require('express');
const productosController = require('../controllers/productosController');

let router = express.Router();

//Listado de productos
router.get('/', productosController.list);

//Formulario de creación de productos
router.get('/create', productosController.create);

//Detalle de un producto particular
router.get('/:id', productosController.detail);

//Acción de creación (a donde se envía el formulario)
router.post('/create', productosController.store);

//Formulario de edición de productos
router.get('/:id/edit', productosController.edit);

//Acción de edición (a donde se envía el formulario):
router.put('/:id', productosController.update);

//Acción de borrado
//router.delete('/:id', productosController.delete);

module.exports = router;