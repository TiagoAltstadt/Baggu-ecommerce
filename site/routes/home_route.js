const express = require('express');
const router = express.Router();

const homeController = require ("../controllers/homeController.js");
const session = require('express-session');

router.get('/', homeController.index);

router.get('/contact', homeController.contact);

router.get('/acerca-de', homeController.aboutUs);

router.get('/new', homeController.new);

// router.get('/preubaSession', function (req, res){

//     if(req.session.numeroVisitas == undefined){
//         req.session.numeroVisitas == 0;
//     }

//     req.session.numeroVisitas++;

//     res.send("Numero " +  req.session.numeroVisitas);
// });

module.exports = router;
