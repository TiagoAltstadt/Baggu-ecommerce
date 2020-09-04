const fs = require('fs');
let aux = fs.readFileSync( './public/data/users.json' , {encoding: 'utf-8'});

let usersJSON = JSON.parse(aux);


const userController = {
    register: (req, res) => {
        res.render('./users/register.ejs');
    },
    login: (req, res) => {
        res.render('./users/login.ejs');
    },
    search: (req, res) => {
        let busqueda = req.query.search;

        let usersResults = [];

        for (let i=0; i<usersJSON.length; i++){
            if (usersJSON[i].name.includes(busqueda)){
                usersResults.push(usersJSON[i]);
            }
        }

        res.render('usersResults.ejs', {usersResults: usersResults});

    },
    create: (req, res) => {
        res.render('./users/createUser.ejs');
    },
    store: (req,res) => {
        //guardo todos los datos del formulario en la variable producto
        const user = {
            id: req.body.id,
            avatar: req.body.avatar,
            user: req.body.user,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category
          }
          console.log(user);
        //leo el json de productos y lo paso a la variable archivoProductos
        const archivoUsers = fs.readFileSync('./public/data/users.json', { encoding: 'utf-8' });

        //defino productos y digo, si esta vacia, creala, si tiene algo, parsealo para poder trabajar con eso
        let users;

        if (archivoUsers == '') {
            users = []
        } else {
        users = JSON.parse(archivoUsers);
        }

        //sea cual sea el output, le meto la nueva info que declare mas arriba en productos
        users.push(user);

        //ño vuelvo un string para guardarlo
        const usersJSON = JSON.stringify(users);

        //uso write para pisar la data previa y guardar todo lo nuevo
        fs.writeFileSync('./public/data/users.json', usersJSON);

        //redirecciono
        res.redirect('/users/list');

    },
    list: (req, res) => {      

        res.render('./users/list.ejs', {'users': usersJSON});
    },
    user: (req, res) => {
        res.render('./users/user.ejs', {'users': usersJSON});
    }
};

module.exports = userController;