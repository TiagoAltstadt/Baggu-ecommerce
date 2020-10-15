const { check } = require('express-validator');

module.exports = {
    createForm: [
        check('username')
            .notEmpty().withMessage('Debes agregar un nombre de usuario.').bail()
            .isLength({ min: 5 }).withMessage('El nombre de usuario debe tener al menos 5 caracteres.'), 
        check('name')
            .notEmpty().withMessage('Debes agregar un nombre.').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'), 
        check('surname')
            .notEmpty().withMessage('Debes agregar un apellido.').bail()
            .isLength({ min: 5 }).withMessage('El apellido debe tener al menos 5 caracteres.'), 
        check('email')
            .notEmpty().withMessage('Debes completar el campo de email').bail()
            .isLength({ min: 5 }).withMessage('El email debe tener al menos 5 caracteres').isEmail().withMessage('Email invalido.'),
        check('password')
            .notEmpty().withMessage('Debes completar el campo de contraseña').bail()
            .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
    ]
}