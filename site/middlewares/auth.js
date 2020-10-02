module.exports = function(req, res, next) {
    if (req.session.user != undefined){
        res.locals.loggedUser = req.session.user;
    }else {
        res.locals.loggedUser = undefined;
    }
    next();
}