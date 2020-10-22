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
        if (errors.isEmpty()) {
            let newUser = {
                avatar: 'default.png',
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category_user_id: 1
            }
            if (req.files.length){
                newUser.avatar = req.files[0].filename;
            } 
            db.Users.create(newUser)
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
        if(errors){
            console.log(errors);
        }else{
            console.log('- No se detectaron errores.');
        }
        if (errors.isEmpty()) {

            console.log('\n\n\n\n--------------------------INSTANCIA DE LOGUEO--------------------------');

            //  Pido buscar en la db si hay coincidencia
            db.Users.findOne({ where: { email: req.body.email } })
            
            .then(user => {
            
                //  Si existe usuario
                if (user) {
                    console.log('- El Email esta bien. (' + user.email +')');

                    //   Si coincide password
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        req.session.user = user;

                        console.log('- La password esta bien.');
                        console.log('---------------------------------------------');
                        console.log('\n\n\n\n');
                        
                        res.redirect('/');
                    } 
                    //  No coincide password
                    else {
                        res.render('users/login', {
                            errors: { password: { msg: 'La Contraseña esta mal.'}},
                            user: req.body
                        });
                        console.log('- La password esta mal.')
                        console.log('---------------------------------------------');
                        console.log('\n\n\n\n');
                        
                    }
                }   //No existe usuario
                else {
                    res.render('users/login', {
                        errors: { email: { msg: 'El mail esta mal.'}},
                        user: req.body
                    });
                    console.log('- El email esta mal');
                    console.log('---------------------------------------------');
                    console.log('\n\n\n\n');
                    
                }
            })
        }
        else{
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

        let updatedUser = {
            username: req.body.username,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            category: 1,
        }
        if (req.files.length){
            updatedUser.avatar = req.files[0].filename;
        } 
        db.Users.update(updatedUser, { where: { id: req.params.id } })
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