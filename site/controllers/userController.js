//----File System----
const fs = require('fs');

const userController = {
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
    list: 
        function(req, res){      

            //creo una variable auxiliar donde le meto users.json y lo parseo
            let users = fs.readFileSync( './data/users.json' , {encoding: 'utf-8'});
            let usersJSON = JSON.parse(users);

            //renderizo la vista y le envio users, que contiene el json con la base de datos
            res.render('../views/users/list_user.ejs', {'users': usersJSON});
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
    update: 
        function(req, res){
        
        }
};

//----Exports----
module.exports = userController;