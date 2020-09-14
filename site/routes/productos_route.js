let express = require('express');

//Multer
const multer = require('multer');
let path = require('path');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/products')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});

const productosController = require('../controllers/productosController');

let router = express.Router();

//Listado de productos
router.get('/', productosController.list);

//ruta a carrito
router.get('/carrito', productosController.carrito);

//Formulario de creación de productos
router.get('/create', productosController.create);
//Acción de creación (a donde se envía el formulario)
router.post('/create', upload.any(), productosController.store);

//Detalle de un producto particular
router.get('/:id', productosController.detail);

//Formulario de edición de productos
router.get('/:id/edit', productosController.edit);
//Acción de edición (a donde se envía el formulario):
router.put('/:id', productosController.update);

//Acción de borrado
router.delete('/:id', productosController.delete);

module.exports = router;