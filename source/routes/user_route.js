const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/register' , userController.register);

router.post('/register' , userController.create);

router.get('/login' , userController.login);

router.get('/list' , userController.list);

router.get('/search' , userController.search);

router.get('/user/:id' , userController.user);

module.exports = router;
