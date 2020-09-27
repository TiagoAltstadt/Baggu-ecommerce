module.exports = (req, res, next) => {

    //console.log(req.session);
    if (req.session){
        res.locals.user = req.session.user;
    }else {
        res.locals.user = null;
    }
    next();

}