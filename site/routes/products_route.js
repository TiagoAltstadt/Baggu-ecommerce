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

//----Lock Midleware----
const loggedOut_lock = require('../middlewares/loggedOut_lock');
const loggedIn_lock = require('../middlewares/loggedIn_lock');
const god_lock = require('../middlewares/god_lock');

//----Rutas----

router.get('/descartables', productsController.list1);
router.get('/papeleria', productsController.list2);
router.get('/higiene', productsController.list3);

router.get("/search", productsController.search);

router.get('/cart',loggedOut_lock, productsController.cart);

router.get  ('/create', god_lock, productsController.create);
router.post ('/create', upload.any(), productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit',god_lock , productsController.edit);
router.put('/:id', upload.any(), productsController.update);

router.delete('/:id', productsController.delete);   


//----Export----
module.exports = router;