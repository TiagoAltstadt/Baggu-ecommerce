//  Este middleware basicamente chequea si existe una sesion, si existe la guarda en locals y sino declara locals como undefined

module.exports = function(req, res, next) {

    if (req.session.user != undefined) {
        res.locals.loggedUser = req.session.user;
    } else {
        res.locals.loggedUser = undefined;
    }
    next();
}