let express = require('express');

let router = express.Router();

router.get('/', function(req, res){
    res.render('productos.ejs', { root: './views'});
});

module.exports = router;