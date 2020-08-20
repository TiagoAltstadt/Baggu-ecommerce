const fs = require('fs');
let prueba = fs.readFileSync( './public/data/users.json' , {encoding: 'utf-8'});

let pruebaJSON = JSON.parse(prueba);


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

        for (let i=0; i<pruebaJSON.length; i++){
            if (pruebaJSON[i].name.includes(busqueda)){
                usersResults.push(pruebaJSON[i]);
            }
        }

        res.render('usersResults.ejs', {usersResults: usersResults});

    },
    create: function (req, res) {
        res.send();
    },
    list: (req, res) => {      

        res.render('list.ejs', {'users': pruebaJSON});
    }
};

module.exports = userController;