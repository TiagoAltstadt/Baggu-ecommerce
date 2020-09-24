const { validationResult } = require('express-validator');
//----File System----
const fs = require('fs');

//----Data Base----
let db = require('../database/models');



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


        //  Pido buscar en la db si hay coincidencia
        db.Users.findOne({ where: { email: req.body.email } })
            .then(function (user) {


                //  De ser nulo el valor (no hay coincidencia) retorno un console.log que diga que esta mal
                if (user == null) {
                    console.log('No hay mail.');

                    //   Pero si funciona 
                } else { 

                    console.log('El Email esta bien.');

                    //   Corroboro la password
                    if (user.password == req.body.password) {

                        console.log('La password esta bien.');
                        
                        userData = user.dataValues;
                        delete userData.password
        
                        req.session.user = userData;


                    } else {

                        console.log('La password esta mal.');
                    }

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