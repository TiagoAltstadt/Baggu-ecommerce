const { check } = require('express-validator');

module.exports = {
    createForm: [
        check('username')
            .notEmpty().withMessage('(Back)Debes agregar un nombre de usuario.').bail()
            .isLength({ min: 5 }).withMessage('(Back)El nombre de usuario debe tener al menos 5 caracteres.'), 
        check('name')
            .notEmpty().withMessage('(Back)Debes agregar un nombre.').bail()
            .isLength({ min: 5 }).withMessage('(Back)El nombre debe tener al menos 5 caracteres.'), 
        check('surname')
            .notEmpty().withMessage('(Back)Debes agregar un apellido.').bail()
            .isLength({ min: 5 }).withMessage('(Back)El apellido debe tener al menos 5 caracteres.'), 
        check('email')
            .notEmpty().withMessage('(Back)Debes completar el campo de email').bail()
            .isLength({ min: 5 }).withMessage('(Back)El email debe tener al menos 5 caracteres').isEmail().withMessage('(Back)Email invalido.'),
        check('password')
            .notEmpty().withMessage('(Back)Debes completar el campo de contraseña').bail()
            .isLength({ min: 5 }).withMessage('(Back)La contraseña debe tener al menos 5 caracteres'),
    ],
    loginForm: [
        check('email')
            .notEmpty().withMessage('(Back)Debes completar el campo de email').bail()
            .isEmail().withMessage('(Back)Email invalido.'),
        check('password')
            .notEmpty().withMessage('(Back)Debes completar el campo de contraseña').bail()
            .isLength({ min: 5 }).withMessage('(Back)La contraseña debe tener al menos 5 caracteres.'),
    ]
}