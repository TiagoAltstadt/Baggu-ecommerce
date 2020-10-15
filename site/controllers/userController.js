const { validationResult } = require('express-validator');
//----File System----
const fs = require('fs');

//----Data Base----
let db = require('../database/models');

//----Bcrypt----
const bcrypt = require('bcryptjs');


const userController = {

    list: function (req, res) {
        db.Users.findAll()
            .then(function (users) {
                res.render('../views/users/list_user.ejs', { users: users });
            })
    },

    register: function (req, res) {
        let aux = req.params.id;
        res.render('./users/register.ejs', { data: aux });
    },

    store: function (req, res, next) {

        let errors = validationResult(req);

        console.log(errors);

        if (errors.isEmpty()) {
            
            
            let avatarOK = '../public/img/user_default/default.png';

            db.Users.create({
                avatar: avatarOK,
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category_user_id: 1
            })
                .then(user => {
                    res.redirect('/');
            })
        }
        else{
            
            console.log(errors.mapped);
            res.render('users/register', { errors: errors.mapped(), data: req.body });
        }
    },

    login: function (req, res) {
        res.render('users/login');
    },

    processLogin: function (req, res) {
        let errors = validationResult(req);

        console.log(errors);

        if (errors.isEmpty()) {

            console.log('--------------------------INSTANCIA DE LOGUEO--------------------------');

            //  Pido buscar en la db si hay coincidencia
            db.Users.findOne({ where: { email: req.body.email } })
            .then(user => {
                //  De ser nulo el valor (no hay coincidencia) retorno un console.log que diga que esta mal
                if (user) {
                    console.log('- El Email esta bien.');
                    //   Corroboro la password 
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        req.session.user = user;
                        console.log('- La password esta bien.');
                        console.log('-----------------------------------------------------------------------');
                        res.redirect('/');
                    } else {
                        res.render('users/login', {errordb: 'La contraseña esta mal'});
                        console.log('- La password esta mal.')
                        console.log('-----------------------------------------------------------------------');
                    }
                } else {
                    res.render('users/login', {errordb: 'El mail esta mal'});
                    console.log('- El email esta mal');
                    console.log('-----------------------------------------------------------------------');
                }
            })
        }else{
            console.log(errors.mapped);
            res.render('users/login', { errors: errors.mapped(), data: req.body });
        }
    },

    profile: function (req, res) {
        let aux = req.params.id;
        db.Users.findByPk(aux)
            .then(function (user) {
                res.render('../views/users/user.ejs', { user: user });
            })
    },

    search: function (req, res) {
        let aux = req.params.id;
        db.Users.findByPk(aux)
            .then(function (user) {
                res.render('usersResults.ejs', { usersResults: user });
            })
    },

    edit: function (req, res) {
        db.Users.findOne({ where: { id: req.params.id } })
            .then(function (user) {
                res.render('./users/edicion_users.ejs', { user: user, data: req.params.id });
            })
    },

    update: function (req, res) {

        db.Users.update({
            avatar: req.body.avatar,
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category: 1,
        }, { where: { id: req.params.id } })
            .then(userUpdated => {
                res.redirect('/users');
            })
            .catch(error => console.log(error));
    },
    delete: function (req, res) {

        // borrar producto
        db.Users.destroy({ where: { id: req.params.id } });

        res.redirect('/users');
    },
    logout: function (req, res) {
        req.session.user = null;
        res.redirect('/');
    }

};

//----Exports----
module.exports = userController;