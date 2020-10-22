let express = require('express');
let router = express.Router();
let usersApiController = require('../../controllers/api/usersController');

router.get('/', usersApiController.list); 
router.get('/:id', usersApiController.find);

module.exports = router;