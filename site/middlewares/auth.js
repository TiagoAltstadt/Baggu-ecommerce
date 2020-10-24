//  Este middleware basicamente chequea si existe una sesion, si existe la guarda en locals y sino declara locals como undefined

//----Data Base----
let db = require('../database/models');

module.exports = function(req, res, next) {
    if (req.session.user) {
        res.locals.loggedUser = req.session.user;
    } else if(req.cookies.remember){
        db.Users.findOne({ where: { email: req.cookies.remember } })
        .then(user =>{
            let userOK = user.dataValues;
                delete userOK.password;
                req.session.user = userOK;
                res.locals.loggedUser = userOK;
                console.log('+++++++++++++++++++++++');
                console.log(req.session.user);
                console.log(res.locals.loggedUser);
        })
    }
    next();
};