const express = require("express");
const router = express.Router();
let gifResource =  require('../requests/gifResource');
router.get('*', (req, res) => {
    //esto no muestra ningun gif, solo un log con el pedido
    gifResource.notFound()
    .then(function(results){
        console.log(results);
    })
    .catch(errors=>{
        console.log(errors);
    })
    res.status(404).render('404.ejs');
});

module.exports = router;
