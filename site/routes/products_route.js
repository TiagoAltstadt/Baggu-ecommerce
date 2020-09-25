//----Express----
let express = require('express');
//----Path-----
let path = require('path');
//----Multer----
const multer = require('multer');

//--Metodo Router----
let router = express.Router();

//----Controlador de Productos----
const productsController = require('../controllers/productsController');


//---Funcionamiento de Multer----
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/fileProducts')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});


//----Rutas----

router.get('/', productsController.list);

router.get("/search", productsController.search);

router.get('/cart', productsController.cart);

router.get  ('/create', productsController.create);
router.post ('/create', upload.any(), productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.any(), productsController.update);

router.delete('/:id', productsController.delete);


//----Export----
module.exports = router;