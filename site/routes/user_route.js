//----Express----
const express = require('express');

//----metodo Router----
const router = express.Router();

//----Lock Midleware----
const loggedOut_lock = require('../middlewares/loggedOut_lock');
const loggedIn_lock = require('../middlewares/loggedIn_lock');

//----Controlador de Usuarios----
const userController = require('../controllers/userController.js');

//----Multer----
const multer = require('multer');
let path = require('path');
const { check } = require('express-validator');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/fileUsers')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

//----Rutas----

router.get('/', loggedOut_lock, userController.list);

router.get('/register', loggedIn_lock, userController.register);
router.post('/register', loggedIn_lock, upload.any(), userController.store);

router.get('/login', loggedIn_lock, userController.login);
router.post('/login', loggedIn_lock, [check('email').isEmail().withMessage('Email Invalido.'), check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener minimo 8 caracteres.')], userController.processLogin);
router.put('/logout', loggedIn_lock, userController.logout);

router.get('/:id', loggedOut_lock, userController.profile);

router.get('/:id/edit', loggedOut_lock, userController.edit);
router.put('/:id/edit', loggedOut_lock, userController.update);

router.put('/:id/delete', loggedOut_lock, userController.delete);



router.get('/search', loggedOut_lock, userController.search); //SIN TERMINAR

//----Export----
module.exports = router;