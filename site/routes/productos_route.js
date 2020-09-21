//----Express----
let express = require('express');

//--Metodo Router----
let router = express.Router();

//----Controlador de Productos----
const productosController = require('../controllers/productosController');

//----Multer----
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

//----Rutas----

router.get('/', productosController.list);

router.get("/search", productosController.search);

router.get('/carrito', productosController.carrito);

router.get  ('/create', productosController.create);
router.post ('/create', upload.any(), productosController.store);

router.get('/:id', productosController.detail);

router.get('/:id/edit', productosController.edit);
router.put('/:id', productosController.update);

router.delete('/:id', productosController.delete);


//----Export----
module.exports = router;