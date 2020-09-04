const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/register' , userController.create);

router.post('/register' , userController.store);

router.get('/login' , userController.login);

router.get('/list' , userController.list);

router.get('/search' , userController.search);

router.get('/user/:id' , userController.user);

module.exports = router;
