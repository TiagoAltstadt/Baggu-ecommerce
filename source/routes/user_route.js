const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/register' , userController.create);

router.post('/register' , userController.store);

router.get('/login' , userController.login);

router.get('/' , userController.list);

router.get('/search' , userController.search);

router.get('/:id' , userController.detail);

module.exports = router;
