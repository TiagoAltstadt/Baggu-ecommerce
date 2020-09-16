//----Express----
const express = require('express');

//----metodo Router----
const router = express.Router();

//----Controlador de Usuarios----
const userController = require('../controllers/userController.js');

//----Multer----
const multer = require('multer');
let path = require('path');
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/users')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});

//----Rutas----
router.get('/register' , userController.register);
router.post('/register' ,upload.any(), userController.store);

router.get('/login' , userController.login);

router.get('/' , userController.list);

router.get('/search' , userController.search);

router.get('/:id' , userController.detail);

router.put('/:id' , userController.update);


//----Export----
module.exports = router;
