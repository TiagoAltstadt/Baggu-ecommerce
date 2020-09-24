module.exports = (req, res, next) => {

    console.log(req.session);
    if (req.session.user){
        console.log(req.session.user);
    }else {
        console.log('Usuario no esta logueado.');
    }
    next();

}