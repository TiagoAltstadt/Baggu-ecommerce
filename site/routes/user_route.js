//----Express----
const express = require('express');

//----metodo Router----
const router = express.Router();

//----Controlador de Usuarios----
const userController = require('../controllers/userController.js');

//----Multer----
const multer = require('multer');
let path = require('path');
const { check } = require('express-validator');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

//----Rutas----

router.get('/', userController.list);

router.get('/register', userController.register);
router.post('/register', upload.any(), userController.store);

router.get('/login', userController.login);
router.post('/login', [
    check('email').isEmail().withMessage('Email Invalido.'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener minimo 8 caracteres.')
    ], userController.processLogin);

router.get('/:id', userController.profile);

router.get('/:id/edit', userController.edit);
router.put('/:id', userController.update);

router.get('/search', userController.search); //SIN TERMINAR



//----Export----
module.exports = router;
