const express = require('express');
const listController = require('../controllers/listController.js');

const router = express.Router();

router.get('/' , listController.list);

module.exports = router;
