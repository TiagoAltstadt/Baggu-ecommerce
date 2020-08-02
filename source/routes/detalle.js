let express = require('express');

let router = express.Router();

router.get('/', function(req, res){
    res.sendFile('detalle.html', {root: './views'});
});

module.exports = router;