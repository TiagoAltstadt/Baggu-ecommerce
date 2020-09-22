const { validationResult } = require('express-validator');
//----File System----
const fs = require('fs');

//----Data Base----
let db = require('../database/models');

/*
Para chequear errores

let errors = validationResult(req); 
if(errors.isEmpty() ) {
    
}else{
    return res.render('login', {errors: errors.errors});
}

*/



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
                id: req.body.id,
                avatar: req.body.avatar,
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                category: req.body.category
            });

            res.redirect('/users')

        },
    login:
        function (req, res) {
            //creo la variable errors y la relleno con la validacion de resultados, si estan bien contestadas las cosas del form va a volver vacio
            let errors = validationResult(req);

            //envio la vista y los errores, si es que hay
            res.render('./users/login.ejs', { errors: errors.errors });
        },
    processLogin: function (req, res) {

        //creo la variable errors y la relleno con la validacion de resultados, si estan bien contestadas las cosas del form va a volver vacio
        let errors = validationResult(req);

        //si esta vacio, entra, sino, devuelvo los errores
        //if (errors.isEmpty()) {

        //si entro, busco en todos los usuarios y espero que se cumplan los requisitos (email y password)

        db.Users.findAll()
            .then(function (user) {

                console.log('flag');
                console.log(user.email + ' = ' + req.body.email);
                if (user.email == req.body.email && user.password == req.body.password) {
                    console.log('flag 2');
                    //si se cumple lo de arriba, a currentUser le mando el usuario que encontro y cierro el ciclo
                    req.session.currentUser = user;
                    console.log(req.session.currentUser);
                    if (currentUser == undefined) {
                        //si currentUser es undefined es porque no hubo coincidencia mas arriba y devuelvo un log que lo explica
                        console.log('Credenciales invalidas.')
                    } else {
                        //si no es undefined, lo meto en session
                        req.session.currentUser = currentUser;
                        console.log('funciono');
                    }
                }
            })

        return res.render('users/login.ejs', { errors: errors.errors });

        // } else {
        return res.render('users/login.ejs', { errors: errors.errors });
        // }
        //return res.render('login.ejs', { errors: errors.errors });
        console.log(req.session.currentUser);
    },
    profile:
        function (req, res) {

            let aux = req.params.id;

            db.Users.findByPk(aux)
                .then(function (user) {
                    res.render('../views/users/user.ejs', { user: user });
                })

        },
    search:
        function (req, res) {

            let aux = req.params.id;

            db.Users.findByPk(aux)
                .then(function (user) {
                    res.render('usersResults.ejs', { usersResults: user });
                })


        },
    edit: function (req, res) {

        //leo el json de usuarios y lo paso a la variable archivoUsuarios como objeto literal
        const archivoUsuarios = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });
        const userJSON = JSON.parse(archivoUsuarios);

        //creo la variable data y le paso la info del url para que sepa de que usuario estamos hablando
        let data = req.params.id - 1;

        //renderizo la vista y le envio users, que contiene el json con la base de datos + la variable data que va a definir cual usuario mostrar en los campos a completar
        res.render('./users/edicion_users.ejs', { 'users': userJSON, 'data': data });
    },
    update:
        function (req, res) {
            //guardo la id en una variable
            let idUser = parseInt(req.params.id) + 1;

            //guardo todos los datos del formulario en la variable user
            const user = {
                id: req.params.id,
                avatar: req.body.avatar,
                user: req.body.user,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                category: req.body.category
            }

            //leo el json de usuarios y lo paso a la variable archivoUsuarios como objeto literal
            const archivoUsuarios = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });
            const users = JSON.parse(archivoUsuarios);

            let updated = users.map(function (update) {
                if (update.id == idUser) {
                    let aux = update;
                    aux.id = user.id;
                    aux.avatar = user.avatar;
                    aux.user = user.user;
                    aux.name = user.name;
                    aux.surname = user.surname;
                    aux.email = user.email;
                    aux.password = user.password;
                    category = user.category

                    return user;
                }
                else {
                    return update;
                }
            })

            //lo vuelvo un string para guardarlo
            const usersJSON = JSON.stringify(updated, null, " ");

            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync('./data/users.json', usersJSON);

            //redirecciono
            res.redirect('/');

        }
};

//----Exports----
module.exports = userController;