module.exports = (req, res, next) => {

    //este middleware va a controlar si estas registrado para dejarte pasar, en caso de que no estes registrado te manda a /login

    if (req.session.user){
        next();
    }else {
        res.redirect('/users/login');
    }
}