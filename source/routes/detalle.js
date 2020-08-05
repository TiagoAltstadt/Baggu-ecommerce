let express = require('express');

let router = express.Router();

router.get('/', function(req, res){
    res.render('detalle.ejs', {root: './views'});
});

module.exports = router;