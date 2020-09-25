const { validationResult } = require('express-validator');
//----File System----
const fs = require('fs');

//----Data Base----
let db = require('../database/models');

//----Bcrypt----
const bcrypt = require('bcryptjs');


const userController = {
    list:
        function (req, res) {

            db.Users.findAll()
                .then(function (users) {

                    res.render('../views/users/list_user.ejs', { users: users });
                })

        },
    register:
        function (req, res) {

            let aux = req.params.id;

            res.render('./users/register.ejs', { data: aux });
        },
    store:
        function (req, res, next) {

            db.Users.create({
                avatar: req.body.avatar,
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category: 1
            })
                .then(user => {
                    res.redirect('/');
                })


        },
    login: function (req, res) {
        let password = bcrypt.hashSync('mono@gmail.com', 10);
        console.log(bcrypt.compareSync('mono@gmail.com', '$2a$10$cuGGOcbTI4pc2KUZwX5.v.CD0XuzxQw3ME5p1IXh1RA'));

        res.render('users/login');
    },
    processLogin: function (req, res) {


        //  Pido buscar en la db si hay coincidencia
        db.Users.findOne({ where: { email: req.body.email } })
            .then(user => {

                //  De ser nulo el valor (no hay coincidencia) retorno un console.log que diga que esta mal
                if (user) {

                    console.log('El Email esta bien.');
                    console.log('Contraseña: ', user.password);
                    console.log('Contraseña body: ', req.body.password);
                    //   Corroboro la password 
                    if (bcrypt.compareSync(req.body.password, user.password)) {

                        console.log('La password esta bien.');

                        userData = user.dataValues;
                        delete userData.password

                        req.session.user = userData;

                    } else {

                        console.log('La password esta mal.');
                    }

                } else {
                    console.log('Email Invalido.');
                }
            })

        res.redirect('/');


    },
    profile:
        function (req, res) {

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
            category: 1

        },
            {
                where: {
                    email: req.params.email
                }
            })
        res.redirect('/');

    }
};

//----Exports----
module.exports = userController;