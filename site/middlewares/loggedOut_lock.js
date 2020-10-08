//  Este middleware va a controlar que solo un user logueado pueda entrar a ciertos lugares, en caso de que no pueda, te envia a login

module.exports = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/users/login');
    }
}