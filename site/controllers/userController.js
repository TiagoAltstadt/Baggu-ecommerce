//----File System----
const fs = require('fs');

//----Data Base----
let db = require('../database/models');

const userController = {
    list: 
        function(req, res){      

            db.Users.findAll()
                .then(function(users) {
                    res.render('../views/users/list_user.ejs', {users:users});
                })


            /* LIST CON JSON
            //creo una variable auxiliar donde le meto users.json y lo parseo
            let users = fs.readFileSync( './data/users.json' , {encoding: 'utf-8'});
            let usersJSON = JSON.parse(users);
            
            //renderizo la vista y le envio users, que contiene el json con la base de datos
            res.render('../views/users/list_user.ejs', {'users': usersJSON});
            */
            
        },
    register: 
        function(req, res){
            res.render('./users/register.ejs');
        },
    login: 
        function(req, res){
            res.render('./users/login.ejs');
        },
    search: 
        function(req, res){
            let aux = fs.readFileSync( './data/users.json' , {encoding: 'utf-8'});
            let usersJSON = JSON.parse(aux);

            let busqueda = req.query.search;

            let usersResults = [];

            for (let i=0; i<usersJSON.length; i++){
                if (usersJSON[i].name.includes(busqueda)){
                    usersResults.push(usersJSON[i]);
                }
            }

            res.render('usersResults.ejs', {usersResults: usersResults});
        },
    store: 
        function(req,res, next){

            //guardo todos los datos del formulario en la variable producto
            const user = {
                id: parseInt(req.body.id),
                image: req.files[0].filename,
                user: req.body.user,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password,
                category: req.body.category
            }

            //leo el json de productos y lo paso a la variable archivoUsers
            const archivoUsers = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });

            //defino users y digo, si esta vacia, creala, si tiene algo, parsealo para poder trabajar con eso
            let users;

            if (archivoUsers == '') {
                users = []
            } else {
            users = JSON.parse(archivoUsers);
            }

            //sea cual sea el output, le meto la nueva info que declare mas arriba en users
            users.push(user);

            //lo vuelvo un string para guardarlo
            const usersJSON = JSON.stringify(users);

            //uso write para pisar la data previa y guardar todo lo nuevo
            fs.writeFileSync('./data/users.json', usersJSON);

            //redirecciono
            res.redirect('/users');

        },
    detail: 
        function(req, res){
            //creo una variable auxiliar donde le meto users.json y lo parseo
            let aux = fs.readFileSync( './data/users.json' , {encoding: 'utf-8'});
            let usersJSON = JSON.parse(aux);

            //creo una variable a la que le meto el id que pedi en la url y le resto uno porque sino no anda
            let data = req.params.id - 1;

            //renderizo la vista y le envio users, que contiene el json con la base de datos + la variable data que va a definir cual usuario mostrar en los campos a completar
            res.render('../views/users/user.ejs', {'users': usersJSON, 'data': data} ); 
        },
    edit: function(req, res){

        //leo el json de usuarios y lo paso a la variable archivoUsuarios como objeto literal
        const archivoUsuarios = fs.readFileSync( './data/users.json' , {encoding: 'utf-8'});
        const userJSON = JSON.parse(archivoUsuarios);

        //creo la variable data y le paso la info del url para que sepa de que usuario estamos hablando
        let data = req.params.id - 1;

        //renderizo la vista y le envio users, que contiene el json con la base de datos + la variable data que va a definir cual usuario mostrar en los campos a completar
        res.render('./users/edicion_users.ejs', {'users': userJSON, 'data': data});
        },
    update: 
        function(req, res){
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
 
             let updated = users.map( function(update){
                 if (update.id == idUser){
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
                 else{
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