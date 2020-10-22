let express = require('express');
let router = express.Router();
let productsApiController = require('../../controllers/api/productsController');

router.get('/', productsApiController.list); 
router.get('/:id', productsApiController.find);

module.exports = router;