module.exports = (req, res, next) => {

    //console.log(req.session);
    if (req.session){
        console.log(req.session);
    }else {
        //console.log('Usuario no esta logueado.');
    }
    next();

}